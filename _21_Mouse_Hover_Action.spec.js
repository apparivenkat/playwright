const { test, expect } = require('@playwright/test')

test("Mouse hover", async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const pointMe = await page.locator("//button[@class='dropbtn']")
    const mobiles = await page.locator("//a[normalize-space()='Mobiles']")

    // mouse hover action
    pointMe.hover()
    mobiles.hover()

    await page.waitForTimeout(3000)

});