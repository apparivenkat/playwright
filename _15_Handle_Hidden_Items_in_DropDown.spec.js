const { test, expect } = require('@playwright/test')

test('Handle_Hidden_Items_In_Dropdown', async({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("[name='username']").fill("Admin")
    await page.locator("[name='password']").fill("admin123")
    await page.locator("[type='submit']").click()

    await page.click("//span[normalize-space()='PIM']")

    await page.click("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]")

    // Wait for the options to load
    await page.waitForTimeout(2000)


    /*

    There is another way to inspect elements in the hidden dropdown by following these steps 
    1- Open developer tool.
    2- From the right panel, go to ‘Event Listeners’ tab.
    2- Look for ‘blur’ property.
    3- Click on ‘Remove’ button next each property values to remove it.
    4- Try to inspect the drop-down values again.
    */


    const options = await page.$$("//div[@role='listbox']//span")
    console.log(options.length)

    for(let opt of options){
        const jobTitle = await opt.textContent()
        // console.log(jobTitle)
        if(jobTitle.includes("QA Engineer")){
            await opt.click()
            break
        }
    }

    await page.waitForTimeout(2000)
});