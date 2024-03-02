import React from "react";
import styled from "styled-components";
import {
  FieldTimeOutlined,
  DollarOutlined,
  HeartOutlined,
  FullscreenOutlined,
} from "@ant-design/icons";
import { Col } from "antd";
import { apwRed } from "../colors";

const Strategies = () => {
  const items = [
    { title: "Rapid", icon: <FieldTimeOutlined /> },
    { title: "Adorable Price", icon: <DollarOutlined /> },
    {
      title: "Customer Satisfaction",
      icon: <HeartOutlined />,
    },
    {
      title: "Flexibility",
      icon: <FullscreenOutlined />,
    },
  ];

  return (
    <StrategiesContainer>
      <Col span={4} id="title">
        OUR STRATEGIES
      </Col>
      {items.map((i) => (
        <Col
          span={4}
          className="strategy flex flex-col justify-center items-center"
        >
          <div className="icon">{i.icon}</div>
          <div className="description text-center">{i.title}</div>
        </Col>
      ))}
    </StrategiesContainer>
  );
};

export default Strategies;

const StrategiesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${apwRed};
  color: white;
  padding: 0.5rem;
  margin: 2rem 15rem 1rem;
  border-radius: 10px;
//   gap: 15px;

  #title {
    border-radius: inherit;
    background-color: white;
    color: black;
    padding: 1.5rem 1rem;
    font-size: 1.2rem;
    font-weight: 700;
  }

  .strategy {
    .icon {
      font-size: 2rem;
    }

    .description {
        font-size: 1rem;
    }
  }
`;
