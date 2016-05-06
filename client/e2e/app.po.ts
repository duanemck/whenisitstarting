export class WhenisitstartingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('whenisitstarting-app h1')).getText();
  }
}
