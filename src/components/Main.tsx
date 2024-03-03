import { Space } from "antd";
import Home from "./Home";
import ContactUs from "./ContactUs";
import Capacity from "./Capacity";
import HowItWork from "./HowItWork";
import Network from "./Network";
import SectionTitle from "./SectionTitle";
import ProductGallery from "./ProductGallery";

const Main = () => {
  return (
    <Space size={[0, 30]} direction="vertical">
      <Home />
      <SectionTitle title="Capacity" />
      <Capacity />
      <HowItWork />
      <ProductGallery/>
      <ContactUs />
    </Space>
  );
};

export default Main;
