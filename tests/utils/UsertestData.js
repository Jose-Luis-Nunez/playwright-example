export class UserTestData {
    constructor() {
        this.salutation = "Mrs."
        this.firstName = "jose"
        this.lastName = "nunez"
        this.dayOfBirthday = "1"
        this.monthOfBirthday = "12"
        this.yearOfBirthday = "1989"
        this.email = this.getRandomEmail()
        this.password = "123456"
        this.pin = "1234"
        this.birthPlace = "Berlin"
        this.addressStreet = "Teststr. 123"
        this.zipCode = "12345"
        this.city = "Berlin"
        this.phoneNumber = this.getRandomPhoneNumber()
    }

    getRandomPhoneNumber() {
        return `${parseInt(this.getCurrentTime() / 100)}`
    }

    getRandomEmail() {
        return `josenunezumi+${this.getCurrentTime()}@gmail.rofl`
    }

    getCurrentTime() {
        return Date.now()
    }
}
