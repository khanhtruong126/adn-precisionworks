import { Row, Col } from "antd";
import styled from "styled-components";
import { SECTION_ID } from "../router";
import AppLogo from "../assets/main-logo.svg";
import { CaretRightFilled } from "@ant-design/icons";
import item from "../assets/home-item.png";

const Home = () => {
  return (
    <HomeContanier id={SECTION_ID.HOME}>
      <Row className="px-24 xl:px-24 md:px-10 sm:px-5">
        <Col
          lg={16}
          md={24}
          sm={24}
          className="flex mb-5 md:justify-center sm:justify-center"
        >
          <div
            id="home-contact"
            className="pl-20 sm:pl-0 flex flex-col justify-center"
          >
            {/* <Title>ADN Precision Works</Title> */}
            {/* <Button size="large" className="p-0" onClick={handleClickScroll}>
              <Title level={4}>Contact Us</Title>
            </Button> */}
            <div>
              <h2 className="mb-2">
                Unlocking Vietnam's Precision <br /> Your Gateway to Quality
                Machined Parts
              </h2>
              <div className="text-lg text-justify">
                <p className="mb-2 indent-10">
                  ADN Precision works (
                  <span className="highlight-title">ADN</span>), your premier
                  partner in procuring high-quality machined parts from the
                  heart of Vietnam. With a commitment to excellence and a
                  network of trusted manufacturing partners, we are your trusted
                  source for precision-engineered components that meet and
                  exceed industry standards.
                </p>
                <div className="flex">
                  <CaretRightFilled />
                  <span>
                    We do service{" "}
                    <span className="highlight-title">from prototype</span>{" "}
                    <b>to productions</b>
                  </span>
                </div>
                <div className="flex">
                  <CaretRightFilled />
                  <b>At ADN</b>, our responsible to delivery to customers
                </div>
                <Row justify="space-between" align="middle">
                  <Col className="ml-5 mt-2">
                    <div className="flex gap-2">
                      <img
                        src={AppLogo}
                        alt="main_logo"
                        width={10}
                        height={10}
                      />
                      <h3>HIGH QUALITY PRODUCTS</h3>
                    </div>
                    <div className="flex gap-2">
                      <img
                        src={AppLogo}
                        alt="main_logo"
                        width={10}
                        height={10}
                      />
                      <h3>FASTER</h3>
                    </div>
                    <div className="flex gap-2">
                      <img
                        src={AppLogo}
                        alt="main_logo"
                        width={10}
                        height={10}
                      />
                      <h3>REASONABLE COST</h3>
                    </div>
                  </Col>
                  {/* <Col className="mt-3">
                    <SendQuoteButton />
                  </Col> */}
                </Row>
              </div>
            </div>
          </div>
        </Col>
        <Col id="home-panel" offset={0} lg={8} md={24} sm={24}></Col>
      </Row>
    </HomeContanier>
  );
};

export default Home;

const HomeContanier = styled.div`
  background-color: #fafafa;
  padding: 2rem 0;

  #home-panel {
    width: 100%;
    height: 22rem;
    background: url(${item}) right no-repeat;
    background-size: 400px 550px;
    position: relative;
  }
`;
