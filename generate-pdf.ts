import { chromium } from 'playwright';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

(async () => {
  // Seu código aqui...
  const relativePath = 'playwright-report/index.html';

  const absolutePath = path.resolve(__dirname, relativePath);
  const fileUrl = 'file://' + absolutePath.replace(/\\/g, '/');

  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto(fileUrl, { waitUntil: 'networkidle' });
  await page.pdf({ path: 'report.pdf', format: 'A4' });

  await browser.close();
})();