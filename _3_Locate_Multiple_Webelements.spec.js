import { test, expect} from '@playwright/test'

test('Multiple Locators', async ({page}) =>{
    await page.goto("https://www.demoblaze.com/index.html")

    const all_links_in_page = await page.$$('a')

    // print all the elements with links

    console.log("print all the elements with links")
    for(const l of all_links_in_page){
        const linktext = await l.textContent();
        console.log(linktext)
    }

    // print the label of the products available in page
    console.log("-----------")

    console.log("print the label of the products available in page")

    await page.waitForSelector("//div[@id='tbodyid']//h4/a")
    const products = await page.$$("//div[@id='tbodyid']//h4/a")

    for(const p of products ){
        const productName = await p.textContent()
        console.log(productName)
    }

    await page.close()
})