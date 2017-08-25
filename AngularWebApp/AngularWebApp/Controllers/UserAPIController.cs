using AngularWebApp.DBContext;
using System.Data.Entity;
using System.Linq;
using System.Net.Http;
using System.Web.Http;

namespace AngularWebApp.Controllers
{
    [Authorize]
    public class UserAPIController : BaseAPIController
    {
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
        public HttpResponseMessage Delete(int id)
        {
            UserDB.TblUser.Remove(UserDB.TblUser.FirstOrDefault(x => x.Id == id));
            return ToJson(UserDB.SaveChanges());
        }
    }
}
