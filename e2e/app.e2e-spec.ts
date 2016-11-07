import { AngularsLab2Page } from './app.po';

describe('angulars-lab2 App', function() {
  let page: AngularsLab2Page;

  beforeEach(() => {
    page = new AngularsLab2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
