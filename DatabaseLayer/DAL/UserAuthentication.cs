using DatabaseLayer.DAO;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseLayer.DAL
{
    public class UserAuthentication
    {
        private LibraryManagementEntities entities;

        public UserAuthentication()
        {
            this.entities = new LibraryManagementEntities();
        }
        public UserDao Login(string inputEmail, string inputPassword)
        {

            ObjectResult<sp_user_login_Result> spOutput =
                entities.sp_user_login(inputEmail, inputPassword);

            sp_user_login_Result output = spOutput.First();

            if (output.type.Equals("Error"))
                return null;
            
            return new UserDao(output.id,
                              output.email,
                              output.first_name,
                              output.last_name,
                              output.date_of_birth,
                              output.gender,
                              output.phone_number,
                              output.address,
                              output.post_code,
                              output.city,
                              output.country,
                              output.membership_id,
                              output.subscription,
                              output.interested_in,
                              output.role_fk,
                              output.role_name);
        }
    }
}
