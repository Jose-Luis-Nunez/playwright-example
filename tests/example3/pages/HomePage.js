class HomePage {
    constructor(page) {
        this.page = page;
    }

    acceptCookieButton = () => this.page.locator('[data-testid=uc-accept-all-button]');
    signUpButton = () => this.page.locator('.primary-navbar__actions #reggie-link-register-now');

    async goto(url) {
        await this.page.goto(url);
    }

    async acceptCookies() {
        await this.acceptCookieButton().click();
    }

    async startRegistration() {
        await this.signUpButton().click();
    }
}
export default HomePage
