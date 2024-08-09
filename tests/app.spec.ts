import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await expect(page).toHaveTitle(/ABC Health System/);
});

test('Pay total link', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Pay total' }).click();
  await expect(
    page.getByRole('heading', { name: 'Payment information' })
  ).toBeVisible();
});

test('Payment information missing', async ({ page }) => {
  await page.goto('http://localhost:3000/payment-information');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('This field is required')).toHaveCount(5);
});

test('Payment information complete', async ({ page }) => {
  await page.goto('http://localhost:3000/payment-information');
  await page.getByPlaceholder('1234567812345678').fill('1234567812345678');
  await page.getByPlaceholder('12/34').fill('12/34');
  await page.getByPlaceholder('321').fill('123');
  await page.getByPlaceholder('Jane Doe').fill('Jane Doe');
  await page.getByPlaceholder('98765').fill('12345');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('This field is required')).not.toBeVisible();
});

test('Review payment with CC#', async ({ page }) => {
  await page.goto('http://localhost:3000/payment-information');
  await page.getByPlaceholder('1234567812345678').fill('1234567812345678');
  await page.getByPlaceholder('12/34').fill('12/34');
  await page.getByPlaceholder('321').fill('123');
  await page.getByPlaceholder('Jane Doe').fill('Jane Doe');
  await page.getByPlaceholder('98765').fill('12345');
  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page.getByText('Card ending in ****5678')).toBeVisible();
});

test('Friendly thanks', async ({ page }) => {
  await page.goto('http://localhost:3000/payment-information');
  await page.getByPlaceholder('1234567812345678').fill('1234567812345678');
  await page.getByPlaceholder('12/34').fill('12/34');
  await page.getByPlaceholder('321').fill('123');
  await page.getByPlaceholder('Jane Doe').fill('Jane Doe');
  await page.getByPlaceholder('98765').fill('12345');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('button', { name: 'Pay' }).click();
  await expect(page.getByText('Thank you for your payment!')).toBeVisible();
});
