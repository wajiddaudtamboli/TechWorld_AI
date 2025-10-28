# 🚀 Quick Start Guide

## Your Portfolio App is Ready!

The application has been successfully set up and is running. Here's everything you need to know:

---

## ✅ What's Been Configured

- **✓ .NET SDK 9.0** - Verified and working
- **✓ NuGet Packages** - All dependencies restored
- **✓ SQLite Database** - Automatically created (`portfolio.db`)
- **✓ VS Code Extensions** - C# extension installed
- **✓ Build** - Project compiled successfully
- **✓ Server** - Running on http://localhost:5000

---

## 🎯 How to Run the App

### Option 1: Using the Start Script (Recommended)
```powershell
cd PortfolioApp
.\start.ps1
```

### Option 2: Using dotnet CLI
```powershell
cd PortfolioApp
dotnet run
```

### Option 3: Using VS Code Task
- Press `Ctrl+Shift+P`
- Type "Run Task"
- Select "Run PortfolioApp"

---

## 🌐 Access Your Portfolio

Once running, open your browser to:
- **Local**: http://localhost:5000
- **Health Check**: http://localhost:5000/healthz

---

## 📡 API Endpoints

### Contact Form Submission
**POST** `/api/contact`
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "phone": "+1234567890",
  "message": "Hello, I would like to discuss a project..."
}
```

### Get All Contacts (Admin)
**GET** `/api/contact`

### Test the API
```powershell
.\test-api.ps1
```

---

## 📁 Project Structure

```
PortfolioApp/
├── start.ps1              # Quick start script (NEW!)
├── test-api.ps1           # API test script (NEW!)
├── portfolio.db           # SQLite database (auto-created)
├── Controllers/           # API & MVC controllers
├── Models/                # Data models
├── Views/                 # Razor views
├── wwwroot/              # Static files (CSS, JS, images)
│   ├── css/
│   ├── js/
│   └── images/           # Your profile images
└── Data/                 # Database context
```

---

## 🛠️ Useful Commands

### Build the Project
```powershell
dotnet build
```

### Clean Build Output
```powershell
dotnet clean
```

### Restore Packages
```powershell
dotnet restore
```

### Stop the Server
Press `Ctrl+C` in the terminal running the app

---

## 🗄️ Database

**Type**: SQLite (file-based, no installation needed)
**Location**: `PortfolioApp/portfolio.db`
**Tables**: 
- `Contacts` - Stores contact form submissions

### View Database Contents
You can use any SQLite browser tool, or install the VS Code extension:
- Extension: `alexcvzz.vscode-sqlite`

---

## 🎨 Customize Your Portfolio

### Update Personal Information
Edit: `Views/Home/Index.cshtml`

### Change Colors/Styling
Edit: `wwwroot/css/site.css`

### Add/Remove Sections
Edit: `Views/Home/Index.cshtml`

### Modify Contact Form
1. Update model: `Models/Contact.cs`
2. Update controller: `Controllers/ContactController.cs`
3. Update view: `Views/Home/Index.cshtml`

---

## 🚀 Deployment Options

### 1. Render.com (Full Stack - Recommended)
- Already configured with `render.yaml` and `Dockerfile`
- Includes database and backend functionality
- Free tier available

### 2. Vercel (Static Frontend)
- Use the static build scripts in the root folder
- Fast CDN delivery
- Perfect for portfolio showcase

### 3. Azure App Service
```powershell
az webapp up --name your-app-name --resource-group your-rg
```

### 4. Docker
```powershell
docker build -t portfolio-app .
docker run -p 8080:8080 portfolio-app
```

---

## ⚡ Performance Tips

1. **Production Mode**: Set `ASPNETCORE_ENVIRONMENT=Production`
2. **Enable Caching**: Add response caching middleware
3. **Optimize Images**: Compress images in `wwwroot/images/`
4. **Use CDN**: For static assets in production

---

## 🔧 Troubleshooting

### Port Already in Use
```powershell
# Find and stop the process using port 5000
Get-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess | Stop-Process -Force
```

### Database Issues
Delete `portfolio.db` and restart the app - it will recreate automatically.

### Build Errors
```powershell
dotnet clean
dotnet restore
dotnet build
```

---

## 📚 Documentation

- **Main README**: `../README.md`
- **Deployment Guide**: `DEPLOYMENT.md`
- **ASP.NET Core Docs**: https://docs.microsoft.com/aspnet/core

---

## 🎉 Next Steps

1. ✅ App is running - Visit http://localhost:5000
2. ✅ Test the contact form on your site
3. ✅ Run `.\test-api.ps1` to verify API endpoints
4. 📝 Customize content in `Views/Home/Index.cshtml`
5. 🎨 Adjust styling in `wwwroot/css/site.css`
6. 🚀 Deploy to Render or Vercel when ready

---

## 💡 Pro Tips

- Use `dotnet watch run` for hot reload during development
- Check `Properties/launchSettings.json` for port configuration
- The app supports both HTTP and HTTPS in development
- Contact form submissions are stored in the SQLite database
- Use the API GET endpoint to view all submissions

---

**Made with ❤️ by Wajid Daud Tamboli**

Need help? Check the main README or DEPLOYMENT.md for more details!
