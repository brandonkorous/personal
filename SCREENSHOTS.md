# Screenshot Capture System

This project includes an automated screenshot capture system that can generate screenshots of the landing page for use in the portfolio. The system uses Puppeteer to capture high-quality screenshots at different resolutions.

## Features

- **Automated Screenshot Capture**: Capture screenshots of any URL using the screenshot API
- **Multiple Resolution Support**: Generate screenshots at desktop, tablet, and mobile resolutions
- **Portfolio Integration**: Automatically save screenshots to the public/images folder for use in the portfolio
- **Full Page & Hero Section**: Option to capture full page or just the hero section

## API Endpoints

### `/api/screenshots` - Individual Screenshot Capture

**POST** request to capture a single screenshot.

**Request Body:**
```json
{
  "url": "http://localhost:3000/api/test-landing",
  "filename": "my-screenshot.png",
  "width": 1920,
  "height": 1080
}
```

**Response:**
```json
{
  "success": true,
  "filename": "my-screenshot.png",
  "path": "/images/my-screenshot.png",
  "message": "Screenshot captured successfully"
}
```

### `/api/generate-portfolio-screenshots` - Portfolio Screenshot Generation

**POST** request to generate multiple screenshots for portfolio use.

**Response:**
```json
{
  "success": true,
  "screenshots": [
    {
      "name": "landing-desktop",
      "filename": "landing-desktop.png",
      "path": "/images/landing-desktop.png",
      "dimensions": "1920x1080",
      "type": "full-page"
    }
  ],
  "message": "Successfully captured 4 screenshots for portfolio use"
}
```

### `/api/test-landing` - Test Landing Page

**GET** request returns a standalone HTML landing page for screenshot testing (doesn't depend on the main app's dependencies).

## Usage

### Using the Script

The easiest way to generate screenshots is using the provided script:

```bash
# Make sure the dev server is running
npm run dev

# In another terminal
./scripts/generate-screenshots.sh
```

### Using curl directly

```bash
# Single screenshot
curl -X POST http://localhost:3000/api/screenshots \
  -H "Content-Type: application/json" \
  -d '{"url": "http://localhost:3000/api/test-landing", "filename": "my-screenshot.png"}'

# Portfolio screenshots
curl -X POST http://localhost:3000/api/generate-portfolio-screenshots
```

## Generated Screenshots

The system generates the following screenshots for portfolio use:

1. **landing-desktop.png** - Full page desktop view (1920x1080)
2. **landing-tablet.png** - Full page tablet view (768x1024)  
3. **landing-mobile.png** - Full page mobile view (375x812)
4. **landing-desktop-hero.png** - Desktop hero section only (1920x800)

## Integration with Portfolio

Screenshots are automatically saved to `public/images/` and can be referenced in the portfolio data:

```typescript
{
  id: 6,
  featured: true,
  title: 'Personal Brand Website – Modern Portfolio Platform',
  image: '/images/landing-desktop.png', // Uses local screenshot
  // ... other properties
}
```

## Dependencies

- **Puppeteer**: For browser automation and screenshot capture
- **System Chrome**: Uses the system-installed Chrome browser (/usr/bin/google-chrome)

## Files

- `src/app/api/screenshots/route.ts` - Individual screenshot API
- `src/app/api/generate-portfolio-screenshots/route.ts` - Portfolio screenshot generator
- `src/app/api/test-landing/route.ts` - Standalone test landing page
- `scripts/generate-screenshots.sh` - Screenshot generation script
- `public/images/` - Screenshot storage directory

## Troubleshooting

### Chrome Not Found
If you get Chrome executable errors, make sure Chrome is installed:
```bash
which google-chrome
# Should return: /usr/bin/google-chrome
```

### Server Not Running
Make sure the development server is running before capturing screenshots:
```bash
npm run dev
```

### Network Issues
The screenshot API needs network access to load the test landing page. If you're behind a proxy, you may need to configure Puppeteer accordingly.