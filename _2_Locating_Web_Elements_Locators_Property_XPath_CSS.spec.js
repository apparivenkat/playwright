import { test, expect } from '@playwright/test'

test('Locators', async ({page})=>{
    page.goto("https://www.demoblaze.com/index.html");

    // click on login button - using property
    // await page.locator("id=login2").click();
    await page.click("id=login2")

    // provide username - CSS
    // await page.locator('#loginusername').fill("pavanol")
    await page.fill("#loginusername", 'pavanol')
    // await page.type("#loginusername", "pavanol")

    //provide password - CSS
    await page.fill("input[id='loginpassword']", 'test@123')

    // Click login button - Xpath
    await page.click("//button[normalize-space()='Log in']")

    // Check logout is present or not to validate successful login
    const logoutLink = await page.locator("//a[@id='logout2']")

    await expect(logoutLink).toBeVisible();

    await page.close()

})