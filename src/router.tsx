import { RouteProps } from "react-router-dom";
import Error from "./Error";
import Main from "./components/Main";
import HowItWork from "./components/HowItWork";
import ContactUs from "./components/ContactUs";
import ProductGallery from "./components/ProductGallery";
import Capabilitiy from "./components/Capabilitiy";

export const SECTION_ID = Object.freeze({
  HOME: "home",
  CAPABILITIES: "capabilities",
  HOWITWORK: "how-it-work",
  ABOUT_US: "about-us",
  GALLERY: "product-gallery",
  PRODUCTS: "products",
  CUSTOMER: "our-customer",
  CONTACT_US: "contact-us",
});

export const CAPACITY_URLS = Object.freeze({
  CNC_MACHINING: { key: "cnc-machining", label: "CNC Machining" },
  SHEET_METAL_FABRICATION: {
    key: "sheet-metal-fabrication",
    label: "Sheet Metal Fabrication",
  },
  MATERIAL: {
    key: "material-and-coating-finishing",
    label: "Material and Coating/Finising",
  },
});

export const GALLERY_URLs = Object.freeze({
  CUSTOMERS: { key: SECTION_ID.CUSTOMER, label: "Our Customers" },
  PRODUCT_GALLERY: {
    key: SECTION_ID.PRODUCTS,
    label: "Products",
  },
});

const routePath = (sectionId: string) => `/${sectionId}`;

export const router: RouteProps[] = [
  {
    path: `/capabilities/${CAPACITY_URLS.CNC_MACHINING.key}`,
    element: <Capabilitiy />,
    errorElement: <Error />,
  },
  {
    path: `/capabilities/${CAPACITY_URLS.SHEET_METAL_FABRICATION.key}`,
    element: <Capabilitiy />,
    errorElement: <Error />,
  },
  {
    path: `/capabilities/${CAPACITY_URLS.MATERIAL.key}`,
    element: <Capabilitiy />,
    errorElement: <Error />,
  },
  {
    path: routePath(SECTION_ID.ABOUT_US),
    element: <HowItWork />,
    errorElement: <Error />,
  },
  {
    path: routePath(`product-gallery/${SECTION_ID.CUSTOMER}`),
    element: <ProductGallery />,
    errorElement: <Error />,
  },
  {
    path: routePath(`product-gallery/${SECTION_ID.PRODUCTS}`),
    element: <ProductGallery />,
    errorElement: <Error />,
  },
  {
    path: routePath(SECTION_ID.CONTACT_US),
    element: <ContactUs />,
    errorElement: <Error />,
  },
  //dev route
  {
    path: routePath("/adn-precisionworks"),
    element: <Main />,
    errorElement: <Error />,
  },
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
  },
];
