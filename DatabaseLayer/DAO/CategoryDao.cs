using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseLayer.DAO
{
    public class CategoryDao
    {
        public int Id { get; set; }

        public string Category { get; set; }

        public CategoryDao(int Id, string Category)
        {
            this.Id = Id;
            this.Category = Category;
        }
    }
}
