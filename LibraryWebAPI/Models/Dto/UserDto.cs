using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace LibraryApi.Models.Dto
{
    public class UserDto
    {
        public int Id { get; set; }
        public string Email { get; set; }

        // this should not be returned on API call
        public string Password { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public DateTime DateOfBirth { get; set; }

        public string Gender { get; set; }

        public string PhoneNumber { get; set; }

        public string Address { get; set; }

        public int PostCode { get; set; }

        public string City { get; set; }

        public string Country { get; set; }

        public string MembershipId { get; set; }

        public bool Subscription { get; set; }

        public string InterestedIn { get; set; }
        public string RoleName { get; set; }

        public UserDto()
        {
        }

        public UserDto(int id, string email, string firstName,
                    string lastName, DateTime dateOfBirth, string gender,
                    string phoneNumber, string address, int postCode,
                    string city, string country, string membershipId,
                    bool subscription, string interestedIn, string roleName)
        {
            this.Id = id;
            this.Email = email;
            this.FirstName = firstName;
            this.LastName = lastName;
            this.DateOfBirth = dateOfBirth;
            this.Gender = gender;
            this.PhoneNumber = phoneNumber;
            this.Address = address;
            this.PostCode = postCode;
            this.City = city;
            this.Country = country;
            this.MembershipId = membershipId;
            this.Subscription = subscription;
            this.InterestedIn = interestedIn;
            this.RoleName = roleName;
        }
    }
}