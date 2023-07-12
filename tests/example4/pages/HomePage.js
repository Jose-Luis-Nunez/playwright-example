import BasePage from './BasePage';

class HomePage extends BasePage {

    acceptCookieButton = '[data-testid=uc-accept-all-button]';
    signUpButton = '.primary-navbar__actions #reggie-link-register-now';

    async acceptCookies() {
        await this.find(this.acceptCookieButton).click();
    }

    async startRegistration() {
        this.find(this.signUpButton).click();
    }
}
export default HomePage;
