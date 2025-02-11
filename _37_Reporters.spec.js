import {test, expect} from '@playwright/test'

test("test1", async({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com")
    await expect(page).toHaveTitle("OrangeHRM")
})


test("test2", async({page}) =>{
    await page.goto("https://www.demoblaze.com/index.html")
    await expect(page).toHaveTitle("STORE")
})


test("test3", async({page}) =>{
    await page.goto("https://mega.nz/fm/ARggUaYa")
    await expect(page).toHaveTitle("MEGA")
})



/*
    1. Provide the command as below in terminal
        npx playwright test tests/_37_Reporters.spec.js --project chromium --reporter=list
        npx playwright test tests/_37_Reporters.spec.js --project chromium --reporter=html
        npx playwright test tests/_37_Reporters.spec.js --project chromium --reporter=dot
        npx playwright test tests/_37_Reporters.spec.js --project chromium --reporter=json
        npx playwright test tests/_37_Reporters.spec.js --project chromium --reporter=junit
    
    2.  Change the "playwright.config.js" file as *** reporter: 'list' ***
        reporter: 'list'
        reporter: 'html',
        reporter: 'list',
        reporter: 'dot',
        reporter: [['json', {outputFile:"result.json"}]],
        reporter: [['junit', {outputFile:"result.xml"}]], 
    
    3. To generate multiple reports
    reporter: [['list'], ['dot'],['junit', {outputFile:"result.xml"}]], 

    
*/
