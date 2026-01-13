@echo off
title PathFinder AI - Career Companion
echo.
echo  ======================================
echo   PathFinder AI - Career Companion
echo  ======================================
echo.
echo  Starting the server...
echo  Opening http://localhost:3000 in Opera...
echo.
echo  Press Ctrl+C to stop the server.
echo.

:: Open Opera browser after a short delay
start "" cmd /c "timeout /t 3 /nobreak >nul && start opera http://localhost:3000"

:: Start the development server
npm run dev
