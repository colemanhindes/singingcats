#!/bin/bash

# Install necessary packages
echo "Installing CRACO..."
npm install @craco/craco

# Create craco config file
echo "Creating craco.config.js..."
cat > craco.config.js << 'EOL'
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};
EOL

# Update package.json scripts
echo "Updating package.json scripts..."
# Using temporary file to handle JSON modification
jq '.scripts.start = "craco start" | .scripts.build = "craco build" | .scripts.test = "craco test"' package.json > package.json.tmp && mv package.json.tmp package.json

# Create jsconfig.json for IDE support
echo "Creating jsconfig.json for better IDE support..."
cat > jsconfig.json << 'EOL'
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
EOL

echo "Setup complete! You can now use @ imports in your project."
echo "Example: import { Button } from '@/components/ui/button'"
