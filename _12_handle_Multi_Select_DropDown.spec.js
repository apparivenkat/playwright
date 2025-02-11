const { test, expect } = require('@playwright/test')

test('MultiSelect_Dropdown', async({page}) => {
    await page.goto("https://omayo.blogspot.com/")

    // select multiple options from multiselect dropdown
    await page.selectOption("#multiselect1", ['Volvo', 'Swift', "Audi"])

    // Assertions

    // 1) Check no of options in dropdown
    const opt = await page.locator("#multiselect1 option")
    await expect(opt).toHaveCount(4)

    // 2) Check no of options in dropdown using JS array
    const options = await page.$$("#multiselect1 option")
    console.log("Number of options : ", options.length)
    await expect(options.length).toBe(4)

    // 3) Check presence of value in the dropdown
    const optionss = await page.locator("#multiselect1").textContent()
    await expect(optionss.includes('Swift')).toBeTruthy()

    await page.waitForTimeout(2000)
})
