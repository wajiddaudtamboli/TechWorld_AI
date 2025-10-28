#!/usr/bin/env pwsh
# Quick Start Script for Portfolio App
# This script sets the correct environment variables and starts the ASP.NET Core app

Write-Host "Starting Portfolio App..." -ForegroundColor Cyan
Write-Host ""

# Set environment variables for proper runtime
$env:ASPNETCORE_ENVIRONMENT = "Development"
$env:ASPNETCORE_URLS = "http://localhost:5000"

# Change to the PortfolioApp directory
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

Write-Host "Working Directory: $scriptPath" -ForegroundColor Yellow
Write-Host "Server URL: http://localhost:5000" -ForegroundColor Green
Write-Host "Database: SQLite (portfolio.db)" -ForegroundColor Green
Write-Host ""
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Gray
Write-Host "========================================" -ForegroundColor DarkGray
Write-Host ""

# Run the application
try {
    dotnet run --project PortfolioApp.csproj
}
catch {
    Write-Host "Error starting application: $_" -ForegroundColor Red
    exit 1
}
