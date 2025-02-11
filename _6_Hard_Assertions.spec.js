const { test, expect } = require('@playwright/test')
const exp = require('constants')

test("AssertionsTest", async ({ page }) => {
    
    // open application url
    await page.goto("https://demo.nopcommerce.com/register")

    // 1) expect(page).toHaveURL()          Page has URL
    await expect(page).toHaveURL("https://demo.nopcommerce.com/register")

    
    // 2) expect(page).toHaveTitle()        Page has title
    await expect(page).toHaveTitle("nopCommerce demo store. Register")

    // 3) expect(locator).toBeVisible()
    const logoElement = await page.locator(".header-logo")
    await expect(logoElement).toBeVisible()

    // 4) expect(locator).toBeEnabled()
    const searchBox = await page.locator("#small-searchterms")
    await expect(searchBox).toBeEnabled()

    // 5) expect(locator).toBeChecked()             Radio/Checkbox is checked
    const maleRadioButton = await page.locator("#gender-male")
    await maleRadioButton.click()   
    await expect(maleRadioButton).toBeChecked() 

    const newsLetter = await page.locator("#Newsletter")
    await expect(newsLetter).toBeChecked() 

    // 6) expect(locator).toHaveAttribute("<attribute_name>","<value>")
    const regButton = await page.locator("#register-button")
    await expect(regButton).toHaveAttribute("type","submit")

    // 7) expect(locator).toHaveText("<Text>")                      Element matches text
    await expect(await page.locator(".page-title h1")).toHaveText("Register")
    
    // 8)expect(locator).toContainText("<Text>")})                  Element matches partial text
    await expect(await page.locator(".page-title h1")).toContainText("Reg")
   
    // 9) expect(locator).toHaveValue("<value>")
    const emailInput = await page.locator("#Email")
    await emailInput.fill("apparivenkat@gmail.com")
    await expect(emailInput).toHaveValue("apparivenkat@gmail.com")
    
    // 10) expect(locator).toHaveCount(<number>)                To get the all option 
    const options = await page.locator("select[name='DateOfBirthMonth'] option")
    await expect(options).toHaveCount(13)       // +ve scenario
    
    
    await expect(options).not.toHaveCount(12)   // -ve scenario

});