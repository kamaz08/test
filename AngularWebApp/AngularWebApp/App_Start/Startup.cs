using System;
using System.Threading.Tasks;
using Microsoft.Owin;
using Owin;
using Microsoft.Owin.Security.OAuth;
using System.Web.Http;
using AngularWebApp.Authentication;
using AngularWebApp.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin.Security.Cookies;

namespace AngularWebApp.App_Start
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }

        public void ConfigureAuth(IAppBuilder app)
        {
            app.CreatePerOwinContext(() => new AppDbContext());
            app.CreatePerOwinContext<AppUserManager>(AppUserManager.Create);
            app.CreatePerOwinContext<RoleManager<AppRole>>((options, context) =>
                new RoleManager<AppRole>(
                    new RoleStore<AppRole>(context.Get<AppDbContext>())));

            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationType = DefaultAuthenticationTypes.ApplicationCookie,
                LoginPath = new PathString("/Home/Login"),
            });
        }
    }
}