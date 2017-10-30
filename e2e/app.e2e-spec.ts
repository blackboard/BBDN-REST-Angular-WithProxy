import { BBDNNewUserSignupPage } from './app.po';

describe('bbdn-new-user-signup App', function() {
  let page: BBDNNewUserSignupPage;

  beforeEach(() => {
    page = new BBDNNewUserSignupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
