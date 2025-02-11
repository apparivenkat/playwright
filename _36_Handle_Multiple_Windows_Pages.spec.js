const { test, expect, chromium } = require('@playwright/test')

test("Handle multiple page/window", async () =>{

    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()
    const page2 = await context.newPage()

    const allPages = context.pages()
    console.log("No. of pages created : ",  allPages.length)

    await page1.goto("https://www.demoblaze.com/cart.html")
    expect(await page1).toHaveTitle("STORE")

    await page2.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    expect(await page2).toHaveTitle("OrangeHRM")

})



test.only("Switching multiple page/window", async () =>{

    const browser = await chromium.launch()
    const context = await browser.newContext()

    const page1 = await context.newPage()

    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    expect(await page1).toHaveTitle("OrangeHRM")

    const pagePromise = context.waitForEvent("page")
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click()

    const newPage = await pagePromise
    await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM")
    
    await page1.waitForTimeout(3000)
    await newPage.waitForTimeout(3000)

    await browser.close()
})