import {test, expect} from '@playwright/test'

test("test1", async({page}) =>{
    await page.goto("https://opensource-demo.orangehrmlive.com")
    await expect(page).toHaveTitle("OrangeHRM")
})


test("test2", async({page}) =>{
    await page.goto("https://www.demoblaze.com/index.html")
    await expect(page).toHaveTitle("STORE")
})





/*

    1. Install the allure playwright library
        npm i -D @playwright/test allure-playwright

    2. Install Allure playwright command line
        npm install -g allure-commandline --save-dev

    3. playwright.config.js
        reporter: [['allure-playwright', {outputFile:"allure-results"}]]

    4. Run the tests
        (a) npx playwright test tests/_38_Allure_Reports.spec.js --project chromium (generating report using playwright.config.js file)

        (b) npx playwright test tests/_38_Allure_Reports.spec.js --project chromium --reporter=allure-results (generating report from terminal)

    5. Genreate Allure report
        allure generate allure-results -o allure-report --clean  

    6. open allure report
        allure open allure-report

*/ 