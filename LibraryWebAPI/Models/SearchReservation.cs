using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LibraryApi.Models
{
    public class SearchReservation
    {
        public string MembershipId { get; set; }

        public string Email { get; set; }

        public string Code { get; set; }

        public DateTime DateReservedFrom { get; set; }

        public DateTime DateReservedTo { get; set; }

        public bool IsConfirmed { get; set; }

        public SearchReservation()
        {
        }

        public SearchReservation(string membershipId, 
                                string email, string code, DateTime dateReservedFrom,
                                DateTime dateReservedTo, bool isConfirmed)
        {
            this.MembershipId = membershipId;
            this.Email = email;
            this.Code = code;
            this.DateReservedFrom = dateReservedFrom;
            this.DateReservedTo = dateReservedTo;
            this.IsConfirmed = isConfirmed;
        }
    }
}