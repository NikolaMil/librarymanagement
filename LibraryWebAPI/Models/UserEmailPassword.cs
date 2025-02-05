﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace LibraryApi.Models
{
    public class UserEmailPassword
    {
        [EmailAddress(ErrorMessage = "Not a valid email")]
        public string Email { get; set; }

        public string Password { get; set; }
    }
}