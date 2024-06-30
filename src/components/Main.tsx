import { Space } from "antd";
import Home from "./Home";
import Capabilities from "./Capabilities";
import HowItWorkChart from "./HowItWorkChart";
import Partners from "./Partners";
import Footer from "./Footer";
import OurServices from "./OurServices";

const Main = () => {
  return (
    <Space size={[0, 30]} direction="vertical">
      <Home />
      <OurServices/>
      <Capabilities />
      {/* <HowItWorkChart /> */}
      <Partners/>
      <Footer />
    </Space>
  );
};

export default Main;
