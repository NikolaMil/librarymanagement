using DatabaseLayer.DAO;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseLayer.DAL
{
    public class BookManagement
    {
        private LibraryManagementEntities entities;

        public BookManagement()
        {
            this.entities = new LibraryManagementEntities();
        }

        public string AddBook(int isbn, string title,
            string author, string publishYear, int numberAvailable,
            string publisher, string image, string summary,
            string category, string language)
        {

            ObjectResult<sp_book_save_Result>
                result = entities.sp_book_save(isbn,
                                                title,
                                                author,
                                                publishYear,
                                                numberAvailable,
                                                publisher,
                                                image,
                                                summary,
                                                category,
                                                language);

            sp_book_save_Result messageResult = result.First();
            return messageResult.type + " " + messageResult.message;
        }


        public IEnumerable<BookDao> GetAll()
        {
            IEnumerable<Book> dbBooks = this.entities.Books.ToList();
            List<BookDao> books = new List<BookDao>();

            foreach (Book dbBook in dbBooks)
            {
                string category = this.entities.Categories.FirstOrDefault(c => c.id == dbBook.category_fk).category1;
                string language = this.entities.Languages.FirstOrDefault(l => l.id == dbBook.language_fk).language1;

                books.Add(new BookDao(dbBook.id, dbBook.isbn, dbBook.title,
                                      dbBook.author, dbBook.publish_year,
                                      dbBook.number_available, dbBook.publisher,
                                      dbBook.image, dbBook.summary, category, language));
            }
            return books;
        }

        public BookDao GetById(int id)
        {
            Book dbBook = this.entities.Books.FirstOrDefault(b => b.id == id);

            if (dbBook == null)
                return null;

            string category = this.entities.Categories.FirstOrDefault(c => c.id == dbBook.category_fk).category1;
            string language = this.entities.Languages.FirstOrDefault(l => l.id == dbBook.language_fk).language1;

            return new BookDao(dbBook.isbn, dbBook.title,
                                      dbBook.author, dbBook.publish_year,
                                      dbBook.number_available, dbBook.publisher,
                                      dbBook.image, dbBook.summary, category, language);
        }

        public IEnumerable<BookDao> SearchBooks(string title, string author, string publishYear,
                                                string categoryName, string languageName, string roleName)
        {
            ObjectResult<sp_search_books_Result>
                result = entities.sp_search_books(title, author, publishYear,
                                                  categoryName, languageName, roleName);

            List<BookDao> books = new List<BookDao>();

            foreach (sp_search_books_Result dbBook in result)
            {
                books.Add(new BookDao(dbBook.id, dbBook.isbn, dbBook.title,
                                      dbBook.author, dbBook.publish_year,
                                      dbBook.number_available, dbBook.publisher,
                                      dbBook.image, dbBook.summary, dbBook.category, dbBook.language));
            }
            return books;
        }

        public string UpdateById(int id, int isbn, string title, string author, string publishYear, 
                                        int numberAvailable, string publisher, string image, 
                                        string summary, string category, string language)
        {
            ObjectResult<sp_book_edit_Result>
                result = entities.sp_book_edit(isbn,
                                             title,
                                             author,
                                             publishYear,
                                             numberAvailable,
                                             publisher,
                                             image,
                                             summary,
                                             category,
                                             language);

            sp_book_edit_Result messageResult = result.First();

            return messageResult.type + " " + messageResult.message; 
        }
    }
}
