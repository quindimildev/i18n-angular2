import { Ejemplo3Page } from './app.po';

describe('ejemplo3 App', function() {
  let page: Ejemplo3Page;

  beforeEach(() => {
    page = new Ejemplo3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
