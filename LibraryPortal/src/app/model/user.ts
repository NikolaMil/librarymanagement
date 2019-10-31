export class User {

    constructor(private id: number, public email: string,
                private password: string, private firstName: string,
                private lastName: string, private dateOfBirth: Date,
                private gender: string, private phoneNumber: string,
                private address: string, private postCode: number,
                private city: string, private country: string,
                public membershipId: string, private subscription: boolean,
                private interestedIn: string, public roleName: string) {
    }
}
