using DatabaseLayer.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Web.Http;
using DatabaseLayer.DAO;
using LibraryApi.Models;
using System.Web.Http.Cors;

namespace LibraryApi.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class UserRegisterController : ApiController
    {
        private UserRegister userRegister;

        public UserRegisterController()
        {
            userRegister = new UserRegister();
        }

        [HttpPost]
        [Route("api/signup")]
        public IHttpActionResult UserSignUp(User user)
        {

            //Check if there is any null or empty field
            if (user.Email == null || user.Password == null || user.FirstName == null || user.LastName == null ||
                user.Gender == null || user.PhoneNumber == null || user.Address == null ||
                user.PostCode == 0 || user.City == null || user.Country == null || user.Email == "" || user.Password == "" || user.FirstName == "" || user.LastName == "" ||
                user.DateOfBirth == DateTime.MinValue || user.Gender == "" || user.PhoneNumber == "" || user.Address == "" ||
                user.PostCode == 0 || user.City == null || user.Country == null)
            {
                return BadRequest("Insufficient input");
            }

            var IsValidEmail = new Regex(@"^[a-zA-Z][\w\.-]{2,28}[a-zA-Z0-9]@[a-zA-Z0-9][\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z]$");
            //Validate if email format is okay
            if (!IsValidEmail.IsMatch(user.Email))
            {
                return BadRequest("Invalid Credentials");
            }

            //Validate if password format is okay
            var hasNumber = new Regex(@"[0-9]+");
            var hasUpperCase = new Regex(@"[A-Z]+");
            var hasMinimum8Chars = new Regex(@".{8,}");
            var hasSpecialCharacter = new Regex(@"[~!@#$%^&amp;*()+}{&quot;:;'?/&gt;.&lt;,]");

            if (!hasNumber.IsMatch(user.Password) || !hasUpperCase.IsMatch(user.Password) || !hasMinimum8Chars.IsMatch(user.Password) || !hasSpecialCharacter.IsMatch(user.Password))
            {
                return BadRequest("Invalid Credentials");
            }
            
            //Validate phone number should be greater than 0 and in the given format
            Regex isValidPhoneNumber = new Regex(@"\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*");
            var hasMinimumDigits = new Regex(@".{10,15}");

            if (!isValidPhoneNumber.IsMatch(user.PhoneNumber) || !hasMinimumDigits.IsMatch(user.PhoneNumber))
            {
                return BadRequest("Invalid Phone Number");
            }

            //Validate post code it should be greater than 0
            if (user.PostCode <= 0)
            {
                return BadRequest("Post Code must be greater than 0");
            }

            //Validate DateOfBirth should not be greater than today
            int value = DateTime.Compare(user.DateOfBirth, DateTime.Now); // Return statement is 0 if dates are equal, less than 0 if DateOfBirth is earlier than today and greater than 0 if DateOfBirth is later than today
            if (value > 0)
            {
                return BadRequest("Date of birth should not be greater than today");
            }

            //Calling the SignUp method to execute stored procedure
            string message = userRegister.SignUp(user.Email, user.Password, user.FirstName, user.LastName,
                            user.DateOfBirth, user.Gender, user.PhoneNumber, user.Address, user.PostCode, user.City,
                            user.Country, user.Subscription, user.InterestedIn, user.RoleName);

            return Ok(message);
        }
    }
}
