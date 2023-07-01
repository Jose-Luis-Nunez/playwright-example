const { test, expect } = require('@playwright/test');
import PersonalDataPage from './pages/PersonalDataPage.js';
import UserTestData from "../utils/UsertestData";
import HomePage from "./pages/HomePage.js";

test.skip('first step of registration', async ({page}) => {
    const testUser = new UserTestData();
    const personalDataPage = new PersonalDataPage(page);
    const homePage = new HomePage(page);

    await homePage.goto('https://www.int.share-now.com/de/en/');
    // await homePage.acceptCookies();
    await homePage.startRegistration();

    await personalDataPage.selectCityForRegistration('berlin');
    await personalDataPage.enterPersonalDataDetails(testUser);
    await personalDataPage.acceptGlobalTerms();

    await Promise.all([
        await personalDataPage.createAccount(),
        await expect(page).toHaveURL("https://www.int.share-now.com/de/en/berlin/registration/success/"),
    ]);
});
