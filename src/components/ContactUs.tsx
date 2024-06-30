import { SECTION_ID } from "../router";
import { Col, Row, Space } from "antd";
import NetworkMap from "./NetworkMap";
import SendQuoteButton from "./SendQuoteButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndustry,
  faWarehouse,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import WhatsappQR from "../assets/whatsapp-QR.jpg";

const ContactUs = () => {
  const data = ["ADN Precision Works, Ho Chi Minh City, Vietnam", "Est.2024"];

  return (
    <div id={SECTION_ID.ABOUT_US} className="pt-0 pb-5 w-[100vw]">
      <Row
        gutter={[25, 25]}
        align="middle"
        justify="center"
        className="m-auto px-[3rem] lg:px-[15rem]"
      >
        <Col span={16} lg={16} md={24} sm={24} xs={24}>
          <div className="text-[8vw] lg:text-5xl highlight-title mb-2">
            LET'S CONNECT US
          </div>
          <div className="text-lg font-semibold">
            {data.map((item) => (
              <div>{item}</div>
            ))}
          </div>
          <Space
            direction="vertical"
            size={[0, 8]}
            className="my-4 text-lg w-full break-all"
          >
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faIndustry} />
              <span>
                <b>Delivery Center</b>: Thu Duc city, Ho Chi Minh, Vietnam
              </span>
            </div>
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faWarehouse} />
              <span>
                <b>Vendors Network</b>: Ho Chi Minh city , Binh Dương Province,
                Ha Noi
              </span>
            </div>
            <div
              // href="mailto:thaivu@adnprecisionworks.com?subject=Mail to ADN"
              // target="_blank"
              className="flex items-center gap-1"
            >
              <FontAwesomeIcon icon={faEnvelope} />
              {/* <MailOutlined className="text-base" /> */}
              <span>
                <b>Email</b>: thaivu@adnprecisionworks.com
              </span>
            </div>
            <div
              className="flex items-center gap-1"
              // href="tel:+84 355 689098"
            >
              <FontAwesomeIcon icon={faSquareWhatsapp} />
              <span>
                <b>Whatsapp</b>: +84 355 689098"
              </span>
            </div>
            <a
              href="https://www.linkedin.com/company/102199449"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1"
            >
              <FontAwesomeIcon icon={faLinkedin} />

              <span>
                <b>LinkedIn</b>: https://www.linkedin.com/company/102199449
              </span>
            </a>
          </Space>
          <div>
            <SendQuoteButton />
          </div>
        </Col>
        <Col span={8} lg={8} md={24} sm={24} xs={24}>
          <NetworkMap height="22rem" zoom={5} />
        </Col>
      </Row>
      <Row justify="center" align="middle" className="mt-5">
        <div className="max-h-[300px]">
          <p className="text-center text-lg">Whatsapp Contact</p>
          <img src={WhatsappQR} alt="connect-to-whatsapp" className="max-h-inherit" />
        </div>
      </Row>
    </div>
  );
};

export default ContactUs;
