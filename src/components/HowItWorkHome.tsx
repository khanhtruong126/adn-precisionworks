import { Card, Col, Row } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import image from '../assets/home-item.jpg'

const { Meta } = Card;

const HowItWorkHome = () => {
  const cardData = [
    {
      title: "Request a quote",
      description:
        "description description description description description",
      imgSrc: image,
    },
    {
      title: "Project Consultation",
      description:
        "description description description description description",
      imgSrc: image,
    },
    {
      title: "Oversight production",
      description:
        "description description description description description",
      imgSrc: image,
    },
    {
      title: "Parts are delivered",
      description:
        "description description description description description",
      imgSrc: image,
    },
  ];
  return (
    <div className="px-20 my-10">
      <h1 className="mb-5">How It Work</h1>
      <Row gutter={50} justify="space-between" align="middle">
        {cardData.map((item, index) => (
          <>
            <Col span={5}>
              <Card
                className="text-center"
                hoverable
                cover={<img alt="chart-image" src={item.imgSrc} />}
              >
                <Meta title={item.title} description={item.description} />
              </Card>
            </Col>
            {index !== cardData.length - 1 && (
              <Col span={1} style={{ paddingLeft: '12px !important'}} >
                <ArrowRightOutlined className="text-5xl" />
              </Col>
            )}
          </>
        ))}
      </Row>
    </div>
  );
};

export default HowItWorkHome;
