import {t } from 'testcafe';
import constant from "../constants/constant"

class SearchPage {
    constructor(){
        this.SearchResult = constant.another;
    }

    async clickSearchResult(){
        await t.click(this.SearchResult)
    }
}

export default new SearchPage();