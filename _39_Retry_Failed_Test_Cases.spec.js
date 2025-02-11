import { test, expect } from '@playwright/test'

import { LoginPage } from '../pages/LoginPage'
import { HomePage } from '../pages/HomePage'
import { CartPage } from '../pages/CartPage'



test("POM", async ({page}) => {
    // Login
    const login = new LoginPage(page)
    await login.gotoLoginPage()
    await login.login("pavanol", "test@123")

    // Home
    const home = new HomePage(page)
    await home.addProductToCart("Sony vaio i5")
    await home.gotToCart()


    // Cart
    const cart = new CartPage(page)
    await page.waitForTimeout(3000)
    const status = await cart.checkProductsInCart("Sony vaio i5")
    expect(await status).toBe(true)
    // expect(await status).toBe(false)
    await page.waitForTimeout(3000)
})




/*

Flaky test : Initially Tc will fail bcoz of some internet issues or runtime issues, but if we re-rrun the TC again it will pass.

    1. Adding the below to playwright.config,js file
        retries: 1,

    2. Using terminal use the below command
        npx playwright test tests/_39_Retry_Failed_Test_Cases.spec.js --project chromium --headed --retries=1

*/ 