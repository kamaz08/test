using AngularWebApp.Models;
using AngularWebApp.Models.Logic;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Web.Http;

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
        public HttpResponseMessage Get()
        {
            return ToJson(Joke.GetJokes().AsEnumerable());
        }

        // GET: api/Card/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Card
        public void Post([FromBody]string value)
        {
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
