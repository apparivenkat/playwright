const { test, expect } = require('@playwright/test')

test("Tag test 1 @sanity", async ({page}) =>{
    console.log("This is test 1")
})


test("Tag test 2 @sanity", async ({page}) =>{
    console.log("This is test 2")
})


test("Tag test 3 @sanity@reg", async ({page}) =>{
    console.log("This is test 3")
})


test("Tag test 4 @reg", async ({page}) =>{
    console.log("This is test 4")
})


test("Tag test 5 @reg", async ({page}) =>{
    console.log("This is test 5")
})




// npx playwright test tests/_33_Tag_playwright_tests.spec.js --project chromium --headed --grep @reg (to run "reg" tagged tests)

// npx playwright test tests/_33_Tag_playwright_tests.spec.js --project chromium --headed --grep @sanity (to run "sanity" tagged tests)

// npx playwright test tests/_33_Tag_playwright_tests.spec.js --project chromium --headed --grep @sanity@reg (to run "reg & sanity" tagged tests)

// npx playwright test tests/_33_Tag_playwright_tests.spec.js --project chromium --headed --grep @sanity --grep-invert @reg (to run "sanity" tagged tests and exclude "reg" tagged tests)

// npx playwright test tests/_33_Tag_playwright_tests.spec.js --project chromium --headed --grep @reg --grep-invert @sanity (to run "reg" tagged tests and exclude "sanity" tagged tests)