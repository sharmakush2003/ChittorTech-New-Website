@echo off
title Digify PHP Server
echo Starting local PHP server...
echo.
echo Please keep this window open while using the website.
echo.
timeout /t 2 >nul
start http://127.0.0.1:8000
php_server\php.exe -S 127.0.0.1:8000
