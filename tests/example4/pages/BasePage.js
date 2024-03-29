import { Page } from '@playwright/test';

class BasePage {
    page = Page;

    constructor(page) {
        this.page = page;
    }

    find(selector) {
        return this.page.locator(selector);
    }
}
export default BasePage;
