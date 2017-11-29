import { NgHerokuPage } from './app.po';

describe('ng-heroku App', () => {
  let page: NgHerokuPage;

  beforeEach(() => {
    page = new NgHerokuPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
