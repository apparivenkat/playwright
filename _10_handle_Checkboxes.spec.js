const { test, expect } = require('@playwright/test')

test("Handle_CheckBox", async ({page}) =>{
    await page.goto("https://demo.automationtesting.in/Register.html")

    // single checkbox
    await page.locator("//input[@value='Cricket' and @id='checkbox1']").check()
    // await page.check("//input[@value='Cricket' and @id='checkbox1']")

    await expect(page.locator("//input[@value='Cricket' and @id='checkbox1']")).toBeChecked()
    await expect(page.locator("//input[@value='Cricket' and @id='checkbox1']").isChecked()).toBeTruthy()
    // await expect(page.locator("//input[@value='Movies' and @id='checkbox1']").isChecked()).toBeFalsy()

    
    // Multiple Checkboxes
    
    const checkboxes = [                                                
        "//input[@value='Cricket' and @id='checkbox1']",
        "//input[@value='Movies' and @id='checkbox2']"
    ]
    
    for(const c of checkboxes){                             // select checkboxes
        await page.locator(c).check()
    }

    await page.waitForTimeout(2000)

    for(const c of checkboxes){                             // unselect checkboxes
        if(await page.locator(c).isChecked()){
            await page.locator(c).uncheck()
        }
    }

    await page.waitForTimeout(2000)
})