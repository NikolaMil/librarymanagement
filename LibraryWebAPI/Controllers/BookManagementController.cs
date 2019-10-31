using DatabaseLayer.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Web.Http;
using DatabaseLayer.DAO;
using LibraryApi.Models;
using System.Web.Http.Cors;
using System.Web.Http.Validation;

namespace LibraryApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class BookManagementController : ApiController
    {
        private BookManagement bookManagement;

        public BookManagementController()
        {
            bookManagement = new BookManagement();
        }

        [HttpGet]
        [Route("api/books")]
        public IHttpActionResult GetAll()
        {
            return Ok(bookManagement.GetAll());
        }

        [HttpPost]
        [Route("api/search-books")]
        public IHttpActionResult SearchBooks(SearchBook searchBook)
        {
            return Ok(bookManagement.SearchBooks(searchBook.Title, searchBook.Author,
                                                 searchBook.PublishYear, searchBook.Category,
                                                 searchBook.Language, searchBook.Role));
        }

        [HttpGet]
        [Route("api/books/{id}")]
        public IHttpActionResult GetById(int id)
        {
            BookDao bookDao = bookManagement.GetById(id);

            if (bookDao == null)
            {
                return NotFound();
            }
            return Ok(bookDao);
        }

        [HttpPost]
        [Route("api/books")]
        public IHttpActionResult AddBook(Book book)
        {
            //Check if there is any empty field
            if (book.ISBN == 0 || book.Title == "" || book.Author == "" ||
                book.PublishYear == "" || book.Publisher == "" || book.Image == "" ||
                book.Summary == "" || book.Category == "" || book.Language == "")
            {
                return BadRequest("Insufficient input");
            }

            //Validate ISBN must be exact 6 digits
            var hasDigits = Math.Floor(Math.Log10(book.ISBN) + 1);
            if (hasDigits < 6 || hasDigits > 6)
            {
                return BadRequest("ISBN should be exact 6 digits");
            }

            //Check if ISBN is greater than 0
            if (book.ISBN <= 0)
            {
                return BadRequest("ISBN should be greater than 0");
            }

            //Check if number of available books is not smaller or equal to 0
            if (book.NumberAvailable <= 0)
            {
                return BadRequest("Number of available books must be greater than 0");
            }

            //Calling the AddBook method to execute stored procedure
            string message = bookManagement.AddBook(book.ISBN, book.Title, book.Author, book.PublishYear,
                                                    book.NumberAvailable, book.Publisher, book.Image,
                                                    book.Summary, book.Category, book.Language);

            if (message.Contains("Error"))
                return BadRequest(message);

            return Ok(message);

        }

        [HttpPut]
        [Route("api/books/{id}")]
        public IHttpActionResult UpdateById(int id, Book book)
        {
            BookDao bookExists = bookManagement.GetById(id);

            if (bookExists == null)
            {
                return NotFound();
            }

            if (book.ISBN == 0 || book.Title == "" || book.Author == "" ||
                book.PublishYear == "" || book.Publisher == "" || book.Image == "" ||
                book.Summary == "" || book.Category == "" || book.Language == "")
            {
                return BadRequest("Insufficient input");
            }

            //Check if ISBN is greater than 0
            if (book.ISBN <= 0)
            {
                return BadRequest("ISBN should be greater than 0");
            }

            //Check if number of available books is not smaller or equal to 0
            if (book.NumberAvailable <= 0)
            {
                return BadRequest("Number of available books must be greater than 0");
            }

            //Calling the AddBook method to execute stored procedure
            string message = bookManagement.UpdateById(id, book.ISBN, book.Title, book.Author,
                book.PublishYear, book.NumberAvailable, book.Publisher,
                book.Image, book.Summary, book.Category, book.Language);

            if (message.Contains("Error"))
                return BadRequest(message);

            return Ok(message);
        }
    }
}
