export class UserTestData {
    constructor() {
        this.salutation = "HERR"
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
        const currentTime = Date.now()
        return `${parseInt(currentTime/100)}`
    }

    getRandomEmail() {
        const currentTime = Date.now()
        return `josenunezumi+${currentTime}@gmail.com`
    }

}
