import { WhenisitstartingClientPage } from './app.po';

describe('whenisitstarting-client App', function() {
  let page: WhenisitstartingClientPage;

  beforeEach(() => {
    page = new WhenisitstartingClientPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('whenisitstarting-client Works!');
  });
});
