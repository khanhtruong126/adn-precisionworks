import { Space } from "antd";
import Home from "./Home";
import AccelerateManufactoring from "./AccelerateManufactoring";
import { lazy, Suspense } from "react";

const Capabilities = lazy(() => import("./Capabilities"));
const HowItWorkChart = lazy(() => import("./HowItWorkChart"));
const Partners = lazy(() => import("./Partners"));
const InsideOurVendor = lazy(() => import("./InsideOurVendor"));
const Footer = lazy(() => import("./Footer"));

const Main = () => {
  return (
    <Space size={[0, 30]} direction="vertical" className="w-full">
      <Home />
      <AccelerateManufactoring />
      <Suspense>
        <Capabilities />
        <HowItWorkChart />
        <Partners />
        <InsideOurVendor />
        <Footer />
      </Suspense>
    </Space>
  );
};

export default Main;
