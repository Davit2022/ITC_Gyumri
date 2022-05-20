import {Selector} from "testcafe"

fixture `Google test`
.page `https://www.microsoft.com/`;
const serchResult = Selector('#coreui-feature-4icuog0 > section > div > h2')

test('test.1',async t =>{
    await t
     .click('#search')
    .typeText('#cli_shellHeaderSearchInput', 'word')
    .pressKey('enter')
    .expect(serchResult.innerText).contains('Microsoft 365') 
})