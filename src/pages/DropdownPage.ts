import { BasePage } from './BasePage';
import { expect, Locator, Page } from '@playwright/test';

export class DropdownPage extends BasePage {
  readonly dropdown: Locator;

  constructor(page: Page) {
    super(page);
    this.dropdown = this.page.locator('#dropdown');
  }

  async selectOption(value: string) {
    await this.dropdown.selectOption({ value });
  }


  async selectOptionByText(label: string) {
    await this.dropdown.selectOption({ label });
  }


  async expectSelectedValue(expectedValue: string) {
    await expect(this.dropdown).toHaveValue(expectedValue);
  }

  async expectSelectedText(expectedText: string) {
    await expect(this.dropdown).toContainText(expectedText);
  }

  async expectNotSelectedText(expectedText: string) {
    await expect(this.dropdown).not.toContainText(expectedText);
  }

  async hasOption(value: string) {
    const options = await this.dropdown.locator('option').all();
    const optionValues = await Promise.all(options.map(async (opt) => await opt.getAttribute('value')));
    expect(optionValues).toContain(value);
  }

  async hasOptionText(text: string) {
    const optionsText = await this.dropdown.locator('option').allTextContents();
    expect(optionsText).toContain(text);
  }

  async expectDropdownEnabled() {
    await expect(this.dropdown).toBeEnabled();
  }
}