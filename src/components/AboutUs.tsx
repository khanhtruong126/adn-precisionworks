import { CaretRightFilled } from "@ant-design/icons";
import SectionTitle from "./SectionTitle";

const AboutUs = () => {
  return (
    <div className="mb-5">
      <SectionTitle title="About Us"/>
      <div className="text-justify text-lg w-[85vw] lg:w-[85vw] sm:w-[95vw] m-auto">
        <div className="indent-10">
          <p>
            <CaretRightFilled />
            <span className="highlight-title">ADN Precision Works (ADN)</span>,
            your premier partner in procuring high-quality machined parts from
            the heart of Vietnam. With a commitment to excellence and a network
            of trusted manufacturing partners, we are your trusted source for
            precision-engineered components that meet and exceed industry
            standards.
          </p>
          <p>
            <CaretRightFilled />
            <span className="highlight-title">Vietnamese Expertise</span>:
            Vietnam has emerged as a hub for precision manufacturing, and we
            leverage the country's rich engineering talent and state-of-the-art
            facilities to deliver machined parts of the highest quality. Benefit
            from the expertise of skilled professionals dedicated to precision
            and accuracy.
          </p>
        </div>
        <div className="mx-16 lg:mx-16 sm:mx-4 mt-5">
          <ol className="list-decimal">
            <li>
              <b>Cost-Effective Solutions</b>: Our procurement service is not
              just about quality; it's also about cost-effectiveness. Vietnam's
              competitive manufacturing landscape allows us to provide you with
              exceptional value without compromising on the precision and
              quality of the machined parts.
            </li>
            <li className="my-5">
              <b>Diverse Manufacturing Capabilities</b>: Whether you require CNC
              machined components, turned parts, or complex assemblies, our
              procurement service covers a wide range of manufacturing
              capabilities. We work with a diverse array of materials, meeting
              the specifications of your projects with versatility and
              efficiency.
            </li>
            <li>
              <b>Quality Assurance</b>: Your satisfaction is our priority. Our
              stringent quality control processes ensure that each machined part
              meets rigorous standards. We collaborate closely with our
              manufacturing partners to guarantee that the finished products
              align with your exact specifications.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
