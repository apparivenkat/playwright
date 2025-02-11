const { test, expect } = require('@playwright/test')


test("Soft AssertionsTest", async ({ page }) => {
    
    await page.goto("https://demo.nopcommerce.com/register")

    // Hard Assertions
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")
    await expect(page).toHaveTitle("nopCommerce demo store. Register")

    const logoElement = await page.locator(".header-logo")
    await expect(logoElement).toBeVisible()


    // Soft Assertions
    await expect.soft(page).toHaveURL("https://demo.nopcommerce.com/register")
    await expect.soft(page).toHaveTitle("dummy123")

    await expect.soft(logoElement).toBeVisible()
});