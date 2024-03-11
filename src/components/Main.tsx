import { Space } from "antd";
import Home from "./Home";
import ContactUs from "./ContactUs";
import Capabilities from "./Capabilities";
import HowItWorkChart from "./HowItWorkChart";

const Main = () => {
  return (
    <Space size={[0, 30]} direction="vertical">
      <Home />
      <Capabilities />
      <HowItWorkChart />
      <ContactUs />
    </Space>
  );
};

export default Main;
