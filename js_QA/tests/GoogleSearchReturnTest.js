import GoogleSearchReturnPage from '../pages/GoogleSearchReturnPage';
import GoogleSearchReturnConstant from '../constants/GoogleSearchReturnConstant';

fixture('Getting Started')
    .page(GoogleSearchReturnConstant.url);


test('My google another page', async t => {
    // await GoogleSearchReturnPage.typeName(GoogleSearchReturnConstant.input,'Messi');
    // await GoogleSearchReturnPage.clickSubmit(GoogleSearchReturnConstant.btn);
    await GoogleSearchReturnPage.clickSearchResult(GoogleSearchReturnConstant.another)
});