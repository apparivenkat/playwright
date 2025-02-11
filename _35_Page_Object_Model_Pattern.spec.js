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
    await page.waitForTimeout(3000)
})