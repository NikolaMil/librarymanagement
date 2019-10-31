using DatabaseLayer.DAO;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseLayer.DAL
{
    public class UserRegister
    {
        private LibraryManagementEntities entities;

        public UserRegister()
        {
            this.entities = new LibraryManagementEntities();
        }

        public string SignUp(string email, string password, string first_name, string last_name,
            DateTime date_of_birth, string gender, string phone_number, string address, int post_code, string city,
            string country, bool subscription, string interested_in, string roleName)
        {
            ObjectResult<sp_user_save_Result> 
                result = entities.sp_user_save( email,
                                                password,
                                                first_name,
                                                last_name,
                                                date_of_birth,
                                                gender,
                                                phone_number,
                                                address,
                                                post_code,
                                                city,
                                                country,
                                                null,
                                                subscription,
                                                interested_in,
                                                roleName);

            sp_user_save_Result messageResult = result.First();

            return messageResult.type + ' ' + messageResult.message;
        }
    }
}