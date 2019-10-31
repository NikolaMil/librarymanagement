using DatabaseLayer.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace LibraryApi.Controllers
{
    public class HomeController : Controller
    {

        private UserManagement userManagement;
        private UserAuthentication userAuthentication;

        public HomeController()
        {
            userManagement = new UserManagement();
            userAuthentication = new UserAuthentication();
        }
        public ActionResult Index()
        {
            userAuthentication.Login("test@test.com", "testTest*");

            ViewBag.Title = "Home Page";

            return View();
        }
    }
}
