export class Reservation {
    constructor(id, dateReservedFrom, dateReservedTo, code, dateConfirmed, isConfirmed, dateReturned, isReturned, userMembershipId, bookISBN, librarianConfirmedBy, librarianReturnedTo) {
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
//# sourceMappingURL=reservation.js.map