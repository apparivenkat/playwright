const { test, expect } = require('@playwright/test')

var userId;

test.skip("GET User", async ({ request }) => {

    const response = await request.get("https://reqres.in/api/users?page=2")
    console.log(response.json())
    expect(response.status()).toBe(200)
})


test("POST User", async ({ request }) => {

    const response = await request.post("https://reqres.in/api/users",
        {
            data: { "name": "venkat", "job": "engineer", },
            headers: { "Accept": "application/json" }
        }
    )
    console.log(response.json())
    expect(response.status()).toBe(201)

    var res = await response.json()
    userId = res.id
    console.log("userId : ", userId)

})


test("PUT User", async ({ request }) => {
    const response = await request.put("https://reqres.in/api/users/"+userId,
        {
            data: { "name": "venkat", "job": "Python engineer", },
            headers: { "Accept": "application/json" }
        }
    )
    console.log(await response.json())
    console.log(await response.status())
    expect(await response.status()).toBe(200)
})

test("DELETE User", async ({ request }) => {
    const response = await request.delete("https://reqres.in/api/users/"+userId)
    console.log(await response.status())
    expect(await response.status()).toBe(204)
})