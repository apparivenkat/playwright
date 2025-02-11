const {test, expect} = require('@playwright/test')

test("Handle_Radio_Button", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html")

    const maleRadioButton = await page.locator("//input[@value='Male']")

    await maleRadioButton.check()

    await expect(maleRadioButton).toBeChecked()         // to check element is visible or not     
    await expect(maleRadioButton.isChecked()).toBeTruthy();


    const femaleRadioButton = await page.locator("//input[@value='FeMale']")
    await expect(femaleRadioButton.isChecked()).not.toBeFalsy()
    // await expect(femaleRadioButton.isChecked()).toBeFalsy()     //failed condition

    await page.waitForTimeout(5000)

    await page.close()

})