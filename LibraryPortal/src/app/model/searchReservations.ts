export class SearchReservations {
    membershipId: number;
    email: string;
    code: string;
    dateReservedFrom: Date;
    dateReservedTo: Date;
    isConfirmed: boolean;
    bookISBN: number;

    constructor(membershipId: number, email: string,
                code: string, dateReservedFrom: Date,
                dateReservedTo: Date, bookISBN: number) {

        this.membershipId = membershipId;
        this.email = email;
        this.code = code;
        this.dateReservedFrom = dateReservedFrom;
        this.dateReservedTo = dateReservedTo;
        this.isConfirmed = true;
        this.bookISBN = bookISBN;
    }
}
