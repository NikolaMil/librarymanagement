export class Reservation {
    id: number;
    dateReservedFrom: Date;
    dateReservedTo: Date;
    code: number;
    dateConfirmed: Date;
    isConfirmed: boolean;
    dateReturned: Date;
    isReturned: boolean;
    userMembershipId: string;
    bookISBN: number;
    librarianConfirmedBy: string;
    librarianReturnedTo: string;

    constructor(id: number, dateReservedFrom: Date,
                dateReservedTo: Date, code: number,
                dateConfirmed: Date, isConfirmed: boolean,
                dateReturned: Date, isReturned: boolean,
                userMembershipId: string, bookISBN: number,
                librarianConfirmedBy: string, librarianReturnedTo: string) {

        this.id = id;
        this.dateReservedFrom = dateReservedFrom;
        this.dateReservedTo = dateReservedTo;
        this.code = code;
        this.dateConfirmed = dateConfirmed;
        this.isConfirmed = isConfirmed;
        this.dateReturned = dateReturned;
        this.isReturned = isReturned;
        this.userMembershipId = userMembershipId;
        this.bookISBN = bookISBN;
        this.librarianConfirmedBy = librarianConfirmedBy;
        this.librarianReturnedTo = librarianReturnedTo;
    }
}
