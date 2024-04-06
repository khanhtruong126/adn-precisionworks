import { Space } from "antd";
import Home from "./Home";
import Capabilities from "./Capabilities";
import HowItWorkChart from "./HowItWorkChart";
import Partners from "./Partners";
import Footer from "./Footer";

const Main = () => {
  return (
    <Space size={[0, 30]} direction="vertical">
      <Home />
      <Capabilities />
      <HowItWorkChart />
      <Partners/>
      <Footer />
    </Space>
  );
};

export default Main;
