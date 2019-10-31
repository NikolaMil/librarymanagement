using DatabaseLayer.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseLayer.DAL
{
    public class CategoryManagement
    {
        private LibraryManagementEntities entities;

        public CategoryManagement()
        {
            this.entities = new LibraryManagementEntities();
        }

        public IEnumerable<CategoryDao> GetAll()
        {
            IEnumerable<Category> dbCategories = this.entities.Categories.ToList();
            List<CategoryDao> categories = new List<CategoryDao>();

            foreach (Category dbCategory in dbCategories)
            {
                categories.Add(new CategoryDao(dbCategory.id, dbCategory.category1));
            }
            return categories;
        }

    }
}
