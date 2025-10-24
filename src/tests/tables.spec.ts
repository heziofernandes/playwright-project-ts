import { test, expect } from '@playwright/test';
import { TablesPage } from '../pages/TablesPage';

test.describe('Tables Page Tests', () => {
  
  test('should sort table and check due value of row 2 in the Example 1', async ({ page }) => {
  test.slow();

    const tablesPage = new TablesPage(page, '#table1');
    await tablesPage.goto('/tables');
    await tablesPage.sortBy(4);
    await expect(tablesPage.table.locator('tbody tr')).toHaveCount(4, { timeout: 15000 });

    const dueValue = await tablesPage.getDueOfRow(2);
    console.log('Row 2 Due Value:', dueValue);
    await tablesPage.expectDueOfRow(2, dueValue);
  });

  test('should sort table and check due value of row 2 in the Example 2', async ({ page }) => {
  test.slow();

    const tablesPage = new TablesPage(page, '#table2');
    await tablesPage.goto('/tables');
    await tablesPage.sortBy(4);
    await expect(tablesPage.table.locator('tbody tr')).toHaveCount(4, { timeout: 15000 });

    const dueValue = await tablesPage.getDueOfRow(2);
    console.log('Row 2 Due Value:', dueValue);
    await tablesPage.expectDueOfRow(2, dueValue);
  });
});
