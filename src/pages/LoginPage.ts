import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class LoginPage extends BasePage {
  readonly username = this.page.locator('#username');
  readonly password = this.page.locator('#password');
  readonly loginButton = this.page.locator('button[type="submit"]');
  readonly message = this.page.locator('#flash');

  async login(user: string, pass: string) {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }

  async expectSuccess() {
    await expect(this.page).toHaveURL(/\/secure/);
    await expect(this.page.getByRole('link', { name: 'Logout' })).toBeVisible();
    await expect(this.message).toContainText('You logged into a secure area!');
  }

  async expectFailure(expectedMessage?: string) {
    const messageText = (await this.message.textContent())?.trim().toLowerCase();
    if (expectedMessage) {
      expect(messageText).toContain(expectedMessage.toLowerCase());
    } else {
      await expect(this.message).toContainText(/invalid|incorrect/i);
    }
    console.log(`Error message displayed: ${messageText}`);
  }
}
