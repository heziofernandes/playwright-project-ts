import { test } from '@playwright/test';
import { DropdownPage } from '../pages/DropdownPage';

test.describe('Dropdown Page Tests', () => {
  let dropdownPage: DropdownPage;

  test.beforeEach(async ({ page }) => {
    dropdownPage = new DropdownPage(page);
    await dropdownPage.goto('/dropdown');
  });

  test('should have the dropdown enabled and options available', async () => {
    await dropdownPage.expectDropdownEnabled();

    await dropdownPage.hasOption('1');
    await dropdownPage.hasOption('2');
    await dropdownPage.hasOptionText('Option 1');
    await dropdownPage.hasOptionText('Option 2');
  });

  test('should select and verify dropdown options', async () => {
    await dropdownPage.selectOption('1');
    await dropdownPage.expectSelectedValue('1');

    await dropdownPage.selectOption('2');
    await dropdownPage.expectSelectedValue('2');

    await dropdownPage.selectOptionByText('Option 1');
    await dropdownPage.expectSelectedText('Option 1');

    await dropdownPage.selectOptionByText('Option 2');
    await dropdownPage.expectSelectedText('Option 2');
  });
});