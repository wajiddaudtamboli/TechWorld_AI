#!/bin/bash

echo "🚀 Portfolio App Deployment Script"
echo "=================================="

# Check if .NET is installed
if ! command -v dotnet &> /dev/null; then
    echo "❌ .NET SDK is not installed. Please install .NET 8.0 SDK first."
    exit 1
fi

echo "✅ .NET SDK found"

# Copy images from parent directory
echo "📁 Copying images..."
if [ -f "../wajidicon.jpg" ]; then
    cp ../wajidicon.jpg wwwroot/images/
    echo "✅ Copied wajidicon.jpg"
else
    echo "⚠️  wajidicon.jpg not found in parent directory"
fi

if [ -f "../Wajid_Coding.jpg" ]; then
    cp ../Wajid_Coding.jpg wwwroot/images/
    echo "✅ Copied Wajid_Coding.jpg"
else
    echo "⚠️  Wajid_Coding.jpg not found in parent directory"
fi

if [ -f "../IMG_20240806_223350.jpg" ]; then
    cp ../IMG_20240806_223350.jpg wwwroot/images/
    echo "✅ Copied IMG_20240806_223350.jpg"
else
    echo "⚠️  IMG_20240806_223350.jpg not found in parent directory"
fi

# Restore packages
echo "📦 Restoring NuGet packages..."
dotnet restore

if [ $? -eq 0 ]; then
    echo "✅ Packages restored successfully"
else
    echo "❌ Failed to restore packages"
    exit 1
fi

# Build the project
echo "🔨 Building the project..."
dotnet build

if [ $? -eq 0 ]; then
    echo "✅ Build successful"
else
    echo "❌ Build failed"
    exit 1
fi

echo ""
echo "🎉 Setup complete! You can now run the application:"
echo ""
echo "   dotnet run"
echo ""
echo "Then open your browser to: https://localhost:5001"
echo ""
echo "📝 For deployment options, see README.md"