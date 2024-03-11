import styled from "styled-components";
import { apwRed, gray } from "../colors";
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
    <About id={SECTION_ID.ABOUT_US}>
      {/* <Row justify="center">
        <Col span={7}>
          <Title level={2}>Contact Us!</Title>
          <Button
            href="https://www.wmberg.com/resources/our-capabilities"
            target="_blank"
            rel="noreferrer"
          >
            Button
          </Button>
        </Col>
        <Col span={7} className="flex flex-col items-center">
          <Row style={{width: '15rem'}}>
            <Col span={5} style={{fontSize: '2rem'}}>
              <PhoneOutlined />
            </Col>
            <Col span={19}>
              <div className="text-left">
                <p>Hotline</p>
                <p>123 456 789</p>
              </div>
            </Col>
          </Row>
          <Row style={{width: '15rem'}}>
            <Col span={5} style={{fontSize: '2rem'}}>
              <MailOutlined />
            </Col>
            <Col span={19}>
              <div className="text-left">
                <p>Email</p>
                <p>wendy@adnprecisionnworks.com</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row> */}
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
    </About>
  );
};

export default ContactUs;

const About = styled.div`
  padding: 2rem 15rem;
  background-color: ${gray};
  display: flex;

  a {
    color: ${apwRed};
  }

  p {
    font-weight: 500;
    margin-left: 2rem;
  }
`;
