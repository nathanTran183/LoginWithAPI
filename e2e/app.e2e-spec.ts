import { LoginWithAPIPage } from './app.po';

describe('login-with-api App', function() {
  let page: LoginWithAPIPage;

  beforeEach(() => {
    page = new LoginWithAPIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
