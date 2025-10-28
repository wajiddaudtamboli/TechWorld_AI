# Portfolio Deployment Script (Windows)
# This script automates the deployment process for the ASP.NET Core Portfolio application

Write-Host "🚀 Starting Portfolio Application Deployment..." -ForegroundColor Green

# Check if .NET is installed
try {
    $dotnetVersion = dotnet --version
    Write-Host "✅ .NET SDK found: $dotnetVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ .NET is not installed. Please install .NET 9.0 SDK first." -ForegroundColor Red
    exit 1
}

# Navigate to project directory
Set-Location PortfolioApp

# Clean previous builds
Write-Host "🧹 Cleaning previous builds..." -ForegroundColor Yellow
dotnet clean

# Restore packages
Write-Host "📦 Restoring NuGet packages..." -ForegroundColor Yellow
dotnet restore

# Build the application
Write-Host "🔨 Building the application..." -ForegroundColor Yellow
dotnet build --configuration Release

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed. Please check the errors above." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build successful" -ForegroundColor Green

# Publish the application
Write-Host "📦 Publishing the application..." -ForegroundColor Yellow
dotnet publish --configuration Release --output ./publish

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Publish failed. Please check the errors above." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Application published successfully" -ForegroundColor Green

# Display next steps
Write-Host ""
Write-Host "🎉 Deployment Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📁 Published files are in: ./publish" -ForegroundColor Cyan
Write-Host "🌐 To run locally: dotnet run" -ForegroundColor Cyan
Write-Host "🐳 To build Docker: docker build -t portfolio-app ." -ForegroundColor Cyan
Write-Host "☁️  Ready for deployment to Azure, Railway, or Render" -ForegroundColor Cyan
Write-Host ""
Write-Host "📚 Next Steps:" -ForegroundColor Yellow
Write-Host "1. Test locally: http://localhost:5000" -ForegroundColor White
Write-Host "2. Deploy to your preferred hosting platform" -ForegroundColor White
Write-Host "3. Configure production database connection" -ForegroundColor White
Write-Host "4. Set up custom domain and SSL" -ForegroundColor White
Write-Host ""
Write-Host "🆘 Support: wajiddaudtamboli123@gmail.com" -ForegroundColor Magenta

# Return to original directory
Set-Location ..