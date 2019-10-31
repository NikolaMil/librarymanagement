using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseLayer.DAO
{
    public class LanguageDao
    {
        public int Id { get; set; }

        public string Language { get; set; }

        public LanguageDao(int Id, string Language)
        {
            this.Id = Id;
            this.Language = Language;
        }
    }
}
