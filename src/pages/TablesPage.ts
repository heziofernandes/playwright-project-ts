import { BasePage } from './BasePage';
import { Locator, Page, expect } from '@playwright/test';


export class TablesPage extends BasePage {
  readonly table: Locator;

  constructor(page: Page, tableId: string = '#table1') {
    super(page);
    this.table = page.locator(tableId);
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
    const value = await this.getDueOfRow(rowIndex);
    expect(value).toBe(expectedValue);
  }
}
