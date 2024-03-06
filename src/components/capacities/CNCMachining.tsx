import { CaretRightFilled } from "@ant-design/icons";
import styled from "styled-components";

const CNCMachining = () => {
  return (
    <Container>
      <h1 className="text-center">CNC Machining</h1>
      <div className="mx-5 lg:mx-40 text-justify mt-5 text-lg">
        <p>
          <CaretRightFilled />
          Take advantage of our multi-axis machining capabilities that enable us
          to handle intricate and three-dimensional components. This allows us
          to achieve superior precision in every dimension, bringing your
          designs to life with exceptional accuracy.
        </p>
        <p>
          <CaretRightFilled />
          <span className="highlight-title">Custom Solutions</span>: No two
          projects are alike, and we understand the importance of tailored
          solutions. Our team of skilled engineers collaborates with you to
          understand your specific requirements, offering customized CNC
          precision services that meet and exceed your expectations.
        </p>
        <div>
          <p>
            <CaretRightFilled />
            <span className="highlight-title">
              Our CNC Milling/Turning
            </span>{" "}
            process produces custom prototypes and end-use production parts from
            7days to 21days bases on the design. We use 3-axis milling and 3 +1
            axis, 5 axis indexed milling processes to manufacture parts.
          </p>
          <div className="ml-5">
            <p>
              <CaretRightFilled />
              <span className="highlight-title">Our CNC lathes</span> with live
              tooling so features like axial and radial holes, flats, grooves,
              and slots can be machined. With our available equipment, it allows
              us to work on different diameters and lengths
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
    </Container>
  );
};

export default CNCMachining;

const Container = styled.div`
  p {
    margin-bottom: 1rem;
  }
`;
