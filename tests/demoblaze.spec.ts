import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homepage';
import { OrdersPage } from '../pages/orderspage';
import { CartsPage } from '../pages/cartpage';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
});

test('Successful Registration', async ({ page }) => {
    const homePage = new HomePage(page);

  page.on('dialog', async dialog => {
    //console.log(`Dialog message: ${dialog.message()}`);
    const alertMessage = dialog.message();
    expect(alertMessage).toBe('Sign up successful.');
    await dialog.accept();
});

  await homePage.register();
  await page.waitForTimeout(2000);
  

});

test('Successful Login', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.successfulLogin();
  
    await expect(page.locator('#nameofuser')).toContainText('Welcome Mohamed');
  
  });

test('Successful Logout', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.successfulLogin();
    await homePage.logout();
  
    await expect(page.locator('#signin2')).toBeVisible();
  
  });

  test('Create Order Test', async ({ page }) => {

    const homePage = new HomePage(page);
    const ordersPage = new OrdersPage(page);
    const cartsPage = new CartsPage(page);

    await homePage.successfulLogin();
    await homePage.chooseItem();
    await ordersPage.addItemToCart();
    await cartsPage.placeOrder();

    await expect(page.getByText('Thank you for your purchase!')).toBeVisible();
  
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });