const { test, expect } = require('@playwright/test')

test('Frames', async({page}) => {
    await page.goto("https://ui.vision/demo/webtest/frames/")

    // total frames
    const allFrames = await page.frames()
    console.log("Number of frames : ", allFrames.length)

    // Approach 1  :  Using name or url
    // const frameName = await page.frame("FrameName")          // Using frameName
    const frame1 = await page.frame({url:"https://ui.vision/demo/webtest/frames/frame_1.html"})     //Using frame url
    await frame1.fill("[name='mytext1']", "Hello")


    // Approcaach 2 - Using frame locator

    const inputBox = await page.frameLocator("frame[src='frame_1.html']").locator("[name='mytext1']")
    inputBox.fill("Hello Venkat")

    await page.waitForTimeout(3000)


});