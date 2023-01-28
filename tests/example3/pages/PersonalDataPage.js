exports.PersonalDataPage = class PersonalDataPage {
    constructor(page) {
        this.page = page;
    }

    drivingLocation = () => this.page.locator(`select[name=drivingLocation]`);
    emailInput = () => this.page.locator(`input[name=email]`);
    passwordInput = () => this.page.locator('input[name=password]');
    pinInput = () => this.page.locator('input[name=pin]');
    salutationInput = () => this.page.locator('select[name=salutation]');
    firstNameInput = () => this.page.locator('input[name=firstName]');
    lastNameInput = () => this.page.locator('input[name=lastName]');
    birthDayInput = () => this.page.locator('#camelot-select-birth-date-day');
    birthMonthInput = () => this.page.locator('#camelot-select-birth-date-month');
    birthYearInput = () => this.page.locator('#camelot-select-birth-date-year');
    birthPlaceInput = () => this.page.locator('input[name=birthPlace]');
    addressStreetInput = () => this.page.locator('input[name=addressStreet]');
    addressZipcodeInput = () => this.page.locator('input[name=addressZipCode]');
    addressCityInput = () => this.page.locator('input[name=addressCity]');
    mobilePhoneInput = () => this.page.locator('input[name=mobilePhone]');
    registrationCheckboxes = () => this.page.locator('.checkbox [type=checkbox]');
    registrationButton = () => this.page.locator('#registration-save-button');

    async selectCityForRegistration(city) {
        await this.drivingLocation().selectOption(city)
        await this.page.waitForLoadState('networkidle');
    }

    async enterPersonalDataDetails(testUser) {
        await this.emailInput().fill(testUser.email);
        await this.passwordInput().fill(testUser.password)
        await this.pinInput().fill(testUser.pin)
        await this.salutationInput().selectOption({label: testUser.salutation});
        await this.firstNameInput().type(testUser.firstName)
        await this.lastNameInput().type(testUser.lastName)
        await this.birthDayInput().selectOption(testUser.dayOfBirthday);
        await this.birthMonthInput().selectOption(testUser.monthOfBirthday)
        await this.birthYearInput().selectOption(testUser.yearOfBirthday);
        await this.birthPlaceInput().type(testUser.birthPlace);
        await this.addressStreetInput().type(testUser.addressStreet)
        await this.addressZipcodeInput().type(testUser.zipCode)
        await this.addressCityInput().type(testUser.city)
        await this.mobilePhoneInput().type(testUser.phoneNumber)
    }

    async createAccount() {
        await this.registrationButton().click()
    }

    async acceptGlobalTerms() {
        const termsAndConditionsCheckbox = await this.registrationCheckboxes().nth(0);
        await termsAndConditionsCheckbox.click({force: true});
    }
}
