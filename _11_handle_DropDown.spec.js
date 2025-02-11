const { test, expect } = require('@playwright/test')

test("Handle_Dropdown", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html")

    // multiple ways to select option from the dropdown
    // await page.locator("#yearbox").selectOption({label:"1997"})             // using label
    // await page.locator("#yearbox").selectOption("1997")             // using visible text
    // await page.locator("#yearbox").selectOption({value:"1997"})             // using value
    // await page.locator("#yearbox").selectOption({index:3})             // using index
    await page.locator("#yearbox", 1997)  //by text

    // Assertions
    // 1) Check total number of options in dropdown         Approach 1
    const options_in_dropdown = await page.locator("#yearbox option")
    await expect(options_in_dropdown).toHaveCount(101)


    // 2) Check total number of options in dropdown and print       Approach 2
    const all_options = await page.$$("#yearbox option")        
    // console.log("Number of options in dropdown : ", all_options.length)
    await expect(all_options.length).toBe(101)


    // 3) Check presence of value in the dropdown   Approach 1
    const content = await page.locator("#yearbox").textContent()
    // await expect(content.includes("19971")).toBeFalsy()      //-ve scenario
    await expect(content.includes("1997")).toBeTruthy()      //+ve scenario

    // 4) Checking  presence of value in the dropdown   Approach 2 - using enhanced for loop
    const contentt = await page.$$("#yearbox option")
    let status = false

    for(const opt of contentt){
        // console.log(await opt.textContent())
        let value = await opt.textContent()

        if(value.includes("1997")){
            status = true
            break
        }
    }
    await expect(status).toBeTruthy()
    

    // 5) select option from dropdown using looping
    const options = await page.$$("#yearbox option")

    for(const opt of options){
        let value = await opt.textContent()
        if(value.includes("2015")){
            await page.selectOption("#yearbox", value)
            break
        }
    }


    await page.waitForTimeout(2000)
    await page.close()

})