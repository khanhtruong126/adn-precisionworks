import { Space } from "antd";
import Home from "./Home";
import ContactUs from "./ContactUs";
import Capabilities from "./Capabilities";
import SectionTitle from "./SectionTitle";
import ProductGallery from "./ProductGallery";
import HowItWorkHome from "./HowItWorkHome";

const Main = () => {
  return (
    <Space size={[0, 30]} direction="vertical">
      <Home />
      <SectionTitle title="Capabilities" />
      <Capabilities />
      <HowItWorkHome />
      <ProductGallery/>
      <ContactUs />
    </Space>
  );
};

export default Main;
