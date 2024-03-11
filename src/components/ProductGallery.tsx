import { Col, Image, Row } from "antd";
import SectionTitle from "./SectionTitle";
import img1 from "../assets/product-gallery/1.jpg";
import img2 from "../assets/product-gallery/2.jpg";
import img3 from "../assets/product-gallery/3.jpg";
import img4 from "../assets/product-gallery/4.jpg";
import img5 from "../assets/product-gallery/5.jpg";
import img6 from "../assets/product-gallery/6.jpg";
import img7 from "../assets/product-gallery/7.jpg";
import img8 from "../assets/product-gallery/8.jpg";
import img9 from "../assets/product-gallery/9.jpg";
import img10 from "../assets/product-gallery/10.jpg";
import img11 from "../assets/product-gallery/11.jpg";
import img12 from "../assets/product-gallery/12.jpg";
import { SECTION_ID } from "../router";
import { LoadingOutlined } from "@ant-design/icons";

const ProductGallery = () => {
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];
  return (
    <div id={SECTION_ID.GALLERY}>
      <SectionTitle title="Product Gallery" />
      <div className="mx-20 my-10">
        <Row gutter={[30, 30]}>
          {images.map((img, index) => (
            <Col key={`img${index}`} span={8} lg={8} md={12} sm={24}>
              <Image
                src={img}
                width="100%"
                height={300}
                placeholder={
                  <div className="flex justify-center items-center">
                    <LoadingOutlined className="text-[7rem]" />
                  </div>
                }
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ProductGallery;
