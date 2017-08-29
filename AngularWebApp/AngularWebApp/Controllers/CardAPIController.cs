using AngularWebApp.Models;
using AngularWebApp.Models.Logic;
using Microsoft.AspNet.Identity;
using Microsoft.Owin.Security;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web;
using System.Web.Http.Owin;
using System.Web.Http;
using Microsoft.AspNet.Identity.Owin;

namespace AngularWebApp.Controllers
{
    public class CardAPIController : ApiController
    {
        protected HttpResponseMessage ToJson(dynamic obj)
        {
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(obj), Encoding.UTF8, "application/json");
            return response;
        }
        // GET: api/Card
        [HttpGet]
        public HttpResponseMessage GetJokes()
        {
            return ToJson(Joke.GetJokes());
        }

        // GET: api/Card/5
        public string Get(int id)
        {
            return "value";
        }

        [HttpGet]
        public HttpResponseMessage Login()
        {
            if (ModelState.IsValid)
            {
                
                var userManager = HttpContext.Current.GetOwinContext().GetUserManager<AppUserManager>();
                var authManager = HttpContext.Current.GetOwinContext().Authentication;
                AppUser user = userManager.FindByName("user");
                if (user != null)
                {
                    var ident = userManager.CreateIdentity(user,
                        DefaultAuthenticationTypes.ApplicationCookie);
                    authManager.SignIn(
                        new AuthenticationProperties { IsPersistent = false }, ident);
                    //return Redirect(login.ReturnUrl ?? Url.Action("Index", "Home"));
                }
            }
            ModelState.AddModelError("", "Invalid username or password");
            return ToJson("hehhee");
        }

        // PUT: api/Card/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Card/5
        public void Delete(int id)
        {
        }

    }
}
