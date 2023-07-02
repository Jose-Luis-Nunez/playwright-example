class PersonalDataPage {
    constructor(page) {
        this.page = page;
        this.drivingLocation = page.locator(`select[name=drivingLocation]`);
        this.emailInput = page.locator(`input[name=email]`);
        this.passwordInput = page.locator('input[name=password]');
        this.pinInput = page.locator('input[name=pin]');
        this.salutationInput = page.locator('select[name=salutation]');
        this.firstNameInput = page.locator('input[name=firstName]');
        this.lastNameInput = page.locator('input[name=lastName]');
        this.birthDayInput = page.locator('#camelot-select-birth-date-day');
        this.birthMonthInput = page.locator('#camelot-select-birth-date-month');
        this.birthYearInput = page.locator('#camelot-select-birth-date-year');
        this.birthPlaceInput = page.locator('input[name=birthPlace]');
        this.addressStreetInput = page.locator('input[name=addressStreet]');
        this.addressZipcodeInput = page.locator('input[name=addressZipCode]');
        this.addressCityInput = page.locator('input[name=addressCity]');
        this.mobilePhoneInput = page.locator('input[name=mobilePhone]');
        this.registrationCheckboxes = page.locator('.checkbox [type=checkbox]');
        this.registrationButton = page.locator('#registration-save-button');
    }

    async selectCityForRegistration(city) {
        await this.page.waitForNavigation();
        await this.drivingLocation.selectOption(city);
        await this.page.waitForLoadState('networkidle');
    }

    async enterPersonalDataDetails(testUser) {
        await this.emailInput.fill(testUser.email);
        await this.passwordInput.fill(testUser.password);
        await this.pinInput.fill(testUser.pin);
        await this.salutationInput.selectOption({label: testUser.salutation});
        await this.firstNameInput.type(testUser.firstName);
        await this.lastNameInput.type(testUser.lastName);
        await this.birthDayInput.selectOption(testUser.dayOfBirthday);
        await this.birthMonthInput.selectOption(testUser.monthOfBirthday);
        await this.birthYearInput.selectOption(testUser.yearOfBirthday);
        await this.birthPlaceInput.type(testUser.birthPlace);
        await this.addressStreetInput.type(testUser.addressStreet);
        await this.addressZipcodeInput.type(testUser.zipCode);
        await this.addressCityInput.type(testUser.city);

        await this.mobilePhoneInput.type(testUser.phoneNumber);
    }

    async createAccount() {
        await this.registrationButton.click({ waitNavigation: true });
    }

    async acceptGlobalTerms() {
        const termsAndConditionsCheckbox = await this.registrationCheckboxes.nth(0);
        await termsAndConditionsCheckbox.click({force: true});
    }
}
export default PersonalDataPage;
