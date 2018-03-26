var express = require("express");
var router = express.Router();
//  <img src="{{imgLink}}" data-date="{{date}}" data-summary="{{summary}}" data-info-link="{{infoLink}}"  alt="">
let zodiacInfo = {
  aquarius: {
    imgLink: "/images/zodiac/aquarius.jpg",
    date: "January 20 - February 18",
    summary:
      "Aquarius are often great visionaries and dreamers who do not tend to respect traditional values and knowledge of the past. Famous Aquarius are for example Charles Darwin, Thomas Alva Edison and Galileo Galilei. Each of them did enough to turn science over. Aquarius do not judge you ...",
    infoLink:
      "http://aquarius.bateleur.eu/?_ga=2.91614106.168267949.1522054490-1373140246.1522054489"
  },
  aquarius: {
    imgLink: "/images/zodiac/aquarius.jpg",
    date: "January 20 - February 18",
    summary:
      "Aquarius are often great visionaries and dreamers who do not tend to respect traditional values and knowledge of the past. Famous Aquarius are for example Charles Darwin, Thomas Alva Edison and Galileo Galilei. Each of them did enough to turn science over. Aquarius do not judge you ...",
    infoLink:
      "http://aquarius.bateleur.eu/?_ga=2.91614106.168267949.1522054490-1373140246.1522054489"
  },
  pisces: {
    imgLink: "/images/zodiac/pisces.jpg",
    date: "February 19 - March 20",
    summary:
      'Have your ever seen a fish that would stay long at one place? Probably no, unless it was a dead one. Thus, regular Pisces must be always on the move. If Pisces cannot swim on the high seas, they anchor themselves to some colorful coral reef. Moreover, a Latin proverb says "Standing water becomes putrid" and Pisces ...',
    infoLink:
      "http://pisces.bateleur.eu/?_ga=2.3541680.168267949.1522054490-1373140246.1522054489"
  },
  aries: {
    imgLink: "/images/zodiac/aries.jpg",
    date: "March 21 - April 19",
    summary:
      "Typical Aries are pioneers who motivate others with their exemplary enthusiasm. The nature of Aries is straightforward. (For example, if they want to share a new idea or experience with you, they do not hesitate, pick up the phone and call you right away, evenat midnight.) Aries often throw caution ...",
    infoLink:
      "http://aries.bateleur.eu/?_ga=2.66593582.168267949.1522054490-1373140246.1522054489"
  },
  taurus: {
    imgLink: "/images/zodiac/taurus.jpg",
    date: "April 20 - May 20",
    summary:
      'If Taurus take something in their head, it is very hard to change their decision. If you say "stubborn" to Taurus, they will certainly explain to you, that they are only patient and cautious. Taurus are very tolerant. However, it is a mistake to try to push them somewhere against their will or to attack their honor ...',
    infoLink:
      "http://taurus.bateleur.eu/?_ga=2.28724028.168267949.1522054490-1373140246.1522054489"
  },
  gemini: {
    imgLink: "/images/zodiac/aquarius.jpg",
    date: "May 21 - June 20",
    summary:
      "Instability and variability is the essential characteristic of Gemini, because their element is air and they are under the influence of the planet Mercury (Mercury is also a flying god). In the most typical cases you can perceive a certain nervous energy that surrounds Gemini. The brightest example is Johnny Depp ...",
    infoLink:
      "http://gemini.bateleur.eu/?_ga=2.31449791.168267949.1522054490-1373140246.1522054489"
  },
  cancer: {
    imgLink: "/images/zodiac/cancer.jpg",
    date: "June 21 - July 22",
    summary:
      "Cancers often submit themselves to changes of their various feelings. And their feelings change as often as the lunar phase. Actually Moon is the planet of Cancer and their element is water, which is a symbol of unconsciousness. As people born in Cancer are highly sensitive, others like to share secrets with them ...",
    infoLink:
      "http://cancer.bateleur.eu/?_ga=2.91704346.168267949.1522054490-1373140246.1522054489"
  },
  leo: {
    imgLink: "/images/zodiac/leo.jpg",
    date: "July 23 - August 22",
    summary:
      "Leo is a bright and proud ruler. Leos are smart enough not to waste energy on useless projects. When they know they can easily sweep the floor with a broom, they will not take a toothbrush for this work. Leos nature is to advise and manage others. They have a natural authority and they often do not even hide their own ...",
    infoLink:
      "http://leo.bateleur.eu/?_ga=2.94719132.168267949.1522054490-1373140246.1522054489"
  },
  virgo: {
    imgLink: "/images/zodiac/virgo.jpg",
    date: "August 23 - September 22",
    summary:
      "Virgos are reliable and accurate. At the first glance, they are perfectionists with a calm and balanced view of the world. People born in Virgo are hardworking and attentive. They have analytical skills and they do not miss anything, although they are often too diplomatic to show it to the others. Typical Virgos are well organized and that may ...",
    infoLink:
      "http://virgo.bateleur.eu/?_ga=2.94719132.168267949.1522054490-1373140246.1522054489"
  },
  libra: {
    imgLink: "/images/zodiac/libra.jpg",
    date: "September 23 - October 22",
    summary:
      'The main dream of people born in Libra is harmony! Libras are peaceful angels who would like to settle all disputes in the world. Libras are often dissatisfied because of their own uncertainty and indecision. Libras are happy to take the role of "devil\'s advocates". They want to be principally impartial and ...',
    infoLink:
      "http://libra.bateleur.eu/?_ga=2.60828716.168267949.1522054490-1373140246.1522054489"
  },
  scorpio: {
    imgLink: "/images/zodiac/scorpio.jpg",
    date: "October 23 - November 21",
    summary:
      "Getting on with Scorpios is not easy. Insults bounce off them and they do not melt down by compliments like snow in spring. Scorpios do not need anybody to tell them how good they are. Scorpios often have the evil eye. If your eyes meet, you probably move away first. Scorpios are very emotional and they take ...",
    infoLink:
      "http://scorpio.bateleur.eu/?_ga=2.102630273.168267949.1522054490-1373140246.1522054489"
  },
  sagittarius: {
    imgLink: "/images/zodiac/sagittarius.jpg",
    date: "November 22 - December 21",
    summary:
      '"Straight as a die" - that is the most characteristic summary of Sagittarius nature. Sagittarians are hearty people, who arouse respect and embarrassment at the same time in the society. Sagittarians statements correspond to their straightforward nature to comment others aptly but carelessly. If they ...',
    infoLink:
      "http://sagittarius.bateleur.eu/?_ga=2.60572845.168267949.1522054490-1373140246.1522054489"
  },
  capricorn: {
    imgLink: "/images/zodiac/capricorn.jpg",
    date: "December 22 - January 19",
    summary:
      "Capricorn is a mountain antelope, who can climb the social ladder as skilfully as his four-legged friend in the mountains. Capricorns watch their steps carefully, because every wrong move could end up with a very painful fall. Capricorns know that the base of success is self-discipline. Capricorns respect ...",
    infoLink:
      "http://capricorn.bateleur.eu/?_ga=2.60572845.168267949.1522054490-1373140246.1522054489"
  }
};

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.render('zodiac',{zodiacInfo: zodiacInfo});
});

module.exports = router;
