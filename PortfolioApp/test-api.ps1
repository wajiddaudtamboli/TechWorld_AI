# Test Contact API
Write-Host "Testing Contact API..." -ForegroundColor Cyan

# Test data
$contactData = @{
    name = "Test User"
    email = "test@example.com"
    subject = "API Test"
    phone = "+1234567890"
    message = "Testing the contact API endpoint from automated setup"
} | ConvertTo-Json

# Submit contact form
Write-Host "`nSubmitting contact form..." -ForegroundColor Yellow
try {
    $response = Invoke-RestMethod -Uri "http://localhost:5000/api/contact" `
        -Method Post `
        -Body $contactData `
        -ContentType "application/json"
    
    Write-Host "SUCCESS: Contact form submitted!" -ForegroundColor Green
    Write-Host ($response | ConvertTo-Json -Depth 5) -ForegroundColor White
}
catch {
    Write-Host "ERROR: Failed to submit contact form" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
}

# Retrieve all contacts
Write-Host "`nRetrieving all contacts..." -ForegroundColor Yellow
try {
    $contacts = Invoke-RestMethod -Uri "http://localhost:5000/api/contact" -Method Get
    Write-Host "SUCCESS: Retrieved $($contacts.Count) contact(s)" -ForegroundColor Green
    Write-Host ($contacts | ConvertTo-Json -Depth 5) -ForegroundColor White
}
catch {
    Write-Host "ERROR: Failed to retrieve contacts" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
}

Write-Host "`nAPI test completed!" -ForegroundColor Cyan
