using System.Data.Entity;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;

namespace AngularWebApp.Models
{
    // You can add profile data for the user by adding more properties to your ApplicationUser class, please visit http://go.microsoft.com/fwlink/?LinkID=317594 to learn more.
    public class AppUser : IdentityUser
    {
        public AppUser(string userName) : base(userName) { }
        //public async Task<ClaimsIdentity> GenerateUserIdentityAsync(UserManager<AppUser> manager)
        //{
        //    // Note the authenticationType must match the one defined in CookieAuthenticationOptions.AuthenticationType
        //    // var userIdentity = await manager.CreateIdentityAsync(this, DefaultAuthenticationTypes.ApplicationCookie);
        //    // Add custom user claims here
        //    return userIdentity;
        //}
    }

    public class AppRole : IdentityRole
    {
        public AppRole() : base() { }
        public AppRole(string name) : base(name) { }
    }

    public class AppDbContext : IdentityDbContext<AppUser>
    {
        public AppDbContext()
            : base("DefaultConnection", throwIfV1Schema: false)
        {
        }

        public static AppDbContext Create()
        {
            return new AppDbContext();
        }
    }

    public class AppUserManager : UserManager<AppUser>
    {
        public AppUserManager(IUserStore<AppUser> store)
            : base(store)
        {
        }

        // this method is called by Owin therefore best place to configure your User Manager
        public static AppUserManager Create(
            IdentityFactoryOptions<AppUserManager> options, IOwinContext context)
        {
         var manager = new AppUserManager(
                new UserStore<AppUser>(context.Get<AppDbContext>()));

            manager.Create(new AppUser("user"), "user");
            // optionally configure your manager
            // ...

            return manager;
        }


    }


}