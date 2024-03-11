import { SECTION_ID } from "../router";
import { Col, Row } from "antd";
import NetworkMap from "./NetworkMap";

const ContactUs = () => {
  const data = [
    {
      colName: "Office",
      content:
        "Dreamplex Building, 42 Ngô Quang Huy Street, District 2, HCMC, Vietnam",
    },
    {
      colName: "Warehouse",
      content: "10, No.4 Street, Thu Duc City, HCMC, Vietnam",
    },
    {
      colName: "Email",
      content: "quotes@adnprecisionworks.com",
    },
    {
      colName: "Whatsapp",
      content: "+84 908629977",
    },
    {
      colName: "LinkedIn",
      content: "",
    },
    {
      colName: "Twitter",
      content: "",
    },
  ];
  return (
    <Row
      id={SECTION_ID.ABOUT_US}
      className="pb-5 px-[15rem] lg:px-[15rem] sm:px-10"
      gutter={[25, 25]}
    >
      <Col span={16} lg={16} md={24} sm={24}>
        <div className="text-7xl highlight-title mb-6">
          LET'S <br /> CONNECT <br /> WITH US{" "}
        </div>
        <div className="text-base font-semibold">
          {data.map((item) => (
            <Row key={item.colName}>
              <Col span={4}>{item.colName}:</Col>
              <Col span={20}>{item.content}</Col>
            </Row>
          ))}
        </div>
      </Col>
      <Col span={8} lg={8} md={24} sm={24}>
        <NetworkMap />
      </Col>
    </Row>
  );
};

export default ContactUs;
