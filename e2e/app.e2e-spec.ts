import { ExperimentPdPage } from './app.po';

describe('experiment-pd App', function() {
  let page: ExperimentPdPage;

  beforeEach(() => {
    page = new ExperimentPdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
