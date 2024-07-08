import add1 from "../assets/portrait-handsome-confident-stylish-hipster-lambersexual-modelman-dressed-jacket-jeans-fashion-male-posing-studio-near-white-wall-min.jpg";
import add2 from "../assets/portrait-young-stylish-girl-model-casual-summer-clothes-brown-hat-with-natural-makeup-glasses-isolated-showing-peace-sign-min.jpg";
import add3 from "../assets/portrait-smiling-beautiful-girl-her-handsome-boyfriend-laughing-happy-cheerful-couple-sunglasses-min.jpg";
import mastercard from "../assets/card.png";
import paypal from "../assets/paypal.png";
import visa from "../assets/visa.png";
import whitebag from '../assets/whitebag.png'
import bg1 from "../assets/20824341_6368590.svg";
import bg2 from "../assets/20824342_6343839.svg";
import bag from "../assets/bag.png";
import ind from "../assets/india.png";
import usa from "../assets/united-states.png";
import jap from "../assets/japan.png";
import girl from "../assets/girl-with-nice-hairstyle-posing-holding-heels-shoes-hands-min.jpg";
import banner from "../assets/banner.png";
import cat3 from "../assets/young-man-dressed-coat-isolated-white-wall-min.jpg";
import cat1 from "../assets/full-shot-kids-posing-together-min.jpg";
import cat2 from "../assets/portrait-smiling-beautiful-woman-min.jpg";
import addbanner1 from "../assets/addbanner1.png";
import addbanner2 from "../assets/addbanner2.png";
import addbanner3 from "../assets/addbanner3.png";
import addbanner4 from "../assets/addbanner4.png";
import ribbon from '../assets/ribbon.png'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import urbanlogo from '../assets/urbanstorelogo.png'
export { mastercard, visa, paypal, banner,urbanlogo };
export { bg1, bg2, bag,whitebag };
export { ind, usa,ribbon, jap, addbanner1, addbanner2,google,facebook };
const adds = [
  {
    title: "ZENZ TRENDS",
    subtitle: "don't compromize on style! get flat 3 for new arrivals.",
    banner: add3,
    color: "#A5D6A7",
  },
  {
    title: "WOMENIA",
    subtitle: "don't compromize on style! get flat 3 for new arrivals.",
    banner: add2,
    color: "#80DEEA",
  },
  {
    title: "DENIM JACKET",
    subtitle: "don't compromize on style! get flat 3 for new arrivals.",
    banner: add1,
    color: "#81D4FA",
  },
];

const bannerAds = [
  {
    add: addbanner4,
  },
  {
    add: addbanner1,
  },
  {
    add: addbanner3,
  },
  {
    add: addbanner2,
  },
];
const categories = [
  {
    id: 1,
    img: cat1,
    title: "KIDS",
    cat: "kids",
  },
  {
    id: 3,
    img: cat2,
    title: "WOMEN",
    cat: "female",
  },
  {
    id: 4,
    img: cat3,
    title: "MENS",
    cat: "male",
  },

  {
    id: 45,
    img: girl,
    title: "FOOTWEAR",
    cat: "footwear",
  },
];

const allCategories = {
  men: {
    Topwear: [
      "T-shirt",
      "Casual Shirts",
      "Formal Shirts",
      "Sweatshirts",
      "Jackets",
      "Blazers & Coats",
      "Suits",
      "Rain Jackets",
    ],
    IndianFestiveWear: [
      "Kurtas & Kurta Sets",
      "Sherwanis",
      "Nehru Jackets",
      "Dhotis",
    ],
    Bottomwear: [
      "Jeans",
      "Casual Trousers",
      "Formal Trousers",
      "Shorts",
      "Track Pants & Joggers",
    ],
    InnerwearAndSleepwear: [
      "Briefs & Trunks",
      "Boxers",
      "Vests",
      "Sleepwear & Loungewear",
      "Thermals",
    ],
    Footwear: [
      "Casual Shoes",
      "Sports Shoes",
      "Formal Shoes",
      "Sneakers",
      "Sandals & Floaters",
      "Flip Flops",
      "Socks",
    ],
    PersonalCareAndGrooming: [],

    SunglassesANDFrames: [],

    Watches: [],
  },
  women: {
    IndianAndFusionWear: [
      "Kurtas & Suits",
      "Kurtis,Tunics & Tops",
      "Sarees",
      "Ethnic Wear",
      "Leggings, Salwars & Chudidars",
      "Skirts & Plazzos",
      "Dress Materials",
      "Lehenga Cholis",
      "Dupattas & Shawls",
      "Jackets",
    ],
    PlusSize: ["Dresses", "Tops", "Tshirt", "Jeans"],
    InnerwearAndSleepwear: [],

    BriefsAndTrunks: ["Boxers", "Vests", "Sleepwear & Loungewear", "Thermals"],
    BeltsScarvesAndMore: [],

    WatchesAndWearables: [],

    WesternWear: [],
  },
  kids: {
    Topwear: [
      "T-shirt",
      "Casual Shirts",
      "Formal Shirts",
      "Sweatshirts",
      "Jackets",
      "Blazers & Coats",
      "Suits",
      "Rain Jackets",
    ],
    IndianFestiveWear: [
      "Kurtas & Kurta Sets",
      "Sherwanis",
      "Nehru Jackets",
      "Dhotis",
    ],
    Bottomwear: [
      "Jeans",
      "Casual Trousers",
      "Formal Trousers",
      "Shorts",
      "Track Pants & Joggers",
    ],
    InnerwearAndSleepwear: [
      "Briefs & Trunks",
      "Boxers",
      "Vests",
      "Sleepwear & Loungewear",
      "Thermals",
    ],
    Footwear: [
      "Casual Shoes",
      "Sports Shoes",
      "Formal Shoes",
      "Sneakers",
      "Sandals & Floaters",
      "Flip Flops",
      "Socks",
    ],
    PersonalCareAndGrooming: [],

    SunglassesANDFrames: [],

    Watches: [],
  },
  casual: {
    Topwear: [
      "T-shirt",
      "Casual Shirts",
      "Formal Shirts",
      "Sweatshirts",
      "Jackets",
      "Blazers & Coats",
      "Suits",
      "Rain Jackets",
    ],
   
    
    Footwear: [
      "Casual Shoes",
      "Sports Shoes",
      "Formal Shoes",
      "Sneakers",
      "Sandals & Floaters",
      "Flip Flops",
      "Socks",
    ],
    
    SunglassesANDFrames: [],

  },
  traditional: {
    Topwear: [
      "T-shirt",
      "Casual Shirts",
      "Formal Shirts",
      "Sweatshirts",
      "Jackets",
      "Blazers & Coats",
      "Suits",
      "Rain Jackets",
    ],
    IndianFestiveWear: [
      "Kurtas & Kurta Sets",
      "Sherwanis",
      "Nehru Jackets",
      "Dhotis",
    ],
    Bottomwear: [
      "Jeans",
      "Casual Trousers",
      "Formal Trousers",
      "Shorts",
      "Track Pants & Joggers",
    ],
    InnerwearAndSleepwear: [
      "Briefs & Trunks",
      "Boxers",
      "Vests",
      "Sleepwear & Loungewear",
      "Thermals",
    ],
    Footwear: [
      "Casual Shoes",
      "Sports Shoes",
      "Formal Shoes",
      "Sneakers",
      "Sandals & Floaters",
      "Flip Flops",
      "Socks",
    ],
    PersonalCareAndGrooming: [],

    SunglassesANDFrames: [],

    Watches: [],
  },
  new: {
    Topwear: [
     
    ],
    IndianFestiveWear: [
      
    ],
    Bottomwear: [
      
    ],
    InnerwearAndSleepwear: [
     
    ],
    Footwear: [
    
    ],
    PersonalCareAndGrooming: [],

    SunglassesANDFrames: [],

    Watches: [],
  },
};
export { adds, categories, bannerAds, allCategories };
