#!/bin/bash


echo "Build script"

# add the commands here
# nvm install 14  # Install Node.js version 14 (for example)
# nvm use 14 
npm install && cd ./frontend && npm install
npm run build:ui
