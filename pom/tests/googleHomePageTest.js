import googleHomePage from "../pages/googleHomePage";

fixture `Chrome`
    .page(`https://fb.com/`);

test("google", async t => {
    await t
        .typeText(HomePage.input, "https://fb.com/")
        .click(HomePage.pressKey('enter'))
})