import React from "react";
import AppLogo from "../assets/main-logo.svg";
import { Col, Row } from "antd";

const HowItWork = () => {
  const data = [
    {
      title: "Request a quote",
      content:
        "Send ADN team your design including PDF and CADs files . Let us know your additional requests",
    },
    {
      title: "ADN’s Engineer study and quote",
      content:
        "Our engineers will study your design to define appropriate production method that help optimize cost and Leadtime.",
    },
    {
      title: "Production",
      content:
        "7-21 days depends on material type and Design’ complexity\n Orders will send to dedicated shop to produce parts to prints\n Any deviations from customer design will be prior communicate before production",
    },
    {
      title: "Virtual Approval prior shipment",
      content:
        "Sale rep will send products’ video prior shipment 1-2days for customer approval.\nFirst Article Report provide if need",
    },
    {
      title: "Distribute to Delivery Department",
      content:
        "Approved products are delivered to ADN ‘ Delivery Department for final  UALITY review and packing",
    },
    {
      title: "Parts are shipped to customer",
      content:
        "Qualified products are shipped out and door to door delivery by DHL or Fedex",
    },
  ];

  return (
    <div className="px-10 py-6 bg-gray">
      <div className="text-5xl text-app-red font-bold mb-5">How It Work</div>
      <Row justify="space-between" className="px-20 gap-y-4">
        {data.map((item) => (
          <Col span={11}>
            <div className="flex gap-2 mb-1">
              <img src={AppLogo} alt="main_logo" width={25} height={25} />
              <span className="text-3xl font-semibold">{item.title}</span>
            </div>
            <p className="text-justify text-lg">{item.content}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HowItWork;
