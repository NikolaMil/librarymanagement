using DatabaseLayer.DAL;
using DatabaseLayer.DAO;
using LibraryApi.Models;
using LibraryApi.Models.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace LibraryApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class UserAuthenticationController : ApiController
    {
        private UserAuthentication userAuthentication;

        public UserAuthenticationController()
        {
            userAuthentication = new UserAuthentication();
        }

        [HttpPost]
        [Route("api/login")]
        public IHttpActionResult UserLogin(UserEmailPassword userEmailPassword)
        {
            if(userEmailPassword == null || 
                userEmailPassword.Email == null || 
                userEmailPassword.Password == null ||
                userEmailPassword.Email == "" || 
                userEmailPassword.Password == "")
            {
                return BadRequest("Insufficient input");
            }

            UserDao userDao = userAuthentication.Login(userEmailPassword.Email, userEmailPassword.Password);
            
            if(userDao == null)
            {
                return BadRequest("Incorrect credentials");
            }

            UserDto user = new UserDto(userDao.Id, userDao.Email, userDao.FirstName,
                                 userDao.LastName, userDao.DateOfBirth, userDao.Gender,
                                 userDao.PhoneNumber, userDao.Address, userDao.PostCode,
                                 userDao.City, userDao.Country, userDao.MembershipId,
                                 userDao.Subscription, userDao.InterestedIn, userDao.RoleName);
            return Ok(user);
        }  
    }
}
