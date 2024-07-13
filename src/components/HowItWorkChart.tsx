import { Col, Row } from "antd";
import SectionTitle from "./SectionTitle";
import step1 from "../assets/how-it-work/step-1.png";
import step2 from "../assets/how-it-work/step-2.png";
import step3 from "../assets/how-it-work/step-3.png";
import step4 from "../assets/how-it-work/step-4.png";
import step5 from "../assets/how-it-work/step-5.png";

const HowItWorkChart = () => {
  const items = [
    {
      title: "1. Send us PDF/CAD files, notes and detail requirements",
      description: [],
      imgSrc: step1,
    },
    {
      title: "2. Quote in 24hrs to 48hrs ",
      description: [
        "Ensure the accuracy we will provide 2 quotes for your decision",
        "EDX/FOB/DDP/IDP prices",
      ],
      imgSrc: step2,
    },
    {
      title: "3. Place Orders",
      description: [
        "Once you are satisfied with terms: price, leadtime, payment… Send us the confirmation to start production",
      ],
      imgSrc: step3,
    },
    {
      title: "4. Production and Quality Control",
      description: [
        "Parts will be made",
        "Quality reports (First Article Report) will be sent before shipping 1 day for the approval (if needed)",
      ],
      imgSrc: step4,
    },
    {
      title: "5. Shipping",
      description: [
        "3PLs logictic partners such as Fedex, DHL or UPS to small packages (below 100Kgs)",
        "SEA Freight to heavy package if Leadtime is allowed",
      ],
      imgSrc: step5,
    },
  ];
  return (
    <section className="flex flex-col items-center">
      <SectionTitle title="How It Works" />
      <div className="w-[1024px] hidden lg:block">
        <Row gutter={25} justify="space-between" align="middle">
          {items.map((item, index) => (
            <Col span={4} key={index}>
              <img loading="lazy" src={item.imgSrc} alt={item.title} className="w-12 ml-[1.75rem]" />
            </Col>
          ))}
        </Row>
        <Row
          gutter={25}
          justify="space-between"
          align="top"
          className="border-t-2 border-gray-700/50 mt-5"
        >
          {items.map((item, index) => (
            <Col span={4} key={index} className="relative p-5">
              <div className="absolute bg-gray-950 w-[10px] h-[10px] rounded-full left-[35%] top-[-0.37rem]"></div>
              <span className="block font-bold text-base">{item.title}</span>
              <ul className="list-disc ml-4">
                {item.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </Col>
          ))}
        </Row>
      </div>
      <div className="flex flex-col block lg:hidden mx-16 sm:mx-4 max-w-sm">
        {items.map((item, index) => (
          <div
            key={index}
            className="relative p-5 border-l-2 border-gray-700/50"
          >
            <img loading="lazy" src={item.imgSrc} alt={item.title} className="w-40 p-5" />
            <div className="absolute bg-gray-950 w-[8px] h-[8px] rounded-full top-[35%] left-[-0.3rem]"></div>
            <span className="block font-semibold text-base">{item.title}</span>
            <ul className="list-disc ml-4">
              {item.description.map((desc, index) => (
                <li key={index}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorkChart;
