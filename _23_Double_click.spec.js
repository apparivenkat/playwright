const { test, expect } = require('@playwright/test')

test("Mouse Double CLick", async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const cpyButton = await page.locator("//button[normalize-space()='Copy Text']")

    await cpyButton.dblclick()        // double click

    const field2 = await page.locator("#field2")

    await expect(field2).toHaveValue("Hello World!")

    await page.waitForTimeout(5000)

});