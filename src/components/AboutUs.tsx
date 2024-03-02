import React from "react";
import styled from "styled-components";
import { apwRed, gray } from "../colors";
import { SECTION_ID } from "../App";
import { Button, Col, Row, Typography } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";

const { Title } = Typography;

const AboutUs = () => {
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
      <div className="text-8xl text-app-red font-bold mb-6">
        LET'S <br /> CONNECT <br /> WITH US{" "}
      </div>
      <p>Ho Chi Minh, Vietnam</p>
      <p>Adnprecisionworks.com</p>
      <p>quote@adnprecisionworks.com</p>
      <p>Est.2023</p>
    </About>
  );
};

export default AboutUs;

const About = styled.div`
  padding: 2rem 10rem;
  background-color: ${gray};

  a {
    color: ${apwRed};
  }

  p {
    font-weight: 500;
    margin-left: 2rem;
  }
`;
