import { SkelAppPage } from './app.po';

describe('SkelApp App', function() {
  let page: SkelAppPage;

  beforeEach(() => {
    page = new SkelAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
