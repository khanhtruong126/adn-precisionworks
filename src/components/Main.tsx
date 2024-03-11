import { Space } from "antd";
import Home from "./Home";
import ContactUs from "./ContactUs";
import Capabilities from "./Capabilities";
import HowItWorkHome from "./HowItWorkHome";

const Main = () => {
  return (
    <Space size={[0, 30]} direction="vertical">
      <Home />
      <Capabilities />
      <HowItWorkHome />
      <ContactUs />
    </Space>
  );
};

export default Main;
