import { SlapMeanPage } from './app.po';

describe('slap-mean App', function() {
  let page: SlapMeanPage;

  beforeEach(() => {
    page = new SlapMeanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
