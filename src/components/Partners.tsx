import React from "react";
import yamaha from "../assets/partner_logos/yamaha.png";
import sumitomo from "../assets/partner_logos/sumitomo_electric.png";
import viettel from "../assets/partner_logos/viettel.png";
import samsung from "../assets/partner_logos/samsung.png";
import misumi from "../assets/partner_logos/misumi.png";
import panasonic from "../assets/partner_logos/panasonic.png";
import { Col, Row } from "antd";

const Partners = () => {
  const partners = [
    { name: "yamaha", imgSrc: yamaha },
    { name: "viettel", imgSrc: viettel },
    { name: "sumitomo", imgSrc: sumitomo },
    { name: "samsung", imgSrc: samsung },
    { name: "misumi", imgSrc: misumi },
    { name: "panasonic", imgSrc: panasonic },
  ];

  return (
    <div className="mx-10 ">
      <div className="text-center mb-10">
        <span className="text-3xl pb-2 font-bold border-b-[5px] border-app-red">
          Our Customers
        </span>
      </div>
      <Row
        justify="center"
        align="middle"
        gutter={[0, 10]}
        className="px-5 py-2 bg-white rounded-md"
      >
        {partners.map((partner) => (
          <Col span={4}>
            <img
              src={partner.imgSrc}
              alt={partner.name}
              className="m-auto shrink-0 origin-0 max-w-[200px] max-h-[100px]"
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Partners;
