import { Row, Col, Button, Typography } from "antd";
import styled from "styled-components";
import homeBackground from "../assets/home-background.png";
import hubCNC from "../assets/hubs_cnc.png";
import { SECTION_ID } from "../App";
import { apwRed, gray } from "../colors";
import homeItem from "../assets/home-item.png";
import AppLogo from "../assets/main-logo.svg";
import { CaretRightFilled } from "@ant-design/icons";


const Home = () => {

  return (
    <HomeContanier id={SECTION_ID.HOME}>
      <Row>
        <Col
          lg={14}
          md={24}
          sm={24}
          className="flex mb-5 md:justify-center sm:justify-center"
        >
          <div id="home-contact" className="pl-20">
            {/* <Title>ADN Precision Works</Title> */}
            {/* <Button size="large" className="p-0" onClick={handleClickScroll}>
              <Title level={4}>Contact Us</Title>
            </Button> */}
            <p>
              <h3 className="mb-2">
                Unlocking Vietnam's Precision: Your Gateway to Quality Machined
                Parts
              </h3>
              <div className="text-lg text-justify">
                <p className="mb-2">
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
                    <span className="highlight-title">from prototype</span> to
                    productions
                  </span>
                </div>
                <div className="flex">
                  <CaretRightFilled />
                  <b>At ADN</b>, our responsible to delivery to customers
                </div>
                <div className="ml-5 mt-2">
                  <div className="flex gap-2">
                    <img src={AppLogo} alt="main_logo" width={25} height={25} />
                    <h2>HIGH QUALITY PRODUCTS</h2>
                  </div>
                  <div className="flex gap-2">
                    <img src={AppLogo} alt="main_logo" width={25} height={25} />
                    <h2>FASTER</h2>
                  </div>
                  <div className="flex gap-2">
                    <img src={AppLogo} alt="main_logo" width={25} height={25} />
                    <h2>REASONABLE COST</h2>
                  </div>
                </div>
              </div>
            </p>
          </div>
        </Col>
        <Col id="home-panel" lg={10} md={24} sm={24}></Col>
      </Row>
    </HomeContanier>
  );
};

export default Home;

const HomeContanier = styled.div`
  background-color: ${gray};

  #home-panel {
    width: 100%;
    height: 30rem;
    background: url(${homeItem}) center no-repeat;
    background-size: cover;
    position: relative;
  }

  #home-contact {
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1,
    h4 {
      color: ${apwRed};
    }

    h4 {
      margin-bottom: 0;
    }

    button:hover {
      border: 1px solod ${apwRed};
      h4 {
        color: ${apwRed};
      }
    }
  }
`;
