const { test, expect } = require('@playwright/test')

test("Keyboard Action", async ({page}) =>{
    await page.goto("https://gotranscript.com/text-compare")

    await page.fill("[name='text1']", "Welcome Appari Venkat")

    // CTRL + A
    await page.keyboard.press('Control+A')

    // CTRL + C
    await page.keyboard.press('Control+C')

    // TAB
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')

    // CTRL + V
    await page.keyboard.press('Control+V')

    await page.waitForTimeout(5000)

}); 