using Microsoft.EntityFrameworkCore;
using PortfolioApp.Data;

var builder = WebApplication.CreateBuilder(args);

// Bind to PORT provided by hosting platforms like Render
var portEnv = Environment.GetEnvironmentVariable("PORT");
if (!string.IsNullOrWhiteSpace(portEnv) && int.TryParse(portEnv, out var dynamicPort))
{
  Console.WriteLine($"Using dynamic port: {dynamicPort}");
  builder.WebHost.UseUrls($"http://0.0.0.0:{dynamicPort}");
}
else
{
  Console.WriteLine("No PORT environment variable found, using default configuration");
}

// Add services to the container.
builder.Services.AddControllersWithViews();

// Add API controllers
builder.Services.AddControllers();

// Add Entity Framework
builder.Services.AddDbContext<ApplicationDbContext>(options =>
{
  // Use SQLite for development (easier setup) - you can switch to SQL Server later
  options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")
      ?? "Data Source=portfolio.db");
});

// Add CORS policy for frontend-backend communication
builder.Services.AddCors(options =>
{
  options.AddPolicy("AllowFrontend", policy =>
  {
    policy.WithOrigins(
          "http://localhost:3000",  // React/Next.js dev server
          "https://vercel.app",     // Vercel deployment
          "https://*.vercel.app"    // All Vercel subdomains
      )
      .AllowAnyMethod()
      .AllowAnyHeader()
      .AllowCredentials();
  });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
  app.UseExceptionHandler("/Home/Error");
  // Removed HTTPS redirection for Render deployment
  // app.UseHsts();
  // app.UseHttpsRedirection();
}

// Only use HTTPS redirection in production
// app.UseHttpsRedirection(); // Commented out for development
app.UseStaticFiles();

app.UseRouting();

// Enable CORS
app.UseCors("AllowFrontend");

app.UseAuthorization();

// Map MVC routes
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=Index}/{id?}");

// Map API routes
app.MapControllers();

// Ensure database is created
using (var scope = app.Services.CreateScope())
{
  var context = scope.ServiceProvider.GetRequiredService<ApplicationDbContext>();
  context.Database.EnsureCreated();
  Console.WriteLine("Database initialized successfully");
}

// Simple health endpoint for platform health checks
app.MapGet("/healthz", () => Results.Ok(new { 
    status = "Healthy", 
    timestamp = DateTime.UtcNow,
    version = "1.1.0",
    port = Environment.GetEnvironmentVariable("PORT") ?? "default"
}))
   .WithName("Healthz")
   .WithTags("Health");

app.Run();