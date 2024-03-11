import { RouteProps } from "react-router-dom";
import Error from "./Error";
import Main from "./components/Main";
import HowItWork from "./components/HowItWork";
import ContactUs from "./components/ContactUs";
import ProductGallery from "./components/ProductGallery";
import Capabilitiy from "./components/Capabilitiy";

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

export const SECTION_ID = Object.freeze({
  HOME: "home",
  CAPABILITIES: "capabilities",
  HOWITWORK: "howitwork",
  ABOUT_US: "about-us",
  GALLERY: "product-gallery",
  CONTACT_US: "contact-us",
});

const routePath = (sectionId: string) => `/${sectionId}`

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
    path: routePath(SECTION_ID.HOWITWORK),
    element: <HowItWork />,
    errorElement: <Error />,
  },
  {
    path: routePath(SECTION_ID.GALLERY),
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
