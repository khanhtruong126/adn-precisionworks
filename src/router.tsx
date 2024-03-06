import { RouteProps } from "react-router-dom";
import Error from "./Error";
import Material from "./components/capacities/Material";
import Main from "./components/Main";
import HowItWork from "./components/HowItWork";
import ContactUs from "./components/ContactUs";
import ProductGallery from "./components/ProductGallery";
import SheetMetalFabrication from "./components/capacities/SheetMetalFabrication";
import CNCMachining from "./components/capacities/CNCMachining";

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

export const router: RouteProps[] = [
  {
    path: `/capabilities/${CAPACITY_URLS.CNC_MACHINING.key}`,
    element: <CNCMachining />,
    errorElement: <Error />,
  },
  {
    path: `/capabilities/${CAPACITY_URLS.SHEET_METAL_FABRICATION.key}`,
    element: <SheetMetalFabrication />,
    errorElement: <Error />,
  },
  {
    path: `/capabilities/${CAPACITY_URLS.MATERIAL.key}`,
    element: <Material />,
    errorElement: <Error />,
  },
  {
    path: "/howitwork",
    element: <HowItWork />,
    errorElement: <Error />,
  },
  {
    path: "/gallery",
    element: <ProductGallery />,
    errorElement: <Error />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
    errorElement: <Error />,
  },
  {
    path: "/adn-precisionworks",
    element: <Main />,
    errorElement: <Error />,
  },
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
  },
];
