import {BasePage} from "./BasePage";

export class PersonalDataPage extends BasePage {
    drivingLocation = 'select[name=drivingLocation]';
    emailInput = 'input[name=email]';
    passwordInput = 'input[name=password]';
    pinInput = 'input[name=pin]';
    salutationInput = 'select[name=salutation]';
    firstNameInput = 'input[name=firstName]';
    lastNameInput = 'input[name=lastName]';
    birthDayInput = '#camelot-select-birth-date-day';
    birthMonthInput = '#camelot-select-birth-date-month';
    birthYearInput = '#camelot-select-birth-date-year';
    birthPlaceInput = 'input[name=birthPlace]';
    addressStreetInput = 'input[name=addressStreet]';
    addressZipcodeInput = 'input[name=addressZipCode]';
    addressCityInput = 'input[name=addressCity]';
    mobilePhoneInput = 'input[name=mobilePhone]';
    registrationCheckboxes = '.checkbox [type=checkbox]';
    registrationButton = '#registration-save-button';

    async selectCityForRegistration(city) {
        await this.find(this.drivingLocation).selectOption(city)
        await this.page.waitForLoadState('networkidle');
    }

    async enterPersonalDataDetails(testUser) {
        await this.find(this.emailInput).fill(testUser.email);
        await this.find(this.passwordInput).fill(testUser.password);
        await this.find(this.pinInput).fill(testUser.pin);
        await this.find(this.salutationInput).selectOption({label: testUser.salutation});
        await this.find(this.firstNameInput).type(testUser.firstName);
        await this.find(this.lastNameInput).type(testUser.lastName);
        await this.find(this.birthDayInput).selectOption(testUser.dayOfBirthday);
        await this.find(this.birthMonthInput).selectOption(testUser.monthOfBirthday);
        await this.find(this.birthYearInput).selectOption(testUser.yearOfBirthday);
        await this.find(this.birthPlaceInput).type(testUser.birthPlace);
        await this.find(this.addressStreetInput).type(testUser.addressStreet);
        await this.find(this.addressZipcodeInput).type(testUser.zipCode);
        await this.find(this.addressCityInput).type(testUser.city);
        await this.find(this.mobilePhoneInput).type(testUser.phoneNumber);
    }

    async createAccount() {
        await this.find(this.registrationButton).click()
    }

    async acceptGlobalTerms() {
        const termsAndConditionsCheckbox = await this.find(this.registrationCheckboxes).nth(0);
        await termsAndConditionsCheckbox.click({force: true});
    }
}
