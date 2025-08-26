#!/bin/bash

# Portfolio Screenshot Generator
# This script generates screenshots of the landing page for use in the portfolio

echo "🚀 Starting screenshot generation for portfolio..."

# Check if the server is running
if ! curl -s http://localhost:3000 > /dev/null; then
    echo "❌ Development server is not running. Please start it with 'npm run dev'"
    exit 1
fi

echo "📸 Generating portfolio screenshots..."

# Call the portfolio screenshot API
RESULT=$(curl -s -X POST http://localhost:3000/api/generate-portfolio-screenshots)

if echo "$RESULT" | grep -q '"success":true'; then
    echo "✅ Screenshot generation successful!"
    echo "$RESULT" | jq -r '.screenshots[] | "- \(.name): \(.path) (\(.dimensions))"'
    echo ""
    echo "Screenshots saved to public/images/ directory:"
    ls -la public/images/landing-*.png
else
    echo "❌ Screenshot generation failed:"
    echo "$RESULT"
    exit 1
fi

echo "🎉 Portfolio screenshots are ready for use!"