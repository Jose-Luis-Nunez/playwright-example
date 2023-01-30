import {BasePage} from './BasePage';

export class HomePage extends BasePage {

    acceptCookieButton = '[data-testid=uc-accept-all-button]';
    signUpButton = '.primary-navbar__actions #reggie-link-register-now';

    async acceptCookies() {
        await this.find(this.acceptCookieButton).click();
    }

    async startRegistration() {
        await this.find(this.signUpButton).click();
    }
}
