export const DataNavBar = [
  {
    id: 1,
    title: "Brands",
    path: "/",
    locationName: "brands",
  },
  {
    id: 2,
    title: "Products",
    path: "/Products",
    locationName: "products",
  },
  {
    id: 3,
    title: "About",
    path: "/",
    locationName: "about",
  },
  {
    id: 4,
    title: "Special offers",
    path: "/",
    locationName: "specialOffers",
  },
  {
    id: 5,
    title: "B2B offers",
    path: "/",
    locationName: "b2bOffers",
  },
  {
    id: 6,
    title: "Support",
    path: "/user/account",
    locationName: "support",
  },
  {
    id: 7,
    title: "Contact us",
    path: "/contactUs",
    locationName: "contactUs",
  },
];

export const UNKNOWN_ERROR = "Something went wrong!😢";

export let brandsSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        initialSlide: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 560,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const navigationDatas = {
  home: {
    id: 1,
    title: "Home",
    path: "/",
  },
  cart: {
    id: 2,
    title: "Cart",
    path: "/cart",
  },
  products: {
    id: 3,
    title: "Products",
    path: "/products",
  },
};

export const ACCESS_TOKEN = "accesToken";
export const REFRESH_TOKEN = "refreshToken";
