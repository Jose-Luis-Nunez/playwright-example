const { test, expect } = require('@playwright/test');
const { PersonalDataPage } = require('./pages/PersonalDataPage');
const { HomePage } = require('./pages/HomePage');
const {UserTestData} = require("../utils/UsertestData");

test('first step of registration', async ({page}) => {
    const testUser = new UserTestData();
    const personalDataPage = new PersonalDataPage(page);
    const homePage = new HomePage(page);

    await homePage.goto('https://www.int.share-now.com/de/en/');
    await homePage.acceptCookies();
    await homePage.startRegistration();

    await personalDataPage.selectCityForRegistration('berlin');
    await personalDataPage.enterPersonalDataDetails(testUser)
    await personalDataPage.acceptGlobalTerms()
    await personalDataPage.createAccount()

    await expect(page).toHaveURL("https://www.int.share-now.com/de/en/berlin/registration/success/");});
