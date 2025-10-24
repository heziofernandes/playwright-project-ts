import { chromium } from 'playwright';
import path from 'path';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const relativePath = 'playwright-report/index.html';

  const absolutePath = path.resolve(__dirname, relativePath);

  const fileUrl = 'file://' + absolutePath.replace(/\\/g, '/'); // substitui barras invertidas por barras normais no Windows

  await page.goto(fileUrl, { waitUntil: 'networkidle' });
  await page.pdf({ path: 'report.pdf', format: 'A4' });

  await browser.close();
})();