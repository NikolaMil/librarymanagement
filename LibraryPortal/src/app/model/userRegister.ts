export class UserRegister {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    gender: string;
    phoneNumber: string;
    address: string;
    postCode: number;
    city: string;
    country: string;
    subscription: boolean;
    interestedIn: string;
    roleName: string;

    constructor(email: string,
                password: string, firstName: string,
                lastName: string, dateOfBirth: Date,
                gender: string, phoneNumber: string,
                address: string, postCode: number,
                city: string, country: string,
                subscription: boolean,
                interestedIn: string, roleName: string) {

        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.postCode = postCode;
        this.city = city;
        this.country = country;
        this.subscription = subscription;
        this.interestedIn = interestedIn;
        this.roleName = roleName;
    }
}
