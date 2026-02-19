#!/bin/bash

# Portfolio Deployment Script
# This script automates the deployment process for the ASP.NET Core Portfolio application

echo "🚀 Starting Portfolio Application Deployment..."

# Check if .NET is installed
if ! command -v dotnet &> /dev/null; then
    echo "❌ .NET is not installed. Please install .NET 9.0 SDK first."
    exit 1
fi

echo "✅ .NET SDK found"

# Navigate to project directory
cd PortfolioApp

# Clean previous builds
echo "🧹 Cleaning previous builds..."
dotnet clean

# Restore packages
echo "📦 Restoring NuGet packages..."
dotnet restore

# Build the application
echo "🔨 Building the application..."
dotnet build --configuration Release

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi

echo "✅ Build successful"

# Publish the application
echo "📦 Publishing the application..."
dotnet publish --configuration Release --output ./publish

if [ $? -ne 0 ]; then
    echo "❌ Publish failed. Please check the errors above."
    exit 1
fi

echo "✅ Application published successfully"

# Display next steps
echo ""
echo "🎉 Deployment Complete!"
echo ""
echo "📁 Published files are in: ./publish"
echo "🌐 To run locally: dotnet run"
echo "🐳 To build Docker: docker build -t portfolio-app ."
echo "☁️  Ready for deployment to Azure, Railway, or Render"
echo ""
echo "📚 Next Steps:"
echo "1. Test locally: http://localhost:5000"
echo "2. Deploy to your preferred hosting platform"
echo "3. Configure production database connection"
echo "4. Set up custom domain and SSL"
echo ""
echo "🆘 Support: wajiddaudtamboli123@gmail.com"