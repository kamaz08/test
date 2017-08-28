using AngularWebApp.DBContext;
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
        public HttpResponseMessage Get2([FromUri] Parametry parameters, string hehe)
        {
            //var hehe = new JavaScriptSerializer().Deserialize<List<Parametry>>(parameters);
            return ToJson(UserDB.TblUser.FirstOrDefault());
        }

        [HttpGet]
        [AllowAnonymous]
        public HttpResponseMessage Get()
        {
            return ToJson(UserDB.TblUser.AsEnumerable());
        }
        [AllowAnonymous]
        public HttpResponseMessage Post([FromBody]TblUser value)
        {
            UserDB.TblUser.Add(value);
            return ToJson(UserDB.SaveChanges());
        }

        public HttpResponseMessage Put(int id, [FromBody]TblUser value)
        {
            UserDB.Entry(value).State = EntityState.Modified;
            return ToJson(UserDB.SaveChanges());
        }
        [AllowAnonymous]
        public HttpResponseMessage Delete(int id)
        {
            UserDB.TblUser.Remove(UserDB.TblUser.FirstOrDefault(x => x.Id == id));
            return ToJson(UserDB.SaveChanges());
        }

        public class Parametry
        {
            public int? a { get; set; }
            public int? b { get; set; }
            public int? c { get; set; }
        }
    }
}
