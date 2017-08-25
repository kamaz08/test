using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AngularWebApp.Models
{
    public class CardDTO
    {
        public String headerImageSrc { get; set; }
        public String titleText { get; set; }
        public String subtitleText { get; set; }
        public String image { get; set; }
        public String descriptionText { get; set; }
        public String cardOptionsList { get; set; }

        public CardDTO(String head, String title, String subtitle, String img, String descryption, String cardOptions)
        {
            headerImageSrc = head;
            titleText = title;
            subtitleText = subtitle;
            image = img;
            descriptionText = descryption;
            cardOptionsList = cardOptions;
        }
    }
}