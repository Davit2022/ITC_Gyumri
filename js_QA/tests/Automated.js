import GoogleHome from '../pages/GoogleHomePage';
import GoogleSearchResult from '../pages/GoogleSearchReturnPage';

const url = 'https://google.com'
fixture('Getting Started')
    .page(url);


test('My google page', async t => {
    await GoogleHome.typeName('Messi');
    await GoogleHome.clickSubmit();
    await GoogleSearchResult.clickSearchResult()
});

