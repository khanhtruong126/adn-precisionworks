import { CaretRightFilled } from "@ant-design/icons";

const SheetMetalFabrication = () => {
  return (
    <div className="mx-5 lg:mx-40">
      <h1 className="text-center">Sheet Metal Fabrication</h1>
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
          <li>Factories are certified to ISO 9001: 2015</li>
        </ol>
      </div>
    </div>
  );
};

export default SheetMetalFabrication;
