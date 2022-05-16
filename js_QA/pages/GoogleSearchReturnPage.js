import { t } from 'testcafe';

class SearchPage {
    constructor(){}

    async clickSearchResult(SearchResult){
        await t.click(SearchResult)
    }
}

export default new SearchPage();