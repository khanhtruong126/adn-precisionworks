import AppLogo from "../assets/main-logo.svg";
import { Col, Row } from "antd";
import SendQuoteButton from "./SendQuoteButton";
import AboutUs from "./AboutUs";

const HowItWork = () => {
  const data = [
    {
      title: "1. Request a quote",
      content:
        "Send ADN team your design including PDF and CADs files. Let us know your additional requests",
    },
    {
      title: "3.1. Virtual Approval prior shipment",
      content:
        "Sale rep will send products’ video prior shipment 1-2days for customer approval.\nFirst Article Report provide if need\nNote: this apply for Test orders (1-2 first orders) only to save time for production, this could be skipped.",
    },
    {
      title: "2. Project Consultation",
      content:
        "Within 48hrs, we will send you a quotation after Our engineers understanding your project requirements, specifications, and quality standards. Select the most suitable vendors for your specific needs.",
    },
    {
      title: "4. Parts are shipped to customer",
      content:
        "We handle the logistics efficiently, ensuring that your machined parts are delivered on time and in optimal condition.\nDHL/Fedex/Air Freight",
    },
    {
      title: "3. Production",
      content:
        "Our team actively manages the production process, providing oversight to guarantee that the machined parts adhere to your specifications and quality standards. Regular updates keep you informed every step of the way",
    },
  ];

  return (
    <div className="px-2 py-6 lg:px-10 sm:px-2">
      <AboutUs />
      <h1 className="mb-5 mt-10">How It Work</h1>
      <Row justify="space-between" gutter={[25, 25]} className="px-20">
        {data.map((item, index) => (
          <Col
            span={12}
            key={item.title}
            className={
              [2, 4].includes(index)
                ? "translate-y-[-90px]"
                : index === 3
                ? "translate-y-[60px]"
                : ""
            }
          >
            <div className="flex gap-2 mb-1">
              <img src={AppLogo} alt="main_logo" width={25} height={25} />
              <span className="text-3xl font-semibold">{item.title}</span>
            </div>
            <p className="text-justify text-lg whitespace-pre-line">
              {item.content}
            </p>
          </Col>
        ))}
      </Row>
      <div className="m-auto w-fit translate-y-[-50px]">
        <SendQuoteButton />
      </div>
    </div>
  );
};

export default HowItWork;
