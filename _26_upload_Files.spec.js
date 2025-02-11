const { test, expect } = require('@playwright/test')

test.skip("Upload single files", async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForSelector("//input[@id='singleFileInput']")

    // await page.locator("//input[@id='singleFileInput']").click()
    await page.locator("//input[@id='singleFileInput']").setInputFiles("tests/uploadFiles/Appari Venkat Python QA Engineer.pdf")

    await page.waitForTimeout(5000)

});




test("Upload multiple files", async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.waitForSelector("//input[@id='multipleFilesInput']")

    // await page.locator("//input[@id='singleFileInput']").click()
    await page.locator("//input[@id='multipleFilesInput']").setInputFiles(["tests/uploadFiles/Appari Venkat Python QA Engineer.pdf", "tests/uploadFiles/Venkat Java QA.pdf"])
        
    await page.waitForTimeout(5000)

    //  to remove the files
    await page.locator("//input[@id='multipleFilesInput']").setInputFiles([])


    await page.waitForTimeout(5000)

});