using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LibraryApi.Models
{
    public class Book
    {
        public int Id { get; set; }

        public int ISBN { get; set; }

        public string Title { get; set; }

        public string Author { get; set; }

        public string PublishYear { get; set; }

        public int NumberAvailable { get; set; }

        public string Publisher { get; set; }

        public string Image { get; set; }

        public string Summary { get; set; }

        public string Category { get; set; }

        public string Language { get; set; }

        public Book()
        {
        }

        public Book(int id, int isbn, string title,
            string author, string publishYear, int numberAvailable,
            string publisher, string image, string summary, string category, string language)
        {
            this.Id = id;
            this.ISBN = isbn;
            this.Title = title;
            this.Author = author;
            this.PublishYear = publishYear;
            this.NumberAvailable = numberAvailable;
            this.Publisher = publisher;
            this.Image = image;
            this.Summary = summary;
            this.Category = category;
            this.Language = language;
        }

    }
}
