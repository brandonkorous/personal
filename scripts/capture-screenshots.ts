// import fs from 'fs';
// import path from 'path';
// import puppeteer from 'puppeteer';

// interface TargetSite {
//     url: string;
//     out: string;
//     fullPage?: boolean;
// }

// const sites: TargetSite[] = [
//     { url: 'https://helpninja.ai', out: 'helpninja-home.png' },
//     { url: 'https://kanninja.com', out: 'kanninja-home.png' },
//     { url: 'https://jobsight.co', out: 'jobsight-home.png' },
//     { url: 'https://jobsighttechnologies.com', out: 'jobsighttech-home.png' },
//     { url: 'https://gillettdiesel.com', out: 'gillettdiesel-home.png' },
// ];

// async function run() {
//     const outDir = path.join(process.cwd(), 'public', 'images', 'portfolio');
//     if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

//     const browser = await puppeteer.launch({ headless: 'new', defaultViewport: { width: 1600, height: 900 } });
//     try {
//         const page = await browser.newPage();
//         const delay = (ms: number) => new Promise(r => setTimeout(r, ms));
//         for (const site of sites) {
//             console.log('Capturing', site.url);
//             await page.goto(site.url, { waitUntil: 'networkidle0', timeout: 90000 });
//             await delay(3000);
//             const filePath = path.join(outDir, site.out);
//             await page.screenshot({ path: filePath, fullPage: false, type: 'png' });
//             console.log('Saved', filePath);
//         }
//     } finally {
//         await browser.close();
//     }
// }

// run().catch(err => {
//     console.error(err);
//     process.exit(1);
// });
