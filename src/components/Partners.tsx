import yamaha from "../assets/partner_logos/yamaha.png";
// import sumitomo from "../assets/partner_logos/sumitomo_electric.png";
import viettel from "../assets/partner_logos/viettel.png";
import samsung from "../assets/partner_logos/samsung.png";
import misumi from "../assets/partner_logos/misumi.png";
import panasonic from "../assets/partner_logos/panasonic.png";
import { Col, Row } from "antd";

const Partners = () => {
  const partners = [
    { name: "yamaha", imgSrc: yamaha },
    { name: "viettel", imgSrc: viettel },
    // { name: "sumitomo", imgSrc: sumitomo },
    { name: "samsung", imgSrc: samsung },
    { name: "misumi", imgSrc: misumi },
    { name: "panasonic", imgSrc: panasonic },
  ];

  return (
    <section className="mx-10">
      <div className="text-center mb-10">
        <span className="text-3xl pb-2 font-bold border-b-[5px] border-app-red">
          Our Customers
        </span>
      </div>
      <Row
        justify="space-between"
        align="middle"
        gutter={[20, 10]}
        className="lg:px-5 py-2 bg-white rounded-md"
      >
        {partners.map((partner) => (
          <Col span={12} xl={4} lg={4} key={partner.name} >
            <img
              src={partner.imgSrc}
              alt={partner.name}
              className="m-auto shrink-0 origin-0 max-w-[80%] max-h-[100px]"
            />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Partners;
