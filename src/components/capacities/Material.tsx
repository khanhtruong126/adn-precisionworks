import material from "../../assets/technologies_im_homepage.png";
import { Col, Row } from "antd";
import { CaretRightFilled } from "@ant-design/icons";

const Material = () => {
  return (
    <div className="w-[80vw] m-auto flex flex-col gap-5">
      <h1 className="text-center">Material</h1>
      <div className="text-lg text-justify">
        <p className="mb-5">
          <CaretRightFilled />
          <span className="highlight-title">Materials Expertise</span>: Whether
          it's aluminum, steel, titanium, or exotic alloys, we have the
          expertise to work with a wide range of materials. Our CNC precision
          service ensures that your components maintain their integrity and
          quality, regardless of the material specifications.
          <div className="ml-5 text-base text-gray">
            <p>
              <CaretRightFilled />
              CNC machining Aluminum Stainless Steel, (Low)Carbon Steels and
              tools steels such A2, O1
            </p>
            <p>
              <CaretRightFilled />
              For sheet metal fabrication : Alumium such as 6061; 6061-T6;
              6061-T651, A1050, A5052, A6063, 7075 ( Sheet metal)
            </p>
          </div>
        </p>
        <p>
          <ol>
            <li>
              <CaretRightFilled />
              <span className="highlight-title">Comprehensive Protection</span>:
              We offer a range of coating options designed to protect your metal
              machined parts from corrosion, wear, and environmental factors.
              Whether it's powder coating, anodizing, or specialized coatings,
              our team ensures that your components are shielded for
              long-lasting performance.
            </li>
            <li>
              <CaretRightFilled />
              <span className="highlight-title">Aesthetic Enhancement</span>:
              Beyond protection, our finishing services focus on enhancing the
              visual appeal of your metal parts. From sleek and polished
              surfaces to custom finishes, we bring a touch of craftsmanship to
              every detail, making your components stand out in any application.
            </li>
          </ol>
        </p>
      </div>

      <Row justify="space-between" className="gap-2 px-20">
        <Col span={7}>
          <img src={material} alt="material" />
        </Col>
        <Col span={7}>
          <img src={material} alt="material" />
        </Col>
        <Col span={7}>
          <img src={material} alt="material" />
        </Col>
        <Col span={7}>
          <img src={material} alt="material" />
        </Col>
        <Col span={7}>
          <img src={material} alt="material" />
        </Col>
        <Col span={7}>
          <img src={material} alt="material" />
        </Col>
        <Col span={7}>
          <img src={material} alt="material" />
        </Col>
      </Row>
    </div>
  );
};

export default Material;
