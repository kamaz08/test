using AngularWebApp.DBContext;
using Microsoft.AspNet.Identity.Owin;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;
using System.Web.Script.Serialization;

namespace AngularWebApp.Controllers
{
    [Authorize]
    public class UserAPIController : BaseAPIController
    {
        protected HttpResponseMessage ErrorJson(dynamic obj)
        {
            var response = Request.CreateResponse(HttpStatusCode.Unauthorized);
            response.Content = new StringContent(JsonConvert.SerializeObject(obj), Encoding.UTF8, "application/json");
            return response;
        }
        [HttpGet]
        public HttpResponseMessage GetUsers([FromUri] Parametry parameters)
        {
            return ToJson(UserDB.TblUser.AsEnumerable());
        }
        [HttpPost]
        [AllowAnonymous]
        public HttpResponseMessage AddUser([FromBody]TblUser value)
        {
            UserDB.TblUser.Add(value);
            return ToJson(UserDB.SaveChanges());
        }

        [HttpPut]
        public HttpResponseMessage EditUser(int id, [FromBody]TblUser value)
        {
            UserDB.Entry(value).State = EntityState.Modified;
            return ToJson(UserDB.SaveChanges());
        }

        [HttpDelete]
        [AllowAnonymous]
        public HttpResponseMessage DeleteUser(int id)
        {
            UserDB.TblUser.Remove(UserDB.TblUser.FirstOrDefault(x => x.Id == id));
            return ToJson(UserDB.SaveChanges());
        }

        private void tempLogin()
        {


        }

        public class Parametry
        {
            public int? a { get; set; }
            public int? b { get; set; }
            public int? c { get; set; }
        }
    }
}
