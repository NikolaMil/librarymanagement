//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DatabaseLayer
{
    using System;
    using System.Collections.Generic;
    
    public partial class Reservation
    {
        public int id { get; set; }
        public System.DateTime date_reserved_from { get; set; }
        public System.DateTime date_reserved_to { get; set; }
        public string code { get; set; }
        public Nullable<System.DateTime> date_confirmed { get; set; }
        public Nullable<System.DateTime> date_returned { get; set; }
        public int user_fk { get; set; }
        public int book_fk { get; set; }
        public Nullable<int> confirmed_by { get; set; }
        public Nullable<int> returned_to { get; set; }
    
        public virtual Book Book { get; set; }
        public virtual User User { get; set; }
    }
}
