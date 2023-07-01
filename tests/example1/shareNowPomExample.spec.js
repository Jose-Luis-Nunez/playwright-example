import UserTestData from "../utils/UsertestData";
import { expect, test } from '@playwright/test';
import PersonalDataPage from './pages/PersonalDataPage.js';
import HomePage from "./pages/HomePage.js";

test('First step of registration', async ({page}) => {
    const testUser = new UserTestData();
    const personalData = new PersonalDataPage();
    const homePage = new HomePage();

    await page.goto(homePage.pageURL);
    //await page.locator(homePage.acceptCookies).click();
    await page.locator(homePage.signUpButton).click();

    await page.waitForSelector(personalData.drivingLocation);

    await page.locator(personalData.drivingLocation).selectOption('berlin');
    await page.waitForLoadState('networkidle');
    await page.locator(personalData.emailInput).fill(testUser.email);
    await page.locator(personalData.passwordInput).fill('12365');
    await page.fill(personalData.pinInput, '4567');

    await page.locator(personalData.salutationInput).selectOption({label: 'Mrs.'});
    await page.locator(personalData.firstNameInput).type('Jose');
    await page.locator(personalData.lastNameInput).type('Nunez');
    await page.locator(personalData.birthDayInput).selectOption('1');
    await page.locator(personalData.birthMonthInput).selectOption({label: 'November'});
    await page.selectOption(personalData.birthYearInput, '1950');
    await page.locator(personalData.birthPlaceInput).type('Berlin');
    await page.locator(personalData.addressStreetInput).type('Teststraße 123');
    await page.locator(personalData.addressZipcodeInput).type('12345');
    await page.locator(personalData.addressCityInput).type('Berlin');
    await page.type(personalData.mobilePhoneInput, testUser.phoneNumber);

    const termsAndConditionsCheckbox = await page.locator(personalData.registrationCheckboxes).nth(0);
    await termsAndConditionsCheckbox.click({force: true});

    await page.locator(personalData.registrationButton).click({waitNavigation: true});
    await expect(page).toHaveURL("https://www.int.share-now.com/de/en/berlin/registration/success/");
});
