import { Space } from "antd";
import Home from "./Home";
import Capabilities from "./Capabilities";
import Partners from "./Partners";
import Footer from "./Footer";
import AccelerateManufactoring from "./AccelerateManufactoring";
import HowItWorkChart from "./HowItWorkChart";
import InsideOurVendor from "./InsideOurVendor";

const Main = () => {
  return (
    <Space size={[0, 30]} direction="vertical" className="w-full">
      <Home />
      <AccelerateManufactoring/>
      <Capabilities />
      <HowItWorkChart/>
      <Partners/>
      <InsideOurVendor/>
      <Footer />
    </Space>
  );
};

export default Main;
