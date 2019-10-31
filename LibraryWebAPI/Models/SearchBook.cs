using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LibraryApi.Models
{
    public class SearchBook
    {
        public string Title { get; set; }

        public string Author { get; set; }

        public string PublishYear { get; set; }

        public string Category { get; set; }

        public string Language { get; set; }

        public string Role { get; set; }

        public SearchBook()
        {
        }

        public SearchBook(string title,
            string author, string publishYear,
            string category, string language, string role)
        {
            this.Title = title;
            this.Author = author;
            this.PublishYear = publishYear;
            this.Category = category;
            this.Language = language;
            this.Role = role;
        }
    }
}