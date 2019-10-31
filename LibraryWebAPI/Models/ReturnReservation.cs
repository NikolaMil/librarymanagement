using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LibraryApi.Models
{
    public class ReturnReservation
    {
        public int Id { get; set; }

        public DateTime DateReturned { get; set; }

        public string UserMembershipId { get; set; }

        public string Code { get; set; }

        public ReturnReservation(int id, DateTime dateReturned, string userMembershipId, string code)
        {
            this.Id = id;
            this.DateReturned = dateReturned;
            this.UserMembershipId = userMembershipId;
            this.Code = code;
        }
    }
}
