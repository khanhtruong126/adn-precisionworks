import { Col, Image, Row } from 'antd';
import SectionTitle from './SectionTitle';
import img1 from '../assets/product-gallery/1.jpeg';
import img2 from '../assets/product-gallery/2.jpeg';
import img3 from '../assets/product-gallery/3.jpeg';
import img4 from '../assets/product-gallery/4.jpeg';
import img5 from '../assets/product-gallery/5.jpeg';
import img6 from '../assets/product-gallery/6.jpeg';
import img7 from '../assets/product-gallery/7.jpeg';
import img8 from '../assets/product-gallery/8.jpeg';
import img9 from '../assets/product-gallery/9.jpeg';
import img10 from '../assets/product-gallery/10.jpeg';
import img11 from '../assets/product-gallery/11.jpeg';
import img12 from '../assets/product-gallery/12.jpeg';
import { SECTION_ID } from '../router';
import { LoadingOutlined } from '@ant-design/icons';
// import Partners from "./Partners";

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
      {/* <div className="py-5">
        <Partners />
      </div> */}
      <SectionTitle title="Product Gallery" />
      <div className="mx-5 lg:mx-20 my-10">
        <Row gutter={[30, 30]}>
          {images.map((img, index) => (
            <Col
              key={`img${index}`}
              lg={8}
              md={12}
              sm={24}
              className="h-[300px] w-full"
            >
              <Image
                src={img}
                loading="lazy"
                width="100%"
                height="100%"
                placeholder={
                  <div className="flex justify-center items-center h-full">
                    <LoadingOutlined className="text-[5rem]" />
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
