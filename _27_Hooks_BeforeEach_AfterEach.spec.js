const { test, expect }  = require('@playwright/test')

let page;

test.beforeEach(async ({browser}) =>{
    page = await browser.newPage();

    await page.goto("https://www.demoblaze.com/index.html")

    await page.locator("//a[@id='login2']").click()
    await page.fill("#loginusername", "pavanol")
    await page.fill("#loginpassword", "test@123")
    await page.click("button[onclick='logIn()']")
})

test.afterEach(async ()=>{
    await page.locator("#logout2").click()
})

test("Test home page", async () =>{
    const products = await page.$$(".hrefch")
    await expect(products).toHaveLength(9)
})

test("Add product to cart", async () =>{
    await page.locator("//a[normalize-space()='Samsung galaxy s6']").click()
    await page.locator("//a[@class='btn btn-success btn-lg']").click()

    page.on("dialog", async dialog =>{
        await expect(dialog.message()).toContain("Product added.")
        await dialog.accept()
    })
})




//  fullyParallel: false,