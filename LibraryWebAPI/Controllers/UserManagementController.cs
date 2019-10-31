using DatabaseLayer.DAL;
using DatabaseLayer.DAO;
using LibraryApi.Models;
using LibraryApi.Models.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace LibraryApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class UserManagementController : ApiController
    {
        private UserManagement userManagement;

        public UserManagementController()
        {
            userManagement = new UserManagement();
        }

        [HttpGet]
        [Route("api/users")]
        public IHttpActionResult GetAll()
        {
            return Ok(userManagement.GetAll());
        }

        [HttpGet]
        [Route("api/users/{id}")]
        public IHttpActionResult GetById(int id)
        {
            UserDao userDao = userManagement.GetById(id);
            
            if(userDao == null)
            {
                return NotFound();
            }
      
            return Ok(userDao);
        }

        [HttpPut]
        [Route("api/users/{id}")]
        public IHttpActionResult UpdateById(int id, UserDto userDto)
        {
            UserDao userExists = userManagement.GetById(id);
            
            if (userExists == null)
            {
                return NotFound();
            }

            // validation

            if (userDto.FirstName == null || userDto.FirstName == "" ||
               userDto.LastName == null || userDto.LastName == "" ||
               userDto.DateOfBirth == null ||
               userDto.Gender == null || userDto.Gender == "" ||
               userDto.PhoneNumber == null || userDto.PhoneNumber == "" ||
               userDto.Address == null || userDto.Address == "" ||
               userDto.City == null || userDto.City == "" ||
               userDto.Country == null || userDto.Country == "")
            {
                return BadRequest("Insufficient input");
            }

            //Validate phone number should be greater than 0 and in the given format
            Regex isValidPhoneNumber = new Regex(@"\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*");
            var hasMinimumDigits = new Regex(@".{10,15}");

            if (!isValidPhoneNumber.IsMatch(userDto.PhoneNumber) || !hasMinimumDigits.IsMatch(userDto.PhoneNumber))
            {
                return BadRequest("Invalid Phone Number");
            }

            //Validate post code it should be greater than 0
            if (userDto.PostCode <= 0)
            {
                return BadRequest("Post Code must be greater than 0");
            }

            //Validate DateOfBirth should not be greater than today
            int value = DateTime.Compare(userDto.DateOfBirth, DateTime.Now); // Return statement is 0 if dates are equal, less than 0 if DateOfBirth is earlier than today and greater than 0 if DateOfBirth is later than today
            if (value > 0)
            {
                return BadRequest("Date of birth should not be greater than today");
            }

            UserDao userDao = userManagement.UpdateById(id, userDto.Email, userDto.Password, 
                                  userDto.FirstName, userDto.LastName, userDto.DateOfBirth,
                                  userDto.Gender, userDto.PhoneNumber, userDto.Address,
                                  userDto.PostCode, userDto.City, userDto.Country,
                                  userDto.MembershipId, userDto.Subscription,
                                  userDto.InterestedIn, userDto.RoleName);

            if (userDao == null)
                return Content((HttpStatusCode)304, "Not Modified");
  

            UserDto user = new UserDto(userDao.Id, userDao.Email,
                                          userDao.FirstName, userDao.LastName, userDao.DateOfBirth,
                                          userDao.Gender, userDao.PhoneNumber, userDao.Address,
                                          userDao.PostCode, userDao.City, userDao.Country,
                                          userDao.MembershipId, userDao.Subscription,
                                          userDao.InterestedIn, userDao.RoleName);
            return Ok(user);
        }

    }
}
