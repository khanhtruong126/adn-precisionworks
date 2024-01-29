import { Row, Col } from "antd";
import React from "react";
import styled from "styled-components";
import { SECTION_ID } from "../App";

const Network = () => {
  return (
    <Row id={SECTION_ID.NETWORKS}>
      <Col span={16}>
        <ul>
          <li>
            We, một nhóm những doanh nghiệp nhỏ chuyên về lĩnh vực CNC, Metal…
            có chung chí hướng về việc phát triển vương ra thế giới, đem tiêu
            chí chất lượng dịch vụ tới khách hang2 nhằm tạo nên tiếng tăm và lợi
            nhaận.
          </li>
          <li>
            Chung tôi gồm 4 CNC shop tại HCM, trung tâm cong nghe Khoa Hoc KT
            hang đầu việt nam và 2 CNC shop ờ Hà Nội, cho phép chung tôi tiếp
            cận với nguồn nguyên vật liệu dồi dào từ các thị trường khác . Tất
            cả shop đảm bảo tuan thủ tiêu chuẩn chat luong ISO9001.
          </li>
          <li>
            Tiêu chuẩn hóa qui trình kiểm soát và communicate để đảm bảo tiến độ
            và chất lượng sản phầm. Certified ISO 9001
          </li>
          <li>Da dạng production từ low volumn to production</li>
          <li>
            Hỗ trợ nhanh chóng dat mục tiêu instant quote and fast production
          </li>
          <li>
            Support on material sourcing, Techincal testsss by experience
            Engineers
          </li>
          <li>
            Delivery and Order overall mange by Distribution Team located in
            HCM.
          </li>
          <li>Compliance: ISO 9001 : 2015</li>
        </ul>
      </Col>
      <Col span={8}></Col>
    </Row>
  );
};

export default Network;

const Networks = styled.div`
`;
