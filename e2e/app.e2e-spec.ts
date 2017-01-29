import { Angular2HttpDemoPage } from './app.po';

describe('angular2-http-demo App', function() {
  let page: Angular2HttpDemoPage;

  beforeEach(() => {
    page = new Angular2HttpDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
