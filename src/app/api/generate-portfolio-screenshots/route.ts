import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

export async function POST() {
    try {
        // Launch browser once for all screenshots
        const browser = await puppeteer.launch({
            executablePath: '/usr/bin/google-chrome',
            headless: true,
            args: [
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                '--disable-gpu',
                '--window-size=1920,1080'
            ]
        });

        const screenshots = [];
        const baseUrl = 'http://localhost:3000/api/test-landing';

        // Different viewport sizes for responsive design showcase
        const configs = [
            { name: 'landing-desktop', width: 1920, height: 1080 },
            { name: 'landing-tablet', width: 768, height: 1024 },
            { name: 'landing-mobile', width: 375, height: 812 },
            { name: 'landing-desktop-hero', width: 1920, height: 800 }, // Just hero section
        ];

        for (const config of configs) {
            const page = await browser.newPage();
            await page.setViewport({ width: config.width, height: config.height });

            // Navigate to the URL
            await page.goto(baseUrl, { waitUntil: 'networkidle0' });

            // Wait for animations to complete
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Take screenshot
            const screenshotBuffer = await page.screenshot({
                type: 'png',
                fullPage: config.name !== 'landing-desktop-hero' // Hero section only for desktop-hero
            });

            await page.close();

            // Ensure public/images directory exists
            const imagesDir = path.join(process.cwd(), 'public', 'images');
            if (!existsSync(imagesDir)) {
                await mkdir(imagesDir, { recursive: true });
            }

            // Save screenshot
            const filename = `${config.name}.png`;
            const filePath = path.join(imagesDir, filename);
            
            await writeFile(filePath, screenshotBuffer);

            screenshots.push({
                name: config.name,
                filename,
                path: `/images/${filename}`,
                dimensions: `${config.width}x${config.height}`,
                type: config.name.includes('hero') ? 'hero-section' : 'full-page'
            });
        }

        // Close browser
        await browser.close();

        return NextResponse.json({
            success: true,
            screenshots,
            message: `Successfully captured ${screenshots.length} screenshots for portfolio use`
        });

    } catch (error) {
        console.error('Error capturing portfolio screenshots:', error);
        return NextResponse.json(
            { error: 'Failed to capture portfolio screenshots', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({
        message: 'Portfolio screenshot generation API',
        description: 'Generates multiple landing page screenshots for portfolio use',
        usage: 'POST to generate screenshots at different resolutions'
    });
}