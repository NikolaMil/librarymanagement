using DatabaseLayer.DAO;
using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DatabaseLayer.DAL
{
    public class UserManagement
    {
        private LibraryManagementEntities entities;

        public UserManagement()
        {
            this.entities = new LibraryManagementEntities();
        }
        public UserDao UpdateById(int id, string email, string password,
                           string firstName, string lastName,
                           DateTime dateOfBirth, string gender,
                           string phoneNumber, string address,
                           int postCode, string city, string country,
                           string membershipId, bool subscription,
                           string interestedIn, string roleName)
        {


            ObjectResult<sp_user_save_Result> spOutput =
                entities.sp_user_save(email, password, firstName, lastName,
                                      dateOfBirth, gender, phoneNumber, address,
                                      postCode, city, country, membershipId,
                                      subscription, interestedIn, roleName);

            sp_user_save_Result output = spOutput.First();

            if (output.type.Equals("Error"))
                return null;

            return new UserDao(output.id, output.email,
                                output.first_name, output.last_name,
                                output.date_of_birth, output.gender,
                                output.phone_number, output.address,
                                output.post_code, output.city, output.country,
                                output.membership_id, output.subscription,
                                output.interested_in, output.role_fk, roleName);
        }

        public UserDao GetById(int id)
        {
            User dbUser = entities.Users.FirstOrDefault(u => u.id == id);

            if (dbUser == null)
                return null;

            string roleName = entities.Roles.FirstOrDefault(r => r.id == dbUser.role_fk).name;

            return new UserDao(dbUser.id, dbUser.email,
                                         dbUser.first_name, dbUser.last_name,
                                         dbUser.date_of_birth, dbUser.gender,
                                         dbUser.phone_number, dbUser.address,
                                         dbUser.post_code, dbUser.city, dbUser.country,
                                         dbUser.membership_id, dbUser.subscription,
                                         dbUser.interested_in, dbUser.role_fk, roleName);
        }


        public IEnumerable<UserDao> GetAll()
        {
            IEnumerable<User> dbUsers = entities.Users.ToList();
            List<UserDao> users = new List<UserDao>();

            foreach (User dbUser in dbUsers)
            {
                string roleName = entities.Roles.FirstOrDefault(r => r.id == dbUser.role_fk).name;
                users.Add(new UserDao(dbUser.id, dbUser.email,
                                         dbUser.first_name, dbUser.last_name,
                                         dbUser.date_of_birth, dbUser.gender,
                                         dbUser.phone_number, dbUser.address,
                                         dbUser.post_code, dbUser.city, dbUser.country,
                                         dbUser.membership_id, dbUser.subscription,
                                         dbUser.interested_in, dbUser.role_fk, roleName));
            }

            return users;
        }
    }
}
