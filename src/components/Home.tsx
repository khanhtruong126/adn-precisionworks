import { Row, Col, Button, Typography } from "antd";
import styled from "styled-components";
import homeBackground from "../assets/home-background.png";
import hubCNC from "../assets/hubs_cnc.png";
import { SECTION_ID } from "../App";
import { apwRed, gray } from "../colors";
import homeItem from "../assets/home-item.png";
import AppLogo from "../assets/main-logo.svg";

const { Title } = Typography;

const Home = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("about-us");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HomeContanier id={SECTION_ID.HOME}>
      <Row>
        <Col
          lg={12}
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
              <p className="text-3xl text-app-red font-bold mb-2">
                Reliable and Flexible
              </p>
              <span className="text-lg">
                ADN Precision Works (APW), we are specialized in procurement of
                machined parts, manufactured at local CNC shops located in Ho
                Chi Minh and Ha Noi, Vietnam Our experienced and diversity
                network allows us support customer in divert market with a
                reliability result.
                <br /> We try the best to create the products and service
                solution that brings Values to customer <br />{" "}
                <div className="ml-5 mt-2">
                  <div className="flex gap-2">
                    <img src={AppLogo} alt="main_logo" width={25} height={25} />
                    <span className="text-3xl text-app-red font-bold">
                      Low cost
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <img src={AppLogo} alt="main_logo" width={25} height={25} />
                    <span className="text-3xl text-app-red font-bold">
                      Short leadtime
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <img src={AppLogo} alt="main_logo" width={25} height={25} />
                    <span className="text-3xl text-app-red font-bold">
                      High performance products
                    </span>
                  </div>
                </div>
              </span>
            </p>
          </div>
        </Col>
        <Col id="home-panel" lg={12} md={24} sm={24}></Col>
      </Row>
      {/* <div id="home-panel">
        <div id="background-faded-overlay">
          <div id="home-contact">
            <Title>ADN Precision Works</Title>
            <Button size="large" onClick={handleClickScroll}>
              <Title level={4}>Contact Us</Title>
            </Button>
          </div>
        </div>
      </div> */}
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
