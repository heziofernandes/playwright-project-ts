import { Page } from '@playwright/test';
import { getBaseUrl } from '../utils/env';

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(path: string) {
    const baseUrl = getBaseUrl();
  
    const hasValidProtocol = /^https?:\/\//i.test(baseUrl);
  
    if (!hasValidProtocol) {
      console.error(`🚨 Invalid base URL: "${baseUrl}". Please set a valid URL starting with 'http://' or 'https://'.`);
      throw new Error(`Invalid base URL: ${baseUrl}`);
    }
  
    const fullUrl = new URL(path, baseUrl).toString();
    console.log(`Navigating to URL 🚀: ${fullUrl}`);
    await this.page.goto(fullUrl);
  }

  async getTitle() {
    return this.page.title();
  }
}
