const { test, expect } = require('@playwright/test')

test('Home Page', async ({page})=>{
    await page.goto("https://www.demoblaze.com/index.html");
    await page.click("id=login2")
    await page.fill("#loginusername", 'pavanol')
    await page.fill("input[id='loginpassword']", 'test@123')
    await page.click("//button[normalize-space()='Log in']")
    const logoutLink = await page.locator("//a[@id='logout2']")
    await expect(logoutLink).toBeVisible();
    await page.close()
})


// Add the below line in playwright.config.js file to always take screenshot whenever the test will be executed
// trace: 'on'
