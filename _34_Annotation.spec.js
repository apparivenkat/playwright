import { test, expect } from '@playwright/test'

//  only annotation - 
// test.only("Test1", async ()=>{
//     console.log("This is test 1")
// })

// Skip annotation
test.skip("Test2", async ()=>{
    console.log("This is test 2")
})

// skipping on condition
test("Test3", async ({page, browserName})=>{
    console.log("This is test 3")
    // if(browserName == "chromium"){               // This will skip if the browserName == chromium
    //     test.skip()
    // }

    if(browserName == "firefox"){
        test.skip()
    }
})

// fixme annotation
test("Test4", async ()=>{
    test.fixme()
    console.log("This is test 4")
})

// Fail annotation
test("Test5", async ({page}) =>{
    test.fail()     // annotation is fail
    console.log("This is test 5")
    // expect(1).toBe(1)   // Expected as pass             "This TC will fail as the annotation is set as fail but assertion is set as pass"
    expect(1).toBe(2)   // Expected as fail          "This TC will pass as the annotation is set as fail and assertion is also set as fail"

})


test("Test6", async ({page, browserName}) =>{
    console.log("This is test 6")
    // if(browserName==="chromium"){       // Condition for fail
    if(browserName==="firefox"){       // Condition for pass
        test.fail()     // annotation is fail
    }
})


// slow
// By default the wait time is 30 seconds. But if we want to update then in "playwright.config.js" set as below:
// timeout:2000 (line 36)

test("Test7", async ({page, browserName}) =>{
    test.slow()     // This annotation will make the timeout 3 times of the timeout mentioned in playwright config file
    // test.setTimeout(5000)       //Explicitly adding time for testcase as per requirement (alternative to the above)
    await page.goto("https://www.demoblaze.com/")
    console.log("This is test 7")
})