import { HttpClientBasicsPage } from './app.po';

describe('http-client-basics App', function() {
  let page: HttpClientBasicsPage;

  beforeEach(() => {
    page = new HttpClientBasicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
