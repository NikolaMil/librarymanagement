using DatabaseLayer.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http.Cors;
using System.Web.Http;

namespace LibraryApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class LanguageManagementController : ApiController
    {
        private LanguageManagement languageManagement;

        public LanguageManagementController()
        {
            this.languageManagement = new LanguageManagement();
        }

        [HttpGet]
        [Route("api/languages")]
        public IHttpActionResult GetAll()
        {
            return Ok(languageManagement.GetAll());
        }
    }
}
