import { Selector } from "testcafe";

class HomePage{
    constructor(){
        this.input = Selector("#input");
        this.pressKey('enter')
    }
    async input(pageName="anyPage"){
        await t
            .typeText(this.input, pageName)
            .click(this.pressKey('enter'))
    }
}
export default googleHomePage = new googleHomePage();