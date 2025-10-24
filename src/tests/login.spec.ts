import { LoginPage } from '../pages/LoginPage';
import { getCredentials } from '../utils/env';
import { test } from '@playwright/test';

test.describe('Login Page Tests', () => {

  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto('/login');
  });

  test('should login successfully with valid credentials', async ({ }) => {
    const { username, password } = getCredentials();
    await loginPage.goto('/login');
    await loginPage.login(username, password);
    await loginPage.expectSuccess();
  });

  test('should show error with invalid User', async ({ }) => {
    const { password } = getCredentials();
    await loginPage.goto('/login');
    await loginPage.login('invalid', password);
    await loginPage.expectFailure('Your username is invalid!');
  });

  test('should show error with invalid Password', async ({ }) => {
    const { username } = getCredentials();
    await loginPage.goto('/login');
    await loginPage.login(username, 'wrong');
    await loginPage.expectFailure('Your password is invalid!');
  });
});
