import { Card, Col, Row } from "antd";
import {
  FormOutlined,
  InteractionOutlined,
  ProjectOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import arrow from "../assets/arrow.svg";

const { Meta } = Card;

const HowItWorkHome = () => {
  const cardData = [
    {
      title: "Request a quote",
      description:
        "description description description description description",
      imgSrc: <FormOutlined />,
    },
    {
      title: "Project Consultation",
      description:
        "description description description description description",
      imgSrc: <InteractionOutlined />,
    },
    {
      title: "Oversight production",
      description:
        "description description description description description",
      imgSrc: <ProjectOutlined />,
    },
    {
      title: "Parts are delivered",
      description:
        "description description description description description",
      imgSrc: <RocketOutlined />,
    },
  ];
  return (
    <div className="px-20 mb-10">
      <h1 className="mb-5">How It Work</h1>
      <Row gutter={50} justify="space-between" align="middle">
        {cardData.map((item, index) => (
          <>
            <Col span={5}>
              <Card
                className="text-center cursor-default"
                hoverable
                cover={<div className="text-5xl pt-4 text-app-red">{item.imgSrc}</div>}
              >
                <Meta
                  title={<p className="font-bold capitalize">{item.title}</p>}
                  description={item.description}
                />
              </Card>
            </Col>
            {index !== cardData.length - 1 && (
              <Col span={1} className="!px-0">
                <img src={arrow} alt="arrow" />
              </Col>
            )}
          </>
        ))}
      </Row>
    </div>
  );
};

export default HowItWorkHome;
