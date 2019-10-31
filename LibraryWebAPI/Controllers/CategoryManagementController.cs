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
    public class CategoryManagementController : ApiController
    {
        private CategoryManagement categoryManagement;

        public CategoryManagementController()
        {
            this.categoryManagement = new CategoryManagement();
        }

        [HttpGet]
        [Route("api/categories")]
        public IHttpActionResult GetAll()
        {
            return Ok(categoryManagement.GetAll());
        }
    }
}
