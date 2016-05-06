import { WhenisitstartingPage } from './app.po';

describe('whenisitstarting App', function() {
  let page: WhenisitstartingPage;

  beforeEach(() => {
    page = new WhenisitstartingPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('whenisitstarting works!');
  });
});
