import { Row, Col, Card } from "antd";
import cncMachining from "../assets/capabilities/cnc-machining.jpg";
import sheetMetal from "../assets/sheet-metal-fabrication/sheet-metal-fabrication-background.jpg";
import injectionMolding from "../assets/capabilities/injection-molding.jpg";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { CAPACITY_URLS, SECTION_ID } from "../router";
import SectionTitle from "./SectionTitle";

const { Meta } = Card;

interface CardProps {
  title: string;
  description: string | ReactNode;
  cover: string;
  url: string;
}

const CapacityCard = ({ title, description, cover, url }: CardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      className="min-h-[450px]"
      hoverable
      cover={
        <img
          className="max-h-[230px] aspect-[5/3]"
          alt={title}
          src={cover}
          onClick={() => {
            navigate("/capabilities/" + url);
            setTimeout(() => {
              const el = document.getElementById(url);
              if (el) {
                el.scrollIntoView({ block: "start" });
              }
            }, 50);
          }}
        />
      }
    >
      <Meta
        title={title}
        description={
          <ul className="list-disc ml-4 text-black">{description}</ul>
        }
      />
    </Card>
  );
};

const Capabilities = () => {
  const capacities = [
    {
      title: CAPACITY_URLS.CNC_MACHINING.label,
      description: (
        <>
          <li>Custom to complex parts</li>
          <li>Tolerance max +/- 0.001mm</li>
          <li>Rapid production as required </li>
          <li>Secondary process </li>
          <li>Alumium, Steel, Plastic, Titanum…</li>
        </>
      ),
      cover: cncMachining,
      url: CAPACITY_URLS.CNC_MACHINING.key,
    },
    {
      title: CAPACITY_URLS.SHEET_METAL_FABRICATION.label,
      description: (
        <>
          <li>Laser cutting, bending, post-processing</li>
          <li>Tolerance +/-0.05mm</li>
          <li>Prototy[e] to High quantity</li>
        </>
      ),
      cover: sheetMetal,
      url: CAPACITY_URLS.SHEET_METAL_FABRICATION.key,
    },
    {
      title: CAPACITY_URLS.INJECTION_MOLDING.label,
      description: (
        <>
          <li>
            Application on consumer products, automotive, electronic components
          </li>
          <li>
            Compatible with a wide range of materials, including thermoplastics,
            thermosetting polymers, and some elastomers.
          </li>
          <li> Full quallify from T0 to mass production </li>
        </>
      ),
      cover: injectionMolding,
      url: CAPACITY_URLS.INJECTION_MOLDING.key,
    },
  ];

  return (
    <section
      id={SECTION_ID.CAPABILITIES}
      className="py-5 flex flex-col items-center"
    >
      <SectionTitle title="Our Services" />
      <Row
        gutter={[50, 25]}
        justify="center"
        align="middle"
        className=" w-[90%]"
      >
        {capacities.map((item) => (
          <Col key={item.url} span={7} lg={7} md={12} sm={24} xs={24}>
            <CapacityCard {...item} key={item.url} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Capabilities;
