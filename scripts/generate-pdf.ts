import { chromium } from 'playwright';
import path from 'path';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const relativePath = 'playwright-report/index.html';

  const absolutePath = path.resolve(__dirname, relativePath);

  const filePath = `file://${absolutePath}`;

  await page.goto(filePath, { waitUntil: 'networkidle' });

  await page.pdf({ path: 'playwright-report/report.pdf', format: 'A4' });

  await browser.close();
})();