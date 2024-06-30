import { CaretRightFilled } from "@ant-design/icons";
import { Col, Row } from "antd";
import img1 from "../../assets/sheet-metal-fabrication/img1.png";
import img2 from "../../assets/sheet-metal-fabrication/img2.jpg";
import img3 from "../../assets/sheet-metal-fabrication/img3.jpg";
import img4 from "../../assets/sheet-metal-fabrication/img4.jpg";
import img5 from "../../assets/sheet-metal-fabrication/img5.jpg";
import img6 from "../../assets/sheet-metal-fabrication/img6.jpg";

const SheetMetalFabrication = ({ id }: { id: string }) => {
  const images = [img3, img1, img6, img4, img5, img2];

  return (
    <div className="px-5 lg:px-40">
      <h1 id={id} className="text-center">Sheet Metal Fabrication</h1>
      <div className="mt-5 text-lg text-justify">
        <p className="mb-4">
          <CaretRightFilled />
          We take pride in offering a comprehensive range of sheet metal
          solutions tailored to meet the diverse needs of industries ranging
          from construction and automotive to electronics and beyond.
        </p>
        <ol className="list-decimal ml-5">
          <li>
            <span className="highlight-title">Cutting-Edge Technology</span>: At
            ADN Precision Works, we leverage the latest advancements in sheet
            metal fabrication technology. Our cutting-edge equipment ensures
            precise cutting, bending, and forming, allowing us to bring your
            designs to life with unparalleled accuracy.
          </li>
          <li>
            <span className="highlight-title">Versatility in Materials</span>:
            Whether it's stainless steel, aluminum, copper, or other alloys, we
            possess the expertise to work with a wide array of materials. Our
            skilled team understands the unique properties of each material,
            ensuring that your sheet metal components maintain structural
            integrity and durability.
          </li>
          <li>
            <span className="highlight-title">Precision in Every Detail</span>:
            Precision is not just a feature; it's the essence of our sheet metal
            fabrication service. Our commitment to meticulous craftsmanship
            guarantees that every cut, bend, and weld is executed with utmost
            precision, resulting in components that meet the highest industry
            standards.
          </li>
          <li>Factories are certified to <span className="highlight-title">ISO 9001: 2015</span></li>
        </ol>
      </div>

      <Row justify="space-between" gutter={[30, 30]} className="mt-8">
        {images.map((img, index) => (
          <Col span={8} lg={8} xs={12} key={`image${index}`}>
            <img src={img} alt="sheet-metal-fabrication" className="max-h-[250px] w-full" />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SheetMetalFabrication;
