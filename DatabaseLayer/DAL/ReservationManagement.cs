using DatabaseLayer.DAO;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Runtime.Remoting.Metadata.W3cXsd2001;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseLayer.DAL
{
    public class ReservationManagement
    {
        private LibraryManagementEntities entities;

        public ReservationManagement()
        {
            this.entities = new LibraryManagementEntities();
        }

        public IEnumerable<ReservationDao> GetAll()
        {
            IEnumerable<Reservation> dbReservations = this.entities.Reservations.ToList();
            List<ReservationDao> reservations = new List<ReservationDao>();

            foreach (Reservation dbReservation in dbReservations)
            {
                string user = this.entities.Users.FirstOrDefault(u => u.id == dbReservation.user_fk).membership_id;
                int book = this.entities.Books.FirstOrDefault(b => b.id == dbReservation.book_fk).isbn;
                string librarianReturnedTo = this.entities.Users.FirstOrDefault(u => u.id == dbReservation.returned_to).membership_id;
                string librarianConfirmedBy = this.entities.Users.FirstOrDefault(u => u.id == dbReservation.confirmed_by).membership_id;
                //string librarianReturnedTo = this.entities.Users.FirstOrDefault(u => u.id == dbReservation.returned_to).membership_id;

                //string librarianReturnedTo = null;
                //
                //if (dbReservation.returned_to != null)
                //{
                //    librarianReturnedTo = this.entities.Users.FirstOrDefault(u => u.id == dbReservation.returned_to).membership_id;
                //}

                if(dbReservation.date_confirmed != null && dbReservation.date_returned != null)
                {
                    reservations.Add(new ReservationDao(dbReservation.id, dbReservation.date_reserved_from,
                                dbReservation.date_reserved_to, dbReservation.code,
                                (DateTime) dbReservation.date_confirmed, true, (DateTime) dbReservation.date_returned, true,
                                user, book, librarianConfirmedBy, librarianReturnedTo));
                }
                else if (dbReservation.date_confirmed != null)
                {
                    reservations.Add(new ReservationDao(dbReservation.id, dbReservation.date_reserved_from,
                                dbReservation.date_reserved_to, dbReservation.code,
                                (DateTime)dbReservation.date_confirmed, true, false,
                                user, book, librarianConfirmedBy, librarianReturnedTo));
                }
                else
                {
                    reservations.Add(new ReservationDao(dbReservation.id, dbReservation.date_reserved_from,
                                dbReservation.date_reserved_to, dbReservation.code,
                                false, false,
                                user, book, librarianConfirmedBy, librarianReturnedTo));
                }
            }
            return reservations;
        }

        public ReservationDao GetById(int id)
        {
            Reservation dbReservation = this.entities.Reservations.FirstOrDefault(r => r.id == id);

            if (dbReservation == null)
                return null;

            string user = this.entities.Users.FirstOrDefault(u => u.id == dbReservation.user_fk).membership_id;
            int book = this.entities.Books.FirstOrDefault(b => b.id == dbReservation.book_fk).isbn;
            string librarianConfirmedBy = this.entities.Users.FirstOrDefault(u => u.id == dbReservation.confirmed_by).membership_id;
            string librarianReturnedTo = this.entities.Users.FirstOrDefault(u => u.id == dbReservation.returned_to).membership_id;

           if (dbReservation.date_confirmed != null && dbReservation.date_returned != null)
           {
               return new ReservationDao(dbReservation.id, dbReservation.date_reserved_from,
                           dbReservation.date_reserved_to, dbReservation.code,
                           (DateTime)dbReservation.date_confirmed, true, (DateTime)dbReservation.date_returned, true,
                           user, book, librarianConfirmedBy, librarianReturnedTo);
           }
           else if (dbReservation.date_confirmed != null)
           {
                return new ReservationDao(dbReservation.id, dbReservation.date_reserved_from,
                           dbReservation.date_reserved_to, dbReservation.code,
                           (DateTime)dbReservation.date_confirmed, true, false,
                           user, book, librarianConfirmedBy, librarianReturnedTo);
           }
           else
           {
                return new ReservationDao(dbReservation.id, dbReservation.date_reserved_from,
                           dbReservation.date_reserved_to, dbReservation.code,
                           false, false,
                           user, book, librarianConfirmedBy, librarianReturnedTo);
           }
           
        }

        public IEnumerable<ReservationDao> SearchReservations(string membershipId, string email, string code,
            DateTime dateReservedFrom, DateTime dateReservedTo, bool isConfirmed)
        {

            if (dateReservedFrom.Equals(DateTime.MinValue))
            {
                dateReservedFrom = new DateTime(1900, 1, 1);
            }

            if (dateReservedTo.Equals(DateTime.MinValue))
            {
                dateReservedTo = new DateTime(1900, 1, 1);
            }


            ObjectResult<sp_search_reservations_Result>
                result = entities.sp_search_reservations(membershipId, email, code,
                    dateReservedFrom, dateReservedTo, isConfirmed);

            List<ReservationDao> reservations = new List<ReservationDao>();

            foreach (sp_search_reservations_Result dbReservation in result)
            {
                

                if (dbReservation.date_confirmed != null && dbReservation.date_returned != null)
                {
                    reservations.Add(new ReservationDao(dbReservation.id, dbReservation.date_reserved_from, dbReservation.date_reserved_to, 
                                                        dbReservation.code, (DateTime)dbReservation.date_confirmed, true, (DateTime)dbReservation.date_returned, true, 
                                                        dbReservation.membership_id, dbReservation.isbn, dbReservation.confirmed_by_membership_id, dbReservation.returned_to_user_membership_id));
                }else if (dbReservation.date_confirmed != null)
                {
                    reservations.Add(new ReservationDao(dbReservation.id, dbReservation.date_reserved_from, dbReservation.date_reserved_to, 
                                                        dbReservation.code, (DateTime)dbReservation.date_confirmed, true, false, dbReservation.membership_id, 
                                                        dbReservation.isbn, dbReservation.confirmed_by_membership_id, dbReservation.returned_to_user_membership_id));
                }
                else
                {
                    reservations.Add(new ReservationDao(dbReservation.id, dbReservation.date_reserved_from, 
                                            dbReservation.date_reserved_to, dbReservation.code, false, false, dbReservation.membership_id, 
                                            dbReservation.isbn, dbReservation.confirmed_by_membership_id, dbReservation.returned_to_user_membership_id));
                }
            }

            return reservations;
        }

        public string ConfirmReservation(DateTime dateConfirmed, string librarianConfirmedBy, string code)
        {
            ObjectResult<sp_confirm_reservation_Result>
                result = entities.sp_confirm_reservation(dateConfirmed, librarianConfirmedBy, code);

            sp_confirm_reservation_Result messageResult = result.First();

            return messageResult.type + " " + messageResult.message;
        }

        public string ReturnReservation(DateTime dateReturned, string librarianReturnedTo, string code)
        {
            ObjectResult<sp_return_reservation_Result>
                result = entities.sp_return_reservation(dateReturned, librarianReturnedTo, code);

            sp_return_reservation_Result messageResult = result.First();

            return messageResult.type + " " + messageResult.message;
        }

        public string AddReservation(DateTime dateReservedFrom, DateTime dateReservedTo, string membershipId, int isbn)
        {
            ObjectResult<sp_reservation_save_Result>
                result = entities.sp_reservation_save(dateReservedFrom, dateReservedTo, membershipId, isbn);

            sp_reservation_save_Result messageResult = result.First();

            return messageResult.type + " " + messageResult.message;
        }

    }
}
