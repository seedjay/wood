import { WoodAngularPage } from './app.po';

describe('wood-angular App', () => {
  let page: WoodAngularPage;

  beforeEach(() => {
    page = new WoodAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
