import { t } from 'testcafe';

class Page {
    constructor(){} 

    async typeName(input,name) {
        await t.typeText(input, name);
    }

    async clickSubmit(btn) {
        await t.click(btn);
    }
}

export default new Page()