import { RouteProps } from "react-router-dom";
import Error from "./Error";
import Material from "./components/capacities/Material";
import Main from "./components/Main";
import HowItWork from "./components/HowItWork";
import ContactUs from "./components/ContactUs";
import ProductGallery from "./components/ProductGallery";
import MillingAndTurning from "./components/capacities/MillingAndTurning";
import AutoLathes from "./components/capacities/AutoLathes";
import SheetMetalFabricate from "./components/capacities/SheetMetalFabricate";
import CoatingAndSurfaceFinishing from "./components/capacities/CoatingAndSurfaceFinishing";

export const CAPACITY_URLS = Object.freeze({
  MILLING_AND_TURNING: "milling-and-turning",
  AUTO_LATHES: "auto-lathes",
  SHEET_METAL_FABRICATE: "sheet-metal-fabricate",
  MATERIAL: "material",
  COATING_SURFACE_FINISHING: "coating-and-surface-finishing",
});

export const router: RouteProps[] = [
  {
    path: `/capacity/${CAPACITY_URLS.MILLING_AND_TURNING}`,
    element: <MillingAndTurning />,
    errorElement: <Error />,
  },
  {
    path: `/capacity/${CAPACITY_URLS.AUTO_LATHES}`,
    element: <AutoLathes />,
    errorElement: <Error />,
  },
  {
    path: `/capacity/${CAPACITY_URLS.SHEET_METAL_FABRICATE}`,
    element: <SheetMetalFabricate />,
    errorElement: <Error />,
  },
  {
    path: "/capacity/material",
    element: <Material />,
    errorElement: <Error />,
  },
  {
    path: `/capacity/${CAPACITY_URLS.COATING_SURFACE_FINISHING}`,
    element: <CoatingAndSurfaceFinishing />,
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
