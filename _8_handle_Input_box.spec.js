const {test, expect} = require('@playwright/test')

test("Handle_input_box", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html")

    const firstName = await page.locator("//input[@placeholder='First Name']")

    await expect(firstName).toBeVisible()         // to check element is visible or not   
    await expect(firstName).toBeEmpty()         // to check element is empty or not
    await expect(firstName).toBeEditable()         // to check element is editable
    await expect(firstName).toBeEnabled()         // to check element is enable
    



    // await page.locator("//input[@placeholder='First Name']").fill("John")
    await page.fill("//input[@placeholder='First Name']","John")

    await page.waitForTimeout(5000)

    await page.close()

})