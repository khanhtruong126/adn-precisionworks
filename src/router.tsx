import { RouteProps } from 'react-router-dom';
import Error from './Error';
import { lazy } from 'react';

const Main = lazy(() => import('./components/Main'));
const HowItWork = lazy(() => import('./components/HowItWork'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const ProductGallery = lazy(() => import('./components/ProductGallery'));
const Capabilitiy = lazy(() => import('./components/CapabilitiyPage'));
const GetAQuote = lazy(() => import('./components/GetAQuote'));

export const SECTION_ID = Object.freeze({
  HOME: 'home',
  CAPABILITIES: 'capabilities',
  HOWITWORK: 'how-it-work',
  ABOUT_US: 'about-us',
  GALLERY: 'product-gallery',
  PRODUCTS: 'products',
  CUSTOMER: 'our-customer',
  CONTACT_US: 'contact-us',
  ACCELERATE_MANUFACTURING: 'accelerate-manufacturing',
  GET_A_QUOTE: 'get-a-quote',
});

export const CAPACITY_URLS = Object.freeze({
  CNC_MACHINING: { key: 'cnc-machining', label: 'CNC Machining' },
  SHEET_METAL_FABRICATION: {
    key: 'sheet-metal-fabrication',
    label: 'Sheet Metal Fabrication',
  },
  MATERIAL: {
    key: 'material-and-coating-finishing',
    label: 'Material and Coating/Finising',
  },
  INJECTION_MOLDING: {
    key: 'injection_molding',
    label: 'Injection Molding',
  },
});

export const GALLERY_URLs = Object.freeze({
  CUSTOMERS: { key: SECTION_ID.CUSTOMER, label: 'Our Customers' },
  PRODUCT_GALLERY: {
    key: SECTION_ID.PRODUCTS,
    label: 'Products',
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
    path: `/capabilities/${CAPACITY_URLS.INJECTION_MOLDING.key}`,
    element: <Capabilitiy />,
    errorElement: <Error />,
  },
  {
    path: routePath(SECTION_ID.ABOUT_US),
    element: <HowItWork />,
    errorElement: <Error />,
  },
  // {
  //   path: routePath(`product-gallery/${SECTION_ID.CUSTOMER}`),
  //   element: <ProductGallery />,
  //   errorElement: <Error />,
  // },
  {
    path: routePath(`product-gallery`),
    element: <ProductGallery />,
    errorElement: <Error />,
  },
  {
    path: routePath(SECTION_ID.CONTACT_US),
    element: <ContactUs />,
    errorElement: <Error />,
  },
  {
    path: routePath(SECTION_ID.GET_A_QUOTE),
    element: <GetAQuote />,
    errorElement: <Error />,
  },
  //dev route
  {
    path: routePath('/adn-precisionworks'),
    element: <Main />,
    errorElement: <Error />,
  },
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
  },
];
