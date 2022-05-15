import { t } from 'testcafe';
import constant from '../constants/constant'

class Page {
    constructor(){
        this.input = constant.input
        this.btn = constant.btn
    } 

    async typeName(name) {
        await t.typeText(this.input, name);
    }

    async clickSubmit() {
        await t.click(this.btn);
    }
}

export default new Page()