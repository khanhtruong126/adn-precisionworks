import { Row, Col, Card } from "antd";
import quickQuote from "../assets/accelerate-manufactoring/quick-quote.png";
import effectivePrice from "../assets/accelerate-manufactoring/effective-price.svg";
import reliableNetwork from "../assets/accelerate-manufactoring/reliable-network.png";
import becomeParter from "../assets/accelerate-manufactoring/become-partner.png";
import { ReactNode } from "react";
import { SECTION_ID } from "../router";
import SectionTitle from "./SectionTitle";

interface CardProps {
  id: number;
  title: string;
  description: string | ReactNode;
  cover: string;
}

const CapacityCard = ({ title, description, cover }: CardProps) => {
  return (
    <Card className="min-h-[300px] lg:min-h-[430px] rounded-[10px]">
      <div className="flex flex-col items-center lg:items-start">
        <img src={cover} alt={title} height={100} width={100} />
        <h3 className="mt-3 mb-6 font-bold">{title}</h3>
        <ul className="list-disc ml-4">{description}</ul>
      </div>
    </Card>
  );
};

const AccelerateManufactoring = () => {
  const items = [
    {
      id: 1,
      title: "Quick quote in 24hrs",
      description: (
        <>
          <li>Send your PDF/Model Files and detail inquiries</li>
          <li>
            To make sure provide an accurate and effective cost, we will provide
            cost not latest than 48hrs
          </li>
        </>
      ),
      cover: quickQuote,
    },
    {
      id: 2,
      title: "Effective prices",
      description: (
        <>
          <li>
            We will provide 2 quotes with different leadtime ( 7days and 21days)
            for your evaluation and decide
          </li>
          <li>Provice price + leadtime apply for alternitive material </li>
        </>
      ),
      cover: effectivePrice,
    },
    {
      id: 3,
      title: "Reliable Network",
      description: (
        <>
          <li>
            We limited number of local vendors at 15 vendors to maintain high
            performance ensure the most customer satisfaction.
          </li>
          <li>
            Works regularly with limited local vendors, will helps balancing the
            growth of each vendors
          </li>
        </>
      ),
      cover: reliableNetwork,
    },
    {
      id: 4,
      title: "Become your trust business partner ",
      description: (
        <>
          <li>Quality and leadtime focus to enhance customer satisfaction.</li>
          <li>Transparent in the communication and project updates</li>
          <li>Flexible on customer’s requests or new service. </li>
        </>
      ),
      cover: becomeParter,
    },
  ];

  return (
    <section
      id={SECTION_ID.ACCELERATE_MANUFACTURING}
      className="bg-gray flex flex-col items-center py-10"
    >
      <SectionTitle title="Accelerate Your Manufacturing" />
      <Row
        gutter={[15, 25]}
        justify="center"
        align="middle"
        className="w-[70%]"
      >
        {items.map((item) => (
          <Col key={item.id} span={24} lg={6} md={12} sm={24}>
            <CapacityCard {...item} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default AccelerateManufactoring;
