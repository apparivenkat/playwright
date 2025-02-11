const { test, expect } = require('@playwright/test')

test("Drag and drop", async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    const smallBox = page.locator("#draggable")
    const bigBox = page.locator("#droppable")

    // Approach 1
    // await smallBox.hover()
    // await page.mouse.down()

    // await bigBox.hover()
    // await page.mouse.up()

    // Approach 2
    await smallBox.dragTo(bigBox)

    await page.waitForTimeout(5000)

});
