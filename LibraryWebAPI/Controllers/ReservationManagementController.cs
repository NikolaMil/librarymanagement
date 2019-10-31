using DatabaseLayer.DAL;
using DatabaseLayer.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using LibraryApi.Models;

namespace LibraryApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class ReservationManagementController : ApiController
    {
        private ReservationManagement reservationManagement;

        public ReservationManagementController()
        {
            this.reservationManagement = new ReservationManagement();
        }

        [HttpGet]
        [Route("api/reservations")]
        public IHttpActionResult GetAll()
        {
            return Ok(reservationManagement.GetAll());
        }

        [HttpGet]
        [Route("api/reservations/{id}")]
        public IHttpActionResult GetById(int id)
        {
            ReservationDao reservationDao = reservationManagement.GetById(id);

            if (reservationDao == null)
            {
                return NotFound();
            }
            return Ok(reservationDao);
        }

        [HttpPost]
        [Route("api/search-reservations")]
        public IHttpActionResult SearchReservations(SearchReservation searchReservation)
        {

            return Ok(reservationManagement.SearchReservations(searchReservation.MembershipId, searchReservation.Email,
                                                        searchReservation.Code, searchReservation.DateReservedFrom,
                                                        searchReservation.DateReservedTo, searchReservation.IsConfirmed));
        }

        [HttpPut]
        [Route("api/confirm-reservation/{id}")]
        public IHttpActionResult ConfirmReservation(int id, Reservation reservation)
        {
            //ReservationDao reservationExists = reservationManagement.GetById(id);
            //
            //if (reservationExists == null)
            //{
            //    return NotFound();
            //}

            if (reservation.Code == " " || reservation.LibrarianConfirmedBy == " " || reservation.DateConfirmed.Equals(DateTime.MinValue))
            {
                return BadRequest("Insufficient input");
            }

            string message = reservationManagement.ConfirmReservation(reservation.DateConfirmed,
                reservation.LibrarianConfirmedBy, reservation.Code);

            return Ok(message);
        }

        [HttpPut]
        [Route("api/return-reservation/{id}")]
        public IHttpActionResult ReturnReservation(int id, Reservation reservation)
        {
            //ReservationDao reservationExists = reservationManagement.GetById(id);
            //
            //if (reservationExists == null)
            //{
            //    return NotFound();
            //}

            if (reservation.Code == " " || reservation.LibrarianReturnedTo == " " || reservation.DateReturned.Equals(DateTime.MinValue))
            {
                return BadRequest("Insufficient input");
            }

            string message = reservationManagement.ReturnReservation(reservation.DateReturned,
                reservation.LibrarianReturnedTo, reservation.Code);


            return Ok(message);
        }

        [HttpPost]
        [Route("api/add-reservation")]
        public IHttpActionResult AddReservation(Reservation reservation)
        {
            if (reservation.DateReservedFrom.Equals(DateTime.MinValue) || reservation.DateReservedTo.Equals(DateTime.MinValue) || reservation.UserMembershipId == " " || reservation.BookISBN == 0)
            {
                return BadRequest("Insufficient input");
            }

            string message = reservationManagement.AddReservation(reservation.DateReservedFrom,
                reservation.DateReservedTo, reservation.UserMembershipId, reservation.BookISBN);

            return Ok(message);
        }
    }
}
