import { Row, Col, Card } from "antd";
import { SECTION_ID } from "../App";
const { Meta } = Card;

const CapacityCard = () => {
  return (
    <Card
      hoverable
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    //   className="mx-8"
    >
      <Meta title="Europe Street beat" description="www.instagram.com" />
    </Card>
  );
};

const Capacity = () => {
  return (
    <Row id={SECTION_ID.CAPACITY} gutter={50} justify="space-between" align="middle">
      <Col span={6}>
        <CapacityCard />
      </Col>
      <Col span={6}>
        <CapacityCard />
      </Col>
      <Col span={6}>
        <CapacityCard />
      </Col>
      <Col span={6}>
        <CapacityCard />
      </Col>
    </Row>
  );
};

export default Capacity;
