using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LibraryApi.Models
{
    public class InsertReservation
    {
        public DateTime DateReservedFrom { get; set; }

        public DateTime? DateReservedTo { get; set; }

        public string UserMembershipId { get; set; }
	
        public int BookIsbn { get; set; }

        public InsertReservation(){}
        public InsertReservation(DateTime dateReservedFrom, DateTime? dateReservedTo, 
                                 string userMembershipId, int bookIsbn)
        {
            this.DateReservedFrom = dateReservedFrom;
            this.DateReservedTo = dateReservedTo;
            this.UserMembershipId = userMembershipId;
            this.BookIsbn = bookIsbn;
        }
    }
}