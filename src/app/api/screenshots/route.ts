import { NextRequest, NextResponse } from 'next/server';
import puppeteer from 'puppeteer';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

export async function POST(request: NextRequest) {
    try {
        const { url, filename, width = 1920, height = 1080 } = await request.json();

        if (!url) {
            return NextResponse.json({ error: 'URL is required' }, { status: 400 });
        }

        // Launch browser with system Chrome
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

        const page = await browser.newPage();
        await page.setViewport({ width, height });

        // Navigate to the URL
        await page.goto(url, { waitUntil: 'networkidle0' });

        // Wait a bit more for any animations to complete
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Take screenshot
        const screenshotBuffer = await page.screenshot({
            type: 'png',
            fullPage: true
        });

        // Close browser
        await browser.close();

        // Ensure public/images directory exists
        const imagesDir = path.join(process.cwd(), 'public', 'images');
        if (!existsSync(imagesDir)) {
            await mkdir(imagesDir, { recursive: true });
        }

        // Save screenshot with timestamp if no filename provided
        const finalFilename = filename || `landing-${Date.now()}.png`;
        const filePath = path.join(imagesDir, finalFilename);
        
        await writeFile(filePath, screenshotBuffer);

        return NextResponse.json({
            success: true,
            filename: finalFilename,
            path: `/images/${finalFilename}`,
            message: 'Screenshot captured successfully'
        });

    } catch (error) {
        console.error('Error capturing screenshot:', error);
        return NextResponse.json(
            { error: 'Failed to capture screenshot', details: error instanceof Error ? error.message : 'Unknown error' },
            { status: 500 }
        );
    }
}

export async function GET() {
    return NextResponse.json({
        message: 'Screenshot API endpoint',
        usage: 'POST with { url, filename?, width?, height? }'
    });
}