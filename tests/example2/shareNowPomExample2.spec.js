const { test, expect } = require('@playwright/test');
import PersonalDataPage from './pages/PersonalDataPage.js';
import UserTestData from "../utils/UsertestData";
import HomePage from "./pages/HomePage.js";

test('first step of registration', async ({page}) => {
    const testUser = new UserTestData();
    const personalDataPage = new PersonalDataPage(page);
    const homePage = new HomePage(page);

    await page.goto('https://www.int.share-now.com/de/en/', { waitUntil: 'networkidle' });
    // await homePage.acceptCookies();
    await homePage.startRegistration();

    await personalDataPage.selectCityForRegistration('berlin');
    await personalDataPage.enterPersonalDataDetails(testUser);
    await personalDataPage.acceptGlobalTerms();

    await personalDataPage.createAccount();
    await page.waitForSelector('.registration-success__content .registration-success__img');

    await expect(page).toHaveURL("https://www.int.share-now.com/de/en/berlin/registration/success/");

});
