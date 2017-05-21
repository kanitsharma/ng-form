import { AssetAppPage } from './app.po';

describe('asset-app App', () => {
  let page: AssetAppPage;

  beforeEach(() => {
    page = new AssetAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
