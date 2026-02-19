# Portfolio App Setup Script for Windows
Write-Host "🚀 Portfolio App Deployment Script" -ForegroundColor Cyan
Write-Host "==================================" -ForegroundColor Cyan

# Check if .NET is installed
try {
    $dotnetVersion = dotnet --version
    Write-Host "✅ .NET SDK found: $dotnetVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ .NET SDK is not installed. Please install .NET 8.0 SDK first." -ForegroundColor Red
    exit 1
}

# Copy images from parent directory
Write-Host "📁 Copying images..." -ForegroundColor Yellow

if (Test-Path "../wajidicon.jpg") {
    Copy-Item "../wajidicon.jpg" "wwwroot/images/" -Force
    Write-Host "✅ Copied wajidicon.jpg" -ForegroundColor Green
} else {
    Write-Host "⚠️  wajidicon.jpg not found in parent directory" -ForegroundColor Yellow
}

if (Test-Path "../Wajid_Coding.jpg") {
    Copy-Item "../Wajid_Coding.jpg" "wwwroot/images/" -Force
    Write-Host "✅ Copied Wajid_Coding.jpg" -ForegroundColor Green
} else {
    Write-Host "⚠️  Wajid_Coding.jpg not found in parent directory" -ForegroundColor Yellow
}

if (Test-Path "../IMG_20240806_223350.jpg") {
    Copy-Item "../IMG_20240806_223350.jpg" "wwwroot/images/" -Force
    Write-Host "✅ Copied IMG_20240806_223350.jpg" -ForegroundColor Green
} else {
    Write-Host "⚠️  IMG_20240806_223350.jpg not found in parent directory" -ForegroundColor Yellow
}

# Restore packages
Write-Host "📦 Restoring NuGet packages..." -ForegroundColor Yellow
$restoreResult = dotnet restore

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Packages restored successfully" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to restore packages" -ForegroundColor Red
    exit 1
}

# Build the project
Write-Host "🔨 Building the project..." -ForegroundColor Yellow
$buildResult = dotnet build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Build successful" -ForegroundColor Green
} else {
    Write-Host "❌ Build failed" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🎉 Setup complete! You can now run the application:" -ForegroundColor Green
Write-Host ""
Write-Host "   dotnet run" -ForegroundColor Cyan
Write-Host ""
Write-Host "Then open your browser to: https://localhost:5001" -ForegroundColor Cyan
Write-Host ""
Write-Host "📝 For deployment options, see README.md" -ForegroundColor Yellow