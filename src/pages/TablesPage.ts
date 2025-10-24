import { BasePage } from './BasePage';
import { Locator, Page, expect } from '@playwright/test';

export class TablesPage extends BasePage {
  readonly table: Locator;

  constructor(page: Page, tableId: string = '#table1') {
    super(page);
    this.table = page.locator(tableId);
  }

  async goto(path: string) {
    await this.page.goto(path);
  }

  async sortBy(columnIndex: number) {
    const header = this.table.locator(`thead tr th:nth-child(${columnIndex})`);
    await header.click();
  }

  async getDueOfRow(rowIndex: number): Promise<string> {
    const cell = this.table.locator(`tbody tr:nth-child(${rowIndex}) td:nth-child(4)`);
    return (await cell.textContent())?.trim() || '';
  }

  async expectDueOfRow(rowIndex: number, expectedValue: string) {
    const rowSelector = `tbody tr:nth-child(${rowIndex})`;
    const cellSelector = `${rowSelector} td:nth-child(4)`;

    await this.page.waitForFunction(
      (sel) => {
        const cell = document.querySelector(sel);
        return cell && cell.textContent && cell.textContent.trim().startsWith('$');
      },
      cellSelector
    );

    const value = await this.table.locator(`tbody tr:nth-child(${rowIndex}) td:nth-child(4)`).textContent();
    expect(value?.trim()).toBe(expectedValue);
  }
}