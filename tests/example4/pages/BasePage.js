import {Locator, Page} from '@playwright/test';

export class BasePage {
    page = Page;

    constructor(page) {
        this.page = page;
    }

    find(selector) {
        return this.page.locator(selector);
    }
}
