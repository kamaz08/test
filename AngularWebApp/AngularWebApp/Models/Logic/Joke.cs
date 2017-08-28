using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Web;
using System.Web.Script.Serialization;
using System.Xml.Linq;

namespace AngularWebApp.Models.Logic
{
    public class Joke
    {
        private const String URL = @"http://api.icndb.com/jokes/random/2";
        private const String CatURL = @"http://thecatapi.com/api/images/get?format=xml&results_per_page=2";
        public static IEnumerable<CardDTO> GetJokes()
        {
            List<String> cats;
            using (var webClient = new System.Net.WebClient())
            {
                String json = webClient.DownloadString(CatURL);
                cats = XDocument.Parse(json).Descendants("url").Select(x => x.Value).ToList();
            }


            List<JokeRest> example1Model;
            using (var webClient = new System.Net.WebClient())
            {
                String json = webClient.DownloadString(URL);
                example1Model = new JavaScriptSerializer().Deserialize<ResultRest>(json).value;
            }
            return example1Model.Select((x,y) => new CardDTO(String.Empty, x.categories.Count() == 0 ? "nothing :(" : String.Join(", ", x.categories), x.id.ToString(), cats[y], x.joke, String.Empty)).AsEnumerable();
        }

        #region RestData
        private class ResultRest
        {
            public String result { get; set; }
            public List<JokeRest> value { get; set; }
        }
        private class JokeRest
        {
            public int id { get; set; }
            public String joke { get; set; }
            public String[] categories { get; set; }
        }
        #endregion
    }
}