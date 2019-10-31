using DatabaseLayer.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseLayer.DAL
{
    public class LanguageManagement
    {
        private LibraryManagementEntities entities;

        public LanguageManagement()
        {
            this.entities = new LibraryManagementEntities();
        }

        public IEnumerable<LanguageDao> GetAll()
        {
            IEnumerable<Language> dbLanguages = this.entities.Languages.ToList();
            List<LanguageDao> languages = new List<LanguageDao>();

            foreach (Language dbLanguage in dbLanguages)
            {
                languages.Add(new LanguageDao(dbLanguage.id, dbLanguage.language1));
            }
            return languages;
        }

    }
}
