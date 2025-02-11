const { test, expect } = require('@playwright/test')

test("DatePicker", async ({page}) =>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.fill("#datepicker", "12/12/2024")

    // date picker
    const year="2025"
    const month="March"
    let date="20"

    await page.click("#datepicker")

    while (true) {
        const currentYear = await page.locator(".ui-datepicker-year").textContent()
        const currentMonth = await page.locator(".ui-datepicker-month").textContent()

        if(currentYear == year && currentMonth==month){
            break
        }

        await page.locator("[title='Next']").click()             // for selecting next month
        await page.locator("[title='Prev']").click()             // for selecting prev month

    }

    const dates = await page.$$("//a[@class='ui-state-default']")

    for(const dt of dates){
        if(await dt.textContent()==date){
            await dt.click()
            break
        }
    }


    // date selection without loop
    await page.click("#datepicker")
    const new_date="17"
    // await page.click("//a[normalize-space()='18']")
    await page.click(`//a[normalize-space()='${new_date}']`)

// 
    await page.waitForTimeout(3000)

})