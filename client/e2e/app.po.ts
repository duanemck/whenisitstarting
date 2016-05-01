export class WhenisitstartingClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('whenisitstarting-client-app p')).getText();
  }
}
