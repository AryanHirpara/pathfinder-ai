# PathFinder AI - Start Script (PowerShell)
# Run this script to start the application

Write-Host ""
Write-Host " ======================================" -ForegroundColor Cyan
Write-Host "  PathFinder AI - Career Companion" -ForegroundColor Cyan
Write-Host " ======================================" -ForegroundColor Cyan
Write-Host ""
Write-Host " Starting the server..." -ForegroundColor Green
Write-Host " Opening http://localhost:3000 in Opera..." -ForegroundColor Green
Write-Host ""
Write-Host " Press Ctrl+C to stop the server." -ForegroundColor Yellow
Write-Host ""

# Open Opera browser after 3 seconds
Start-Job -ScriptBlock {
    Start-Sleep -Seconds 3
    Start-Process "opera" -ArgumentList "http://localhost:3000"
} | Out-Null

# Start the development server
npm run dev
