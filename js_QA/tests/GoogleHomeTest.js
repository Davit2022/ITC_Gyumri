import GoogleHomePage from '../pages/GoogleHomePage';
import GoogleHomeConstant from '../constants/GoogleHomeConstant';

fixture('Getting Started')
    .page(GoogleHomeConstant.url);


test('My google page', async t => {
    await GoogleHomePage.typeName(GoogleHomeConstant.input,'Messi');
    await GoogleHomePage.clickSubmit(GoogleHomeConstant.btn);
    // await GoogleSearchResult.clickSearchResult(constant.)
});



