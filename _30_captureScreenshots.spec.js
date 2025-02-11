import { test, expect } from '@playwright/test'

test.skip("Page Screenshot", async ({page}) =>{
    await page.goto("https://www.demoblaze.com/index.html")

    await page.screenshot({path:"tests/screenshots/"+Date.now()+"Homepage.png"})
})

test.skip("Full Page Screenshot", async ({page}) =>{
    await page.goto("https://www.demoblaze.com/index.html")
    await page.screenshot({path:"tests/screenshots/"+Date.now()+"Fullpage.png", fullpage:true})
})



test.only("Element Screenshot", async ({page}) =>{
    await page.goto("https://www.demoblaze.com/index.html")
    await page.waitForTimeout(2000)
    await page.locator("(//div[@class='col-lg-4 col-md-6 mb-4'])[1]").screenshot({path:"tests/screenshots/"+Date.now()+"Mobile.png", fullpage:true})
})



// Add the below line in playwright.config.js file to always take screenshot whenever the test will be executed
// screenshot: 'on'
