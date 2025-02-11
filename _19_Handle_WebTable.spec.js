const { test, expect } = require('@playwright/test')

test('Webtables', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/")

    const table = await page.locator("//table[@id='productTable']")

    // 1) total number of rows and colums
    const columns = await table.locator('thead tr th')
    console.log("Number of columns : ", await columns.count())
    expect(await columns.count()).toBe(4)

    const rows = await table.locator('tbody tr')
    console.log("Number of rows : ", await rows.count())
    expect(await rows.count()).toBe(5)


    // 2) select checkbox for smartwatch 
    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: "Smartwatch"
    })

    await matchedRow.locator("input").check()

    // 3) Select multiple product by using reusable function

    await selectProduct(rows, page, "Smartphone")
    await selectProduct(rows, page, "Wireless Earbuds")

    // 4) Print all product details using for loop
    for (let i = 0; i < await rows.count(); i++) {

        const row = rows.nth(i)
        const all_td = row.locator('td')

        for (let j = 0; j < await all_td.count() - 1; j++) {
            console.log(await all_td.nth(j).textContent())
        }
    }

    // 5) Read data from all the pages
    const all_pages = await page.locator('.pagination li a')
    console.log("Number of pages in the table : ", await all_pages.count())

    for (let p = 0; p < await all_pages.count(); p++) {
        if (p > 0) {
            await all_pages.nth(p).click()
        }
        for (let i = 0; i < await rows.count(); i++) {

            const row = rows.nth(i)
            const all_td = row.locator('td')

            for (let j = 0; j < await all_td.count() - 1; j++) {
                console.log(await all_td.nth(j).textContent())
            }
        }
        await page.waitForTimeout(2000)
    }


    await page.waitForTimeout(4000)

});

async function selectProduct(rows, page, productName) {

    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: productName
    })

    await matchedRow.locator("input").check()

}