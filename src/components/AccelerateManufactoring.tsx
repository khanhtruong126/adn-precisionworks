import { Row, Col, Card, Space } from 'antd';
import quickQuote from '../assets/accelerate-manufactoring/quick-quote.png';
import effectivePrice from '../assets/accelerate-manufactoring/effective-price.svg';
import reliableNetwork from '../assets/accelerate-manufactoring/reliable-network.png';
// import becomeParter from '../assets/accelerate-manufactoring/become-partner.png';
import { ReactNode } from 'react';
import { SECTION_ID } from '../router';
import SectionTitle from './SectionTitle';

interface CardProps {
  id: number;
  title: string;
  description: string | ReactNode;
  cover: string;
}

const CapacityCard = ({ title, description, cover }: CardProps) => {
  return (
    <Card className="min-h-auto lg:min-h-[450px] rounded-[10px]">
      <div className="flex flex-col justify-center items-center">
        <img loading="lazy" src={cover} alt={title} height={100} width={150} />
        <h3 className="mt-3 mb-6 font-bold text-center">{title}</h3>
        {/* <ul className="list-disc ml-4">{description}</ul> */}
        <p>{description}</p>
      </div>
    </Card>
  );
};

const AccelerateManufactoring = () => {
  const items = [
    {
      id: 1,
      title: 'CNC Machining & Precision Parts Sourcing',
      description: (
        <>
          We connect you with reliable Vietnamese manufacturers for
          high-quality, cost-effective CNC and mechanical parts.
        </>
      ),
      cover: quickQuote,
    },
    {
      id: 2,
      title: 'Supplier Qualification & Inspection & Material Test service ',
      description: (
        <>
          On-site inspection, supplier audits, and production monitoring to
          ensure parts meet your exact specifications; Material Testing Services
          by independent lab testing at accredited Vietnamese/International
          laboratories to verify materials meet US/EU compliance standards
          (RoHS, REACH, ASTM, etc.).
        </>
      ),
      cover: effectivePrice,
    },
    {
      id: 3,
      title: 'Outsourced Headcount Services',
      description: (
        <>
          Need a local presence? We provide trained staff for{' '}
          <b>order management, production tracking, and vendor follow-up</b> —
          acting as your eyes and hands on the ground.
        </>
      ),
      cover: reliableNetwork,
    },
    // {
    //   id: 4,
    //   title: 'Become your trust business partner ',
    //   description: (
    //     <>
    //       <li>Quality and leadtime focus to enhance customer satisfaction.</li>
    //       <li>Transparent in the communication and project updates</li>
    //       <li>Flexible on customer’s requests or new service. </li>
    //     </>
    //   ),
    //   cover: becomeParter,
    // },
  ];

  return (
    <section
      id={SECTION_ID.ACCELERATE_MANUFACTURING}
      className="flex flex-col items-center py-10"
    >
      <SectionTitle title="What do we offer" />
      {/* <Row
        gutter={[35, 25]}
        justify="center"
        align="middle"
        className="w-[70%]"
      >
        {items.map((item) => (
          <Col key={item.id} span={24} lg={8} md={12} sm={24}>
            <CapacityCard {...item} />
          </Col>
        ))}
      </Row> */}
      <div className="px-5 w-full xl:w-[50%] lg:w-[70%] md:w-[90%] max-w-[700px]">
        <Space direction="vertical" size={50}>
          <Row
            gutter={[10, 30]}
            className="flex-col md:flex-row"
            align="middle"
            justify="space-between"
          >
            <Col md={4} sm={24}>
              <img
                src={items[0].cover}
                alt={items[0].title}
                width={150}
                loading="lazy"
              />
            </Col>
            <Col md={20} sm={24}>
              <h3 className="highlight-title mb-2">{items[0].title}</h3>
              <div className="text-base px-5 text-justify">
                {items[0].description}
              </div>
            </Col>
          </Row>
          <Row
            gutter={[10, 30]}
            className="flex-col-reverse md:flex-row"
            align="middle"
            justify="space-between"
          >
            <Col md={20} sm={24}>
              <h3 className="highlight-title mb-2">{items[1].title}</h3>
              <div className="text-base px-5 text-justify">
                {items[1].description}
              </div>
            </Col>
            <Col md={4} sm={24}>
              <img
                src={items[1].cover}
                alt={items[1].title}
                width={150}
                loading="lazy"
              />
            </Col>
          </Row>
          <Row
            gutter={[10, 30]}
            className="flex-col md:flex-row"
            align="middle"
            justify="space-between"
          >
            <Col md={4} sm={24}>
              <img
                src={items[2].cover}
                alt={items[2].title}
                width={150}
                loading="lazy"
              />
            </Col>
            <Col md={20} sm={24}>
              <h3 className="highlight-title mb-2">{items[2].title}</h3>
              <div className="text-base px-5 text-justify">
                {items[2].description}
              </div>
            </Col>
          </Row>
        </Space>
      </div>
    </section>
  );
};

export default AccelerateManufactoring;
