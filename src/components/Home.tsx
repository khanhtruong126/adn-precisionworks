import { Row, Col } from "antd";
import styled from "styled-components";
import { SECTION_ID } from "../router";
import AppLogo from "../assets/main-logo.svg";
import { CaretRightFilled } from "@ant-design/icons";
import item from "../assets/home-item.png";

const Home = () => {
  return (
    <HomeContanier id={SECTION_ID.HOME}>
      <Row className="px-10 lg:px-24 md:px-10 sm:px-5">
        <Col
          lg={16}
          md={24}
          sm={24}
          className="flex mb-5 md:justify-center sm:justify-center"
        >
          <div id="home-contact" className="flex flex-col justify-center">
            {/* <Title>ADN Precision Works</Title> */}
            {/* <Button size="large" className="p-0" onClick={handleClickScroll}>
              <Title level={4}>Contact Us</Title>
            </Button> */}
            <div>
              <h2 className="mb-2">
                ADN precision Works LLC, We provide CNC Machining Services
              </h2>
              <p>
                <b className="text-xl">
                  ADN, we provide one-stop CNC Machining Service to ensure all
                  our customers will receive the best quality products in a
                  timely manners.
                </b>
              </p>
              <div className="text-lg text-justify">
                {/* <p className="mb-2 indent-10">
                  We offer precision CNC machining services to meet your custom
                  part manufacturing needs. Utilizing state-of-the-art CNC
                  machines and experienced CNC manufacturers from Vietnam, we
                  can produce high-quality, prototype to production, accurate
                  parts with tight tolerances.
                </p> */}
                {/* <div className="flex">
                  <CaretRightFilled />
                  <span>
                    We do service{" "}
                    <span className="highlight-title">from prototype</span>{" "}
                    <b>to productions</b>
                  </span>
                </div> */}
                {/* <div className="flex">
                  <CaretRightFilled />
                  Values to customers
                </div> */}
                <Row justify="space-between" align="middle">
                  <Col className="ml-5 mt-2">
                    <div className="flex gap-2">
                      <img
                        src={AppLogo}
                        alt="main_logo"
                        width={15}
                        height={15}
                      />
                      <h3>
                        Capability diversity , our supplier diversity will help
                        unlock the benefit of manufacturing parts. By identify
                        the appropriate production method and manufacture, will
                        help to optimize cost and production leadtime.
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      <img
                        src={AppLogo}
                        alt="main_logo"
                        width={15}
                        height={15}
                      />
                      <h3>
                        Skilled Engineers including Engineers, Technicians will
                        prior review technical drawings and communicate toward
                        solution, to ensure the production run smoothly.
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      <img
                        src={AppLogo}
                        alt="main_logo"
                        width={15}
                        height={15}
                      />
                      <h3>
                        Monitor priority detail every single project from start
                        to end by sale Engineer, including planning, follow up,
                        production walk in, regular Audits, communicate the
                        chances, deviations in a timely manner to avoid
                        unnecessary delays.
                      </h3>
                    </div>
                  </Col>
                  {/* <Col className="mt-3">
                    <SendQuoteButton />
                  </Col> */}
                </Row>
                {/* <p className="mt-3">
                  With our diversity vendors networks , Our capabilities are
                  including CNC Maching including Milling and Turning, Sheet
                  Metal fabrication and Auto lathes Swiss machines
                </p> */}
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
