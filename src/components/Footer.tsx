import { SECTION_ID } from "../router";
import { Col, Row, Space } from "antd";
import NetworkMap from "./NetworkMap";
import SendQuoteButton from "./SendQuoteButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faIndustry,
  faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";
import WhatsappQR from "../assets/whatsapp-QR.jpg";

const Footer = () => {
  return (
    <section
      id={SECTION_ID.ABOUT_US}
      className="py-5 px-[2rem] lg:px-[12rem] sm:px-5 bg-light-gray"
    >
      <Row gutter={[25, 25]} align="middle">
        <Col
          span={24}
          lg={13}
          md={24}
          sm={24}
          xs={24}
          className="text-center lg:text-start"
        >
          <div className="text-5xl highlight-title mb-2">LET'S CONNECT US</div>
          <div className="text-base font-semibold">
            <p>
              ADN Precision Works, Ho Chi Minh City, Vietnam", "Est.2024
            </p>
          </div>
          <SpaceContainer
            direction="vertical"
            size={[0, 5]}
            className="my-2 w-full"
          >
            <Row align="middle">
              <Col span={7} lg={7} xs={24}>
                <FontAwesomeIcon icon={faIndustry} className="mr-1" />
                <b>Delivery Center:</b>
              </Col>
              <Col span={17} lg={17} xs={24}>
                Thu Duc city, Ho Chi Minh, Vietnam
              </Col>
            </Row>
            <Row align="middle">
              <Col span={8} lg={8} xs={24}>
                <FontAwesomeIcon icon={faWarehouse} className="mr-1" />
                <b>Vendors Network:</b>
              </Col>
              <Col span={16} lg={16} xs={24}>
                Ho Chi Minh city , Binh Dương Province, Ha Noi
              </Col>
            </Row>
            <Row
              align="middle"
              // href="mailto:thaivu@adnprecisionworks.com?subject=Mail to ADN"
              // target="_blank"
            >
              <Col span={4} lg={4} xs={24}>
                <FontAwesomeIcon icon={faEnvelope} className="mr-1" />
                <b>Email:</b>
              </Col>
              <Col span={20} lg={20} xs={24}>
                thaivu@adnprecisionworks.com
              </Col>
            </Row>
            <Row
              align="middle"
              // href="tel:+84 355 689098"
            >
              <Col span={6} lg={6} xs={24}>
                <FontAwesomeIcon icon={faSquareWhatsapp} className="mr-1" />
                <b>Whatsapp:</b>
              </Col>
              <Col span={18} lg={18} xs={24}>
                +84 355 689098
              </Col>
            </Row>
            <a
              href="https://www.linkedin.com/company/102199449"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 flex-wrap"
            >
              <Col span={5} lg={5} xs={24} className="!px-0">
                <FontAwesomeIcon icon={faLinkedin} className="mr-1" />
                <b>LinkedIn:</b>
              </Col>
              <Col span={18} lg={18} xs={24} className="!px-0">
                https://www.linkedin.com/company/102199449
              </Col>
            </a>
          </SpaceContainer>
          <div>
            <SendQuoteButton />
          </div>
        </Col>
        <Col span={24} lg={5} xs={24}>
          <NetworkMap />
        </Col>
        <Col span={24} lg={6} xs={24} className="lg:!pl-10">
          <div className="p-20 py-5 lg:!p-0 max-w-full">
            {/* <p className="text-center pb-3">Whatsapp Contact</p> */}
            <img src={WhatsappQR} alt="connect-to-whatsapp" />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Footer;

const SpaceContainer = styled(Space)`
  * {
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;
