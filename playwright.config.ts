import { defineConfig, devices } from '@playwright/test';
import { getBaseUrl } from './src/utils/env';

export default defineConfig({
  testDir: './src/tests',
  timeout: 60 * 1000,
  use: {
    baseURL: getBaseUrl(),
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true, // runs with browser UI visible(false)
    launchOptions: {
      slowMo: 100, 
    },
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } },
    { name: 'firefox', use: { browserName: 'firefox' } },
    { name: 'webkit', use: { browserName: 'webkit' } },
  ],
});
