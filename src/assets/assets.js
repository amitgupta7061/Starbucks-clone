import logo from "./logo.png";
import search from "./search.svg";
import account from "./account_thin.svg";
import winter_back from "./Winter_Banner.png";
import winter_1 from "./Winter-1.png";
import dot from "./veg.svg";
import play_store from "./appstoreAndroid.png";
import app_store from "./appstoreiOS.png";
import bg from "./bgg-1.jpg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import twitter from "./twitter.svg";
import left_arrow from "./arrow-thin-left-icon.svg";

import location from './Location.svg';
import clock from './clock.svg';
import searchresult from './searchresult.png';
import dinein from './Dinein.svg';
import homegreen from './homegreen.svg';


import gift_1 from "./gift_1.png";
import gift_2 from "./gift_2.png";
import gift_3 from "./gift_3.webp";
import gift_4 from "./gift_4.png";
import gift_5 from "./gift_5.png";
import gift_6 from "./gift_6.webp";
import gift_7 from "./gift_7.webp";
import gift_8 from "./gift_8.png";
import gift_9 from "./gift_9.webp";

import menu_1 from "./Bestseller.webp";
import menu_2 from "./Drinks.webp";
import menu_3 from "./Food.webp";
import menu_4 from "./Merchandise.webp";
import menu_5 from "./CoffeeAtHome.webp";
import menu_6 from "./ReadyToEat.webp";

import item_1 from "./a-2.webp";
import item_2 from "./placeholder.webp";
import item_3 from "./a-1.webp";
import item_4 from "./a-3.webp";

import banner_1 from "./Winter-1.png";
import banner_2 from "./Winter-2.png";
import back_1 from "./Winter_Banner.png";
import back_2 from "./Banner_Background.webp";

export const assets = {
  logo,
  search,
  account,
  winter_back,
  winter_1,
  dot,
  bg,
  play_store,
  app_store,
  facebook,
  instagram,
  twitter,
  left_arrow,
  location,
  clock,
  searchresult,
  dinein,
  homegreen,
  
};

export const menu_list = [
  {
    menu_name: "Bestseller",
    menu_image: menu_1,
  },
  {
    menu_name: "Drinks",
    menu_image: menu_2,
  },
  {
    menu_name: "Food",
    menu_image: menu_3,
  },
  {
    menu_name: "Merchandise",
    menu_image: menu_4,
  },
  {
    menu_name: "Cofee At Home",
    menu_image: menu_5,
  },
  {
    menu_name: "Ready to Eat",
    menu_image: menu_6,
  },
];

export const Barista = [
  {
    price: 230.50,
    image: item_1,
    name: "Cappuccino",
    desc: "SHORT()",
    idd : 1
  },
  {
    price: 325.50,
    image: item_2,
    name: "Signature Hot Chocolate",
    desc: "SHORT(237ml)-284 Kcal",
    idd : 2
  },
  {
    price: 414.75,
    image: item_3,
    name: "Vanilla Milkshake",
    desc: "TALL(354ml)-531 Kcal",
    idd : 3
  },
  {
    price: 299.25,
    image: item_4,
    name: "Cold Brew Black",
    desc: "SHORT(120ml)-230 Kcal",
    idd : 4
  },
  {
    price: 420.00,
    image: item_2,
    name: "Tall Java Chip Frappuccino",
    desc: "TALL(354ml)-531 Kcal",
    idd : 5
  },
];

export const Banner_menu = [
  {
    desc_1: "Sip, Savor, Celebrate",
    image_1: banner_1,
    desc_2: "Winter Beverages Are Here",
    desc_3:
      "Savor the return of your favorite winter flavors and celebrate the Starbucks way",
    image_2: back_1,
    btn: "Order Now",
  },
  {
    desc_1: "Starbucks",
    image_1: banner_2,
    desc_2: "Beverage Subscription",
    desc_3:
      "Starbucks Subscription is Back! Sip Your Favourites for Less. Tap for Details. T&C Apply.",
    image_2: back_2,
    btn: "Know More",
  },
];

export const stores = [
  { name: "Starbucks Downtown", address: "123 Main St, NY", contact: "(123) 456-7890", hours: "7 AM - 9 PM" },
  { name: "Starbucks Central", address: "456 Central Ave, NY", contact: "(987) 654-3210", hours: "6 AM - 10 PM" },
  { name: "Starbucks Westside", address: "789 West St, NY", contact: "(555) 123-4567", hours: "8 AM - 8 PM" },
  { name: "Starbucks Delhi", address: "Connaught Place, Delhi", contact: "(011) 1234-5678", hours: "7 AM - 11 PM" },
  { name: "Starbucks Mumbai", address: "Bandra, Mumbai", contact: "(022) 8765-4321", hours: "6 AM - 10 PM" },
  { name: "Starbucks Bangalore", address: "MG Road, Bangalore", contact: "(080) 2345-6789", hours: "7 AM - 10 PM" },
  { name: "Starbucks Hyderabad", address: "Banjara Hills, Hyderabad", contact: "(040) 9876-5432", hours: "6 AM - 11 PM" },
  { name: "Starbucks Chandigarh", address: "Sector 17, Chandigarh", contact: "(0172) 3456-7890", hours: "7 AM - 10 PM" },
  { name: "Starbucks Chennai", address: "Anna Nagar, Chennai", contact: "(044) 8765-1234", hours: "6 AM - 10 PM" },
  { name: "Starbucks Kolkata", address: "Park Street, Kolkata", contact: "(033) 7654-3210", hours: "7 AM - 9 PM" },
  { name: "Starbucks Pune", address: "FC Road, Pune", contact: "(020) 5432-6789", hours: "7 AM - 10 PM" },
  { name: "Starbucks Ahmedabad", address: "CG Road, Ahmedabad", contact: "(079) 6789-1234", hours: "6 AM - 9 PM" },
  { name: "Starbucks Jaipur", address: "MI Road, Jaipur", contact: "(0141) 6789-4321", hours: "7 AM - 10 PM" },
  { name: "Starbucks Patna", address: "Fraser Road, Patna", contact: "(0612) 2345-6789", hours: "7 AM - 10 PM" },
  { name: "Starbucks Jalandhar", address: "Model Town, Jalandhar", contact: "(0181) 3456-7890", hours: "7 AM - 10 PM" },
  { name: "Starbucks Bhopal", address: "MP Nagar, Bhopal", contact: "(0755) 4567-8901", hours: "7 AM - 10 PM" },
  { name: "Starbucks Lucknow", address: "Hazratganj, Lucknow", contact: "(0522) 5678-9012", hours: "7 AM - 10 PM" },
  { name: "Starbucks Surat", address: "Ring Road, Surat", contact: "(0261) 6789-0123", hours: "7 AM - 10 PM" },
  { name: "Starbucks Guwahati", address: "Paltan Bazar, Guwahati", contact: "(0361) 7890-1234", hours: "7 AM - 10 PM" },
  { name: "Starbucks Indore", address: "Vijay Nagar, Indore", contact: "(0731) 8901-2345", hours: "7 AM - 10 PM" },
  { name: "Starbucks Nagpur", address: "Dharampeth, Nagpur", contact: "(0712) 9012-3456", hours: "7 AM - 10 PM" },
  { name: "Starbucks Vishakhapatnam", address: "RK Beach, Vishakhapatnam", contact: "(0891) 0123-4567", hours: "7 AM - 10 PM" }
];



export const Gift_menu = [
  {
    id:"Thank",
    image:gift_1,
    name:"India Exclusive",
    desc:"Bring in the festive season and make each celebration memorable.",
  },
  {
    id:"Thank",
    image:gift_2,
    name:"Starbucks Coffee",
    desc:"Starbucks is best when shared. Treat your pals to a good cup of coffee.",
  },
  {
    id:"Thank",
    image:gift_3,
    name:"Starbucks",
    desc:"Take the moment and make it special with Starbucks.",
  },
  {
    id:"Anytime",
    image:gift_4,
    name:"Hang In There",
    desc:"Sometimes, company goes a long way. Let your friends know you have their back.",
  },
  {
    id:"Anytime",
    image:gift_5,
    name:"My Treat",
    desc:"Nothing like a cup of coffee to flame a friendship. Share the experience with your best fr...",
  },
  {
    id:"Anytime",
    image:gift_6,
    name:"Way To Go",
    desc:"It's time to celebrate! Show your appreciation with this Starbucks Gift Card.",
  },
  {
    id:"congrats",
    image:gift_7,
    name:"India Exclusive",
    desc:"Everything I brew, I brew it for you. This one's on me.",
  },
  {
    id:"congrats",
    image:gift_8,
    name:"Good Things Ahead",
    desc:"Have a cup of coffee, it's all good from here.",
  },
  {
    id:"congrats",
    image:gift_9,
    name:"U Keep Me Warm",
    desc:"Captivating, cosy, coffee. Gift your loved ones this Starbucks Gift Card.",
  },
]