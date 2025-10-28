# TechWorld AI : Personalised Portfolio

This is the .NET Core version of Wajid Tamboli's portfolio website, converted from the original HTML/CSS/JavaScript implementation while maintaining the exact same design and functionality.

## 🚀 Features

- **Full Stack Architecture**: ASP.NET Core MVC with Entity Framework Core
- **Responsive Design**: Bootstrap + Custom CSS with mobile-first approach
- **Contact Form**: Saves submissions to database and integrates with WhatsApp
- **Modern UI/UX**: Animations, smooth scrolling, and interactive elements
- **Database Integration**: SQLite (dev) / SQL Server (production) support
- **API Endpoints**: RESTful contact form submission
- **Docker Support**: Ready for containerized deployment

## 🛠️ Technology Stack

### Backend

- **Framework**: ASP.NET Core 8.0 MVC
- **Database**: Entity Framework Core with SQLite/SQL Server
- **API**: RESTful endpoints for contact form
- **Architecture**: MVC pattern with dependency injection

### Frontend

- **UI Framework**: Bootstrap 5.3
- **Styling**: Custom CSS with CSS variables
- **JavaScript**: Vanilla JS with Typed.js and ScrollReveal
- **Icons**: BoxIcons and Font Awesome
- **Animations**: CSS animations and ScrollReveal.js

### Deployment Ready

- **Docker**: Multi-stage Dockerfile included
- **Cloud**: Ready for Azure, AWS, or any cloud platform
- **Frontend Separation**: Can be deployed separately on Vercel/Netlify
- **CORS**: Configured for cross-origin requests

## 📁 Project Structure

```
PortfolioApp/
├── Controllers/
│   ├── HomeController.cs          # Main page controller
│   └── ContactController.cs       # API controller for contact form
├── Models/
│   └── Contact.cs                 # Contact form model
├── Views/
│   ├── Home/
│   │   ├── Index.cshtml          # Main portfolio page
│   │   └── Error.cshtml          # Error page
│   ├── Shared/
│   │   └── _Layout.cshtml        # Master layout
│   ├── _ViewImports.cshtml       # Global imports
│   └── _ViewStart.cshtml         # Default layout
├── Data/
│   └── ApplicationDbContext.cs   # Database context
├── wwwroot/
│   ├── css/
│   │   └── site.css             # Main stylesheet
│   ├── js/
│   │   └── site.js              # Main JavaScript
│   └── images/                  # Static images
├── appsettings.json             # Configuration
├── Program.cs                   # Application entry point
├── PortfolioApp.csproj         # Project file
└── Dockerfile                  # Docker configuration
```

## ⚙️ Setup Instructions

### Prerequisites

- .NET 8.0 SDK
- Visual Studio 2022 or VS Code
- SQL Server (optional - uses SQLite by default)

### Local Development

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd PortfolioApp
   ```

2. **Copy Images**

   ```bash
   # Copy the JPG files from the original portfolio to wwwroot/images/
   cp ../IMG_20240806_223350.jpg wwwroot/images/
   cp ../wajidicon.jpg wwwroot/images/
   cp ../Wajid_Coding.jpg wwwroot/images/
   ```

3. **Restore NuGet packages**

   ```bash
   dotnet restore
   ```

4. **Run the application**

   ```bash
   dotnet run
   ```

5. **Open in browser**
   ```
   https://localhost:5001
   ```

### Database Configuration

The application uses SQLite by default for easy setup. To use SQL Server:

1. **Update connection string in appsettings.json**

   ```json
   {
     "ConnectionStrings": {
       "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=PortfolioDb;Trusted_Connection=true;MultipleActiveResultSets=true"
     }
   }
   ```

2. **Update Program.cs to use SQL Server**

   ```csharp
   options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
   ```

3. **Create and run migrations**
   ```bash
   dotnet ef migrations add InitialCreate
   dotnet ef database update
   ```

## 🚀 Deployment Options

### 1. Azure App Service

```bash
# Publish to Azure
dotnet publish -c Release
# Upload to Azure App Service
```

### 2. Docker Deployment

```bash
# Build Docker image
docker build -t portfolio-app .

# Run container
docker run -p 8080:8080 portfolio-app
```

### 3. Railway/Render

- Connect your GitHub repository
- Set build command: `dotnet publish -c Release -o out`
- Set start command: `dotnet out/PortfolioApp.dll`

### 3b. Render (Docker Runtime Recommended)

This project now includes a root-level `render.yaml` and Dockerfile aligned to .NET 9.

Steps:

1. Fork / push to GitHub: https://github.com/wajiddaudtamboli/TechWorld-AI
2. In Render dashboard: New > Web Service > Select repository
3. Environment: Docker
4. Root Directory: `PortfolioApp` (auto from render.yaml)
5. Health Check Path (optional UI field): `/healthz`
6. Auto deploy: enabled

Environment Variables (already defined in `render.yaml`):

```
ASPNETCORE_ENVIRONMENT=Production
ConnectionStrings__DefaultConnection=Data Source=portfolio.db
```

Health Endpoint: `GET /healthz` returns JSON `{ status, timestamp }`.

Port Binding: Render injects `PORT`; `Program.cs` binds dynamically if set.

### 4. Frontend-Only Deployment (Vercel/Netlify)

To deploy just the frontend on Vercel while keeping the API separate:

1. **Extract static files**

   ```bash
   # Copy wwwroot contents to a new folder
   # Update API calls to point to your hosted API
   ```

2. **Update API endpoints in site.js**
   ```javascript
   const response = await fetch("https://your-api-domain.com/api/contact", {
     method: "POST",
     headers: { "Content-Type": "application/json" },
     body: JSON.stringify(formData),
   });
   ```

## 🔧 Configuration

### Environment Variables

```bash
ASPNETCORE_ENVIRONMENT=Production
ASPNETCORE_URLS=http://*:8080
ConnectionStrings__DefaultConnection="your-connection-string"
```

Additional (optional):

```
Logging__LogLevel__Default=Information
Logging__LogLevel__Microsoft.AspNetCore=Warning
```

### CORS Configuration

The application is configured to allow cross-origin requests from:

- `http://localhost:3000` (React/Next.js dev)
- `https://vercel.app` and `https://*.vercel.app` (Vercel deployments)

Update the CORS policy in `Program.cs` for your specific domains.

## 📝 API Endpoints

### Contact Form

- **POST** `/api/contact`

  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "phone": "+1234567890",
    "message": "Hello, I would like to discuss a project..."
  }
  ```

- **GET** `/api/contact` - Retrieve all contacts (for admin use)

## 🎨 Customization

### Styling

- Main colors are defined in CSS variables in `site.css`
- Modify the `:root` section to change the color scheme
- All animations and responsive breakpoints are in `site.css`

### Utility CSS Classes (Refactor Overview)

Recent refactor replaced repetitive inline styles with semantic utility classes located in `wwwroot/css/site.css`:

| Class                 | Purpose                                       |
| --------------------- | --------------------------------------------- |
| `.project-cards-grid` | Responsive auto-fit project card grid         |
| `.project-card`       | Card container with hover elevation           |
| `.project-card-body`  | Inner padded wrapper for text + link          |
| `.project-card-title` | Consistent green heading styling              |
| `.project-desc`       | Standard project description paragraph        |
| `.project-meta`       | Smaller secondary metadata line               |
| `.tech-stack-label`   | Gold label prefix for stacks                  |
| `.includes-label`     | Gold label for list descriptors               |
| `.highlight-badge`    | Emphasized gold highlight span                |
| `.project-link`       | Styled action / repository / live link button |

To add a new project card, copy an existing `.project-card` block in `Views/Home/Index.cshtml` and change only the content and links.

### Content

- Update personal information in `Views/Home/Index.cshtml`
- Modify skills, experience, and projects sections as needed
- Update social media links and contact information

### Features

- Add new sections by creating new partial views
- Extend the Contact model for additional form fields
- Add authentication for admin features

## 🔒 Security Considerations

- Form validation on both client and server side
- SQL injection protection through Entity Framework
- CORS policy configured for specific domains
- Input sanitization for contact form submissions

## 📱 Mobile Responsiveness

- Mobile-first responsive design
- Touch-friendly navigation menu
- Optimized images and animations for mobile
- Smooth scrolling and section navigation

## 🧪 Testing

Run the application locally and test:

- [ ] All sections load correctly
- [ ] Navigation works smoothly
- [ ] Contact form submits successfully
- [ ] Mobile menu functions properly
- [ ] All animations play correctly
- [ ] External links open correctly

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 👨‍💻 Developer

**Wajid Daud Tamboli**

- Portfolio: [TechWorld](https://techworld-wajid.onrender.com/)
- Email: wajiddaudtamboli123@gmail.com
- LinkedIn: [Wajid Tamboli](https://www.linkedin.com/in/wajid-daud-tamboli-3217b031a)
- GitHub: [wajiddaudtamboli](https://github.com/wajiddaudtamboli)
