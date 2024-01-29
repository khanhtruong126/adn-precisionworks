import { Row, Col, Button, Typography } from "antd";
import styled from "styled-components";
import homePanel from "../assets/home-panel.png";
import { SECTION_ID } from "../App";

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
      <Col id="home-panel" span={12}></Col>
      <Col span={12}>
        <div id="home-contact">
          <Title>ADN Precision Works</Title>
          <Button onClick={handleClickScroll}>
            {/* <Title level={4}>Contact Us</Title> */}
            <p>Contact Us</p>
          </Button>
        </div>
      </Col>
    </HomeContanier>
  );
};

export default Home;

const HomeContanier = styled.div`
  display: flex;
  align-items: center;

  #home-panel {
    height: 30rem;
    background: url(${homePanel}) center no-repeat;
    background-size: cover;
  }

  #home-contact {
    margin: 3rem;

    button {

    }
  }
`;
