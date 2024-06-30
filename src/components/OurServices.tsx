import React from "react";
import styled from "styled-components";
import ourServies from "../assets/our-services.jpeg";
import { Col, Row } from "antd";
import SectionTitle from "./SectionTitle";

const OurServices = () => {
  return (
    <HomeContanier>
      <Row className="px-10 lg:px-20 md:px-10 sm:px-5 flex-col-reverse lg:flex-row md:flex-col">
        <Col id="home-panel" offset={0} lg={8} md={24} sm={24}></Col>
        <Col
          offset={0}
          lg={16}
          md={24}
          sm={24}
          className="flex mb-5 md:justify-center sm:justify-center"
        >
          <div id="home-contact" className="flex flex-col justify-center">
            <div>
              <SectionTitle title="Our Services"/>
              <p>
                <h2 className="text-center">CNC Machining Service</h2>
                <div className="text-center text-lg">
                  <p>CNC Milling/Turing/Lathes</p>
                  <p>Sheet Metal Fabrication</p>
                  <p>Auto Lathes Swiss Made</p>
                </div>
              </p>
              <div className="text-lg text-justify mt-2">
                <h2 className=" text-center">We are able to handle projects</h2>
                <ul className="text-center text-lg">
                  <li>1pcs- 5000pcs or more</li>
                  <li>Quote in 24hr- 48hrs </li>
                  <li>
                    Material : Aluminum, Stainless Steel, carbon steel, Tool
                    Steel, plastic and others.
                  </li>
                  <li>
                    Production Leadtime from 4-21days, depends on design,
                    quantity and material, coating and finishing.
                  </li>
                  <li>
                    First Article Report (FAIR) and Material Certification (COC
                    or provide every shipment)
                  </li>
                  <li>
                    Other tests, requirement will be treated flexibly Worldwide
                    delivery
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </HomeContanier>
  );
};

export default OurServices;

const HomeContanier = styled.div`
  padding: 2rem 0;

  #home-panel {
    width: 100%;
    height: 28rem;
    background: url(${ourServies}) no-repeat;
    background-position: top center;
    background-size: 700px 450px;
    position: relative;
  }
`;
