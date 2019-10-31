using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LibraryApi.Models
{
    public class ConfirmReservation
    {
        public int Id { get; set; }

        public DateTime DateConfirmed { get; set; }

        public string UserMembershipId { get; set; }

        public string Code { get; set; }

        public ConfirmReservation(int id, DateTime dateConfirmed, string userMembershipId, string code)
        {
            this.Id = id;
            this.DateConfirmed = dateConfirmed;
            this.UserMembershipId = userMembershipId;
            this.Code = code;
        }
    }
}