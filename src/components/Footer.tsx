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

const Footer = () => {
  const data = ["ADN Precision Works, Ho Chi Minh City, Vietnam", "Est.2024"];

  return (
    <div
      id={SECTION_ID.ABOUT_US}
      className="py-5 px-[20rem] lg:px-[20rem] sm:px-5 xs:px-2 bg-light-gray"
    >
      <Row gutter={[25, 25]} align="middle">
        <Col span={24} lg={16} md={24} sm={24} xs={24}>
          <div className="text-5xl highlight-title mb-2">LET'S CONNECT US</div>
          <div className="text-base font-semibold">
            {data.map((item) => (
              <div>{item}</div>
            ))}
          </div>
          <Space direction="vertical" size={[0, 5]} className="my-2 text-base">
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faIndustry} />
              <span><b>Delivery Center</b>: Thu Duc city, Ho Chi Minh, Vietnam</span>
            </div>
            <div className="flex items-center gap-1">
              <FontAwesomeIcon icon={faWarehouse} />
              <span>
                <b>Vendors Network</b>: Ho Chi Minh city , Binh Dương Province, Ha Noi
              </span>
            </div>
            <div
              // href="mailto:thaivu@adnprecisionworks.com?subject=Mail to ADN"
              // target="_blank"
              className="flex items-center gap-1"
            >
              <FontAwesomeIcon icon={faEnvelope} />
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
        <Col span={24} lg={8} md={24} sm={24} xs={24}>
          <NetworkMap />
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
