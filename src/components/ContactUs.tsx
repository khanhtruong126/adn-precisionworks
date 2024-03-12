import { SECTION_ID } from "../router";
import { Col, Row, Space } from "antd";
import NetworkMap from "./NetworkMap";
import {
  WhatsAppOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import SendQuoteButton from "./SendQuoteButton";

const ContactUs = () => {
  const data = [
    {
      colName: "ADN Precisionworks, Ho Chi Minh City, Vietnam",
    },
    {
      colName: "Est.2024",
    },

    // {
    //   colName: (
    //     <a
    //       href="mailto:wendy@adnprecisionworks.com?subject=Mail to ADN"
    //       target="_blank"
    //     >
    //       wendy@adnprecisionworks
    //     </a>
    //   ),
    // },
  ];

  return (
    <div
      id={SECTION_ID.ABOUT_US}
      className="py-5 px-[15rem] lg:px-[15rem] sm:px-10 bg-light-gray"
    >
      <Row gutter={[25, 25]}>
        <Col span={16} lg={16} md={24} sm={24}>
          <div className="text-7xl highlight-title mb-6">
            LET'S <br /> CONNECT <br /> WITH US{" "}
          </div>
          <div className="text-base font-semibold">
            {data.map((item, i) => (
              <Row key={i}>
                <Col span={24}>{item.colName}</Col>
                {/* <Col span={20}>{item.content}</Col> */}
              </Row>
            ))}
          </div>
          <Space size={[15, 0]} className="my-3">
            <a
              href="mailto:thaivu@adnprecisionworks.com?subject=Mail to ADN"
              target="_blank"
            >
              <MailOutlined className="text-3xl" />
            </a>
            <a href="tel:+84 908629977">
              <WhatsAppOutlined className="text-3xl" />
            </a>
            <a href="https://www.linkedin.com/company/102199449">
              <LinkedinOutlined className="text-3xl" />
            </a>
          </Space>
          <div>
            <SendQuoteButton />
          </div>
        </Col>
        <Col span={8} lg={8} md={24} sm={24}>
          <NetworkMap />
        </Col>
      </Row>
    </div>
  );
};

export default ContactUs;
