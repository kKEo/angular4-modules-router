import { RounterTestPage } from './app.po';

describe('rounter-test App', () => {
  let page: RounterTestPage;

  beforeEach(() => {
    page = new RounterTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
