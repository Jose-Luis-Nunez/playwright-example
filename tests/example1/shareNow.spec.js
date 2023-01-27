import {UserTestData} from "../utils/UserTestData";
import {expect, test} from '@playwright/test';
import PersonalDataPage from './pages/PersonalDataPage';
import HomePage from "./pages/HomePage";

test('first step of registration', async ({page}) => {
    const testUser = new UserTestData()
    const personalData = new PersonalDataPage();
    const homePage = new HomePage();

    await page.goto(homePage.pageURL);
    await page.locator(homePage.acceptCookies).click();
    await page.locator(homePage.signUpButton).click();

    await page.selectOption(personalData.drivingLocation, 'berlin');
    await page.waitForLoadState('networkidle');

    await page.locator(personalData.emailInput).fill(testUser.email);
    await page.fill(personalData.passwordInput, '12365');
    await page.locator(personalData.pinInput).fill('4567');


    await page.locator(personalData.salutationInput).selectOption({label: 'Mrs.'});
    await page.locator(personalData.firstNameInput).type('Jose');
    await page.locator(personalData.lastNameInput).type('Nunez');
    await page.selectOption(personalData.birthDayInput, '1');
    await page.locator(personalData.birthMonthInput).selectOption({label: 'November'});
    await page.selectOption(personalData.birthYearInput, '1950');
    await page.locator(personalData.birthPlaceInput).type('Berlin');
    await page.locator(personalData.addressStreetInput).type('Teststraße 123');
    await page.locator(personalData.addressZipcodeInput).type('12345');
    await page.locator(personalData.addressCityInput).type('Berlin');
    await page.locator(personalData.mobilePhoneInput).type(testUser.phoneNumber);

    const termsAndConditionsCheckbox = await page.locator(personalData.registrationCheckboxes).nth(0);
    await termsAndConditionsCheckbox.click({force: true});
    await page.locator(personalData.registrationButton).click();

    await expect(page).toHaveURL(/payment/);
});
