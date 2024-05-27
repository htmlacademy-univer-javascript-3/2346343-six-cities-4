import { test, expect } from '@playwright/test';

test.describe('Loading Cards from server', () => {
  test('Проверка загрузки карточек c сервера', async ({ page }) => {
    // load page
    await page.goto('http://localhost:5173'); 

    // wait for server response
    await page.waitForResponse((resp) => resp.url().includes('/six-cities/offers') && resp.status() === 200);

    // load cards
    await page.locator('.cities__card').first().waitFor(); 

    // wait while one card will be loaded
    const cardElements = await page.locator('.cities__card').all();
    expect(cardElements.length).toBeGreaterThan(0); 

    for (const element of cardElements) {
      // check that all cards have following text
      const text = await element.innerText();
      expect(text).toContain('night');
      expect(text).toContain('In bookmarks');
      expect(text).toContain('Rating');

      // check that all cards have prices
      const number = text.replace(/^\D+/g, '');
      const isNumber = !isNaN(parseInt(number)) && isFinite(parseInt(number));
      expect(isNumber).toBe(true);
    }
  });
});