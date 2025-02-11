const { test, expect } = require('@playwright/test')

test('BootStrap_MultiSelect_Dropdown', async({page}) => {
    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2")

    await page.locator(".multiselect").click()      // click on the dropdown

    // 1
    const options = await page.locator("ul>li label input")
    await expect(options).toHaveCount(11)

    // 2
    const optionss = await page.$$("ul>li label input")
    await expect(optionss.length).toBe(11)

    // 3 select multiple options from dropdown
    const opt = await page.$$("ul>li label")

    for(let o of opt){
        const value = await o.textContent()
        // console.log("Value is : ", value)

        if(value.includes('Angular') || value.includes('Java')){
            await o.click()
        }
    }


    // 4 de-select multiple options from dropdown
    const optt = await page.$$("ul>li label")

    for(let op of optt){
        const value = await op.textContent()
        // console.log("Value is : ", value)

        if(value.includes('Java') || value.includes('HTML')){
            await op.click()
        }
    }




    await page.waitForTimeout(1000)

});