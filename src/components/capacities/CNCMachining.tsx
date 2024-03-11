import { CaretRightFilled } from "@ant-design/icons";
import { Col, Row } from "antd";
import styled from "styled-components";
import cncMachining from "../../assets/cnc-machining/cnc-machining-background.jpg";
import image from "../../assets/home-item.jpg";
import img1 from "../../assets/cnc-machining/img1.jpg";
import img2 from "../../assets/cnc-machining/img2.jpg";
import img3 from "../../assets/cnc-machining/img3.jpg";

const CNCMachining = ({ id }: { id: string }) => {
  return (
    <Container id={id}>
      <h1 className="text-center">CNC Machining</h1>
      <div className="my-10 px-20">
        <Row align="middle">
          <Col span={16}>
            <div className="text-justify mt-7 text-lg">
              <p>
                <CaretRightFilled />
                Take advantage of our multi-axis machining capabilities that
                enable us to handle intricate and three-dimensional components.
                This allows us to achieve superior precision in every dimension,
                bringing your designs to life with exceptional accuracy.
              </p>
              <p>
                <CaretRightFilled />
                <span className="highlight-title">Custom Solutions</span>: No
                two projects are alike, and we understand the importance of
                tailored solutions. Our team of skilled engineers collaborates
                with you to understand your specific requirements, offering
                customized CNC precision services that meet and exceed your
                expectations.
              </p>
            </div>
          </Col>
          <Col span={8}>
            <img src={cncMachining} alt="cnc-machining" className="float-right h-[250px]" />
          </Col>
        </Row>
        <Row align="middle">
          <Col span={8}>
            <img
              src={image}
              alt="cnc-machining"
              className=" h-[250px]"
            />
          </Col>
          <Col span={16}>
            <div className="text-justify mt-5 text-lg">
              <div>
                <p>
                  <CaretRightFilled />
                  <span className="highlight-title">
                    Our CNC Milling/Turning
                  </span>{" "}
                  process produces custom prototypes and end-use production
                  parts from 7days to 21days bases on the design. We use 3-axis
                  milling and 3 +1 axis, 5 axis indexed milling processes to
                  manufacture parts.
                </p>
                <div className="ml-5">
                  <p>
                    <CaretRightFilled />
                    <span className="highlight-title">Our CNC lathes</span> with
                    live tooling so features like axial and radial holes, flats,
                    grooves, and slots can be machined. With our available
                    equipment, it allows us to work on different diameters and
                    lengths
                  </p>
                  <p>
                    <CaretRightFilled />
                    Our 13 machines of{" "}
                    <span className="highlight-title">
                      Swiss Auto lathes machines
                    </span>{" "}
                    could work on small and complex design, numerous. Experience
                    working on different markets and industry such as Medical,
                    Telecom, Electronic…
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row justify="space-between" className="mt-10">
          {[img1, img2, img3].map((img) => (
            <Col span={7} >
              <img src={img} alt="cnc-machining" className="h-[250px]" />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default CNCMachining;

const Container = styled.div`
  p {
    margin-bottom: 1rem;
  }
`;
