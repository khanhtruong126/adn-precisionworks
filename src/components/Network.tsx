import { Row, Col } from "antd";
import styled from "styled-components";
import { SECTION_ID } from "../App";
import NetworkMap from "./NetworkMap";
import SectionTitle from "./SectionTitle";

const Network = () => {
  const highlightTextClass = "text-app-red font-semibold";

  return (
    <>
      <SectionTitle title="About Us" />
      <Row align="middle" id={SECTION_ID.HOWITWORK} className="px-64 py-4">
        <Col span={17} className="pr-10">
          <ul
            style={{
              listStyleType: "disc",
              textAlign: "justify",
              lineHeight: "30px",
              fontSize: "1rem",
            }}
          >
            <li>
              <span className={highlightTextClass}>
                ADN Precision Works (APW)
              </span>
              , we are specialized in procurement of machined parts,
              manufactured at local CNC shops located in{" "}
              <span className={`${highlightTextClass} italic`}>
                Ho Chi Minh and Ha Noi
              </span>
              , Vietnam
            </li>
            <li>
              <span className={highlightTextClass}>Our networks</span> are
              experienced and expertise people in CNC manufacturing and
              Industrial management, have many years working with customers from
              different countries such as Japan, German, USA…
            </li>
            <li>
              <ul className="list-disc list-inside">
                <span className={highlightTextClass}>
                  Together, we are diversity team
                </span>
                , provide different services in
                <li>CNC Machining</li>
                <li>Sheet Metal Fabrication</li>
                <li>Swiss lathes machining</li>
                <li>
                  Secondary processes to make provide finished products to
                  customer
                </li>
              </ul>
            </li>
            <li>
              <span className={highlightTextClass}>
                @APW, work toward one goal
              </span>
              , is to provide customer satisfaction, support each others, aims
              to growth more together
            </li>
          </ul>
        </Col>
        <Col span={7}>
          <NetworkMap />
        </Col>
      </Row>
    </>
  );
};

export default Network;

const Networks = styled.div``;
