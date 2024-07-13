import { SECTION_ID } from "../router";
import { Col, Row, Space } from "antd";
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
import SubmitForm from "./SubmitQuoteForm";
import WhatsappQR from "../assets/whatsapp-QR.jpeg";

const ContactUs = () => {
  return (
    <div id={SECTION_ID.ABOUT_US} className="pt-5 pb-10 w-[100vw]">
      <Row
        gutter={[0, 25]}
        justify="space-between"
        className="m-auto px-[1rem] lg:px-[3rem] max-w-full"
      >
        <Col
          span={11}
          lg={11}
          md={24}
          sm={24}
          xs={24}
          className="!px-4 md:!px-10"
        >
          <div className="text-[8vw] lg:text-5xl highlight-title mb-2">
            LET'S CONNECT US
          </div>
          <div className="text-lg font-semibold">
            <div>ADN Precision Works, Ho Chi Minh City, Vietnam</div>
            <div>Est.2024</div>
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
          <div className="flex flex-col items-center">
            <p className="text-center text-lg font-semibold">Whatsapp Contact</p>
            <img
              src={WhatsappQR}
              alt="connect-to-whatsapp"
              className="max-h-[250px] aspect-square"
            />
          </div>
        </Col>
        <Col span={12} lg={13} md={24} sm={24} xs={24}>
          <div className="mt-[-40px] lg:mt-[-30px] h-[1000px] md:h-[710px] overflow-y-hidden">
            <SubmitForm />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
