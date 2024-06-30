import { Card, Col, Row } from "antd";
import {
  FormOutlined,
  InteractionOutlined,
  ProjectOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import arrow from "../assets/arrow.svg";
import SectionTitle from "./SectionTitle";

const { Meta } = Card;

const HowItWorkChart = () => {
  const cardData = [
    {
      title: "Request a quote",
      description:
        "Send ADN team your design including PDF and CADs files. Let us know your additional requests",
      imgSrc: <FormOutlined />,
    },
    {
      title: "Project Consultation",
      description:
        "Within 48hrs, we will send you a quotation after Our engineers understanding your project requirements, specifications, and quality standards. Select the most suitable vendors for your specific needs.",
      imgSrc: <InteractionOutlined />,
    },
    {
      title: "Oversight production",
      description:
        "Our team actively manages the production process, providing oversight to guarantee that the machined parts adhere to your specifications and quality standards. Regular updates keep you informed every step of the way",
      imgSrc: <ProjectOutlined />,
    },
    {
      title: "Parts are delivered",
      description:
        "We handle the logistics efficiently, ensuring that your machined parts are delivered on time and in optimal condition. DHL/Fedex/Air Freight",
      imgSrc: <RocketOutlined />,
    },
  ];
  return (
    <div className="px-12 mb-10">
      <SectionTitle title="How It Works" />
      <Row
        gutter={[50, 30]}
        justify="space-between"
        align="middle"
        className="px-2 lg:px-10 md:px-5 md:justify-center sm:justify-center xs:justify-center"
      >
        {cardData.map((item, index) => (
          <>
            <Col span={5} xl={5} lg={6} md={20} sm={24} xs={24}>
              <Card
                className="text-center cursor-default min-h-[300px] 2xl:min-h-[300px] lg:min-h-[450px] border-[2px]"
                hoverable
                cover={
                  <div className="text-5xl pt-4 text-app-red">
                    {item.imgSrc}
                  </div>
                }
              >
                <Meta
                  title={
                    <p className="font-bold capitalize truncate">
                      {item.title}
                    </p>
                  }
                  description={
                    <p className="text-justify indent-5">{item.description}</p>
                  }
                />
              </Card>
            </Col>
            {index !== cardData.length - 1 && (
              <Col
                span={1}
                className="!px-0 hidden lg:!block"
              >
                <img src={arrow} alt="arrow" />
              </Col>
            )}
          </>
        ))}
      </Row>
    </div>
  );
};

export default HowItWorkChart;
