import { test, expect } from '@playwright/test';

test.describe('Login Form', () => {
  test('Успешная авторизация', async ({ page }) => {
    await page.goto('http://localhost:5173/login');

    // fill in the login form
    await page.fill('input[name="email"]', 'email@example.com');
    await page.fill('input[name="password"]', 'password123');

    // submit the form
    await Promise.all([
      page.waitForURL('http://localhost:5173'), 
      page.click('button[type="submit"]'), 
    ]);
  });

  test('Ошибка авторизации (невалидный пароль)', async ({ page }) => {
    await page.goto('http://localhost:5173/login');

    // fill in the login form with invalid password
    await page.fill('input[name="email"]', 'example@example.com');
    await page.fill('input[name="password"]', 'ii');

    // submit the form
    await page.click('button[type="submit"]');

    await page.isVisible(
      "text='The password must consist of at least one English letter and one symbol without spaces.'"
    );

    expect(page.url()).toBe('http://localhost:5173/login');
  });
});
