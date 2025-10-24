import { defineConfig, devices } from '@playwright/test';
import { getBaseUrl } from './src/utils/env';

export default defineConfig({
  testDir: './src/tests',
  timeout: 30 * 1000,
  use: {
    baseURL: getBaseUrl(),
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: true, // runs with browser UI visible(false)
    launchOptions: {
      slowMo: 0, 
    },
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
