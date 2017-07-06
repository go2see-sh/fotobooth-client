import { FotomatPage } from './app.po';

describe('fotomat App', () => {
  let page: FotomatPage;

  beforeEach(() => {
    page = new FotomatPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
