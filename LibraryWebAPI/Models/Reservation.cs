using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LibraryApi.Models
{
    public class Reservation
    {
        public int Id { get; set; }

        public DateTime DateReservedFrom { get; set; }

        public DateTime DateReservedTo { get; set; }

        public String Code { get; set; }

        public DateTime DateConfirmed { get; set; }

        public Boolean IsConfirmed { get; set; }

        public DateTime DateReturned { get; set; }

        public Boolean IsReturned { get; set; }

        public string UserMembershipId { get; set; }

        public int BookISBN { get; set; }

        public string LibrarianConfirmedBy { get; set; }

        public string LibrarianReturnedTo { get; set; }

        public Reservation()
        {
        }

        public Reservation(int id, DateTime dateReservedFrom, DateTime dateReservedTo, string code,
                              DateTime dateConfirmed, Boolean isconfirmed, DateTime dateReturned,
                              Boolean isReturned, string userMembershipId, int bookISBN,
                              string librarianConfirmedBy, string librarianReturnedTo)
        {
            this.Id = id;
            this.DateReservedFrom = dateReservedFrom;
            this.DateReservedTo = dateReservedTo;
            this.Code = code;
            this.DateConfirmed = dateConfirmed;
            this.IsConfirmed = isconfirmed;
            this.DateReturned = dateReturned;
            this.IsReturned = isReturned;
            this.UserMembershipId = userMembershipId;
            this.BookISBN = bookISBN;
            this.LibrarianConfirmedBy = librarianConfirmedBy;
            this.LibrarianReturnedTo = librarianReturnedTo;
        }

        public Reservation(int id, DateTime dateReservedFrom, DateTime dateReservedTo, string code,
                              DateTime dateConfirmed, Boolean isconfirmed,
                              Boolean isReturned, string userMembershipId, int bookISBN,
                              string librarianConfirmedBy, string librarianReturnedTo)
        {
            this.Id = id;
            this.DateReservedFrom = dateReservedFrom;
            this.DateReservedTo = dateReservedTo;
            this.Code = code;
            this.DateConfirmed = dateConfirmed;
            this.IsConfirmed = isconfirmed;
            this.DateReturned = DateTime.Parse("1/1/1970");
            this.IsReturned = isReturned;
            this.UserMembershipId = userMembershipId;
            this.BookISBN = bookISBN;
            this.LibrarianConfirmedBy = librarianConfirmedBy;
            this.LibrarianReturnedTo = librarianReturnedTo;
        }

        public Reservation(int id, DateTime dateReservedFrom, DateTime dateReservedTo, string code,
                              Boolean isconfirmed,
                              Boolean isReturned, string userMembershipId, int bookISBN,
                              string librarianConfirmedBy, string librarianReturnedTo)
        {
            this.Id = id;
            this.DateReservedFrom = dateReservedFrom;
            this.DateReservedTo = dateReservedTo;
            this.Code = code;
            this.DateConfirmed = DateTime.Parse("1/1/1970");
            this.IsConfirmed = isconfirmed;
            this.DateReturned = DateTime.Parse("1/1/1970");
            this.IsReturned = isReturned;
            this.UserMembershipId = userMembershipId;
            this.BookISBN = bookISBN;
            this.LibrarianConfirmedBy = librarianConfirmedBy;
            this.LibrarianReturnedTo = librarianReturnedTo;
        }
    }
}