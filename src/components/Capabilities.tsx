import { Row, Col, Card } from "antd";
import cncMachining from "../assets/cnc-machining/cnc-machining-background.jpg";
import material from "../assets/material/material-background.jpg";
import sheetMetal from "../assets/sheet-metal-fabrication/sheet-metal-fabrication-background.jpg";
// import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRef } from "react";
// import Slider from "react-slick";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CAPACITY_URLS, SECTION_ID } from "../router";
import SectionTitle from "./SectionTitle";

const { Meta } = Card;

interface CardProps {
  title: string;
  description: string;
  cover: string;
  url: string;
}

const CapacityCard = ({ title, description, cover, url }: CardProps) => {
  const navigate = useNavigate();

  return (
    <Card
      hoverable
      cover={
        <img
          alt={title}
          src={cover}
          onClick={() => {
            navigate("/capabilities/" + url);
            setTimeout(() => {
              const el = document.getElementById(url);
              if (el) {
                el.scrollIntoView({ behavior: "auto", block: "center" });
              }
            }, 0);
          }}
        />
      }
    >
      <Meta title={title} description={description} />
    </Card>
  );
};

const Capabilities = () => {
  const capacities = [
    {
      title: CAPACITY_URLS.CNC_MACHINING.label,
      description:
        "description description description description description",
      cover: cncMachining,
      url: CAPACITY_URLS.CNC_MACHINING.key,
    },
    {
      title: CAPACITY_URLS.SHEET_METAL_FABRICATION.label,
      description:
        "description description description description description",
      cover: sheetMetal,
      url: CAPACITY_URLS.SHEET_METAL_FABRICATION.key,
    },
    {
      title: CAPACITY_URLS.MATERIAL.label,
      description:
        "description description description description description",
      cover: material,
      url: CAPACITY_URLS.MATERIAL.key,
    },
  ];

  const carouselRef = useRef<any>();

  // const handleChangeCarousel = (type: "prev" | "next") => {
  //   if (!carouselRef.current) return;
  //   if (type === "next") {
  //     carouselRef.current.slickNext();
  //   } else {
  //     carouselRef.current.slickPrev();
  //   }
  // };

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   prevArrow: <></>,
  //   nextArrow: <></>,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };

  return (
    <div id={SECTION_ID.CAPABILITIES} className="flex flex-col items-center">
      <SectionTitle title="Capabilities" />
      <Row
        gutter={[25, 25]}
        justify="center"
        align="middle"
        className="pt-10 w-[90%]"
      >
        {/* <Col span={1} lg={{ span: 1, offset: 0 }} xs={{ span: 3 }}>
          <LeftOutlined
            style={{ fontSize: "2rem" }}
            onClick={() => {
              handleChangeCarousel("prev");
            }}
          />
        </Col> */}

        {/* <Col span={18} className="max-w-[80vw]"> */}
        {/* <SliderContainer>
            <Slider
              {...settings}
              ref={(ref) => {
                carouselRef.current = ref;
              }}
            > */}
        {capacities.map((item) => (
          <Col span={8} lg={8} md={12} sm={24} xs={24}>
            <CapacityCard {...item} key={item.url} />
          </Col>
        ))}
        {/* </Slider> */}
        {/* </SliderContainer> */}
        {/* </Col> */}

        {/* <Col span={1} lg={{ span: 1, offset: 0 }} xs={{ span: 3, offset: 1 }}>
          <RightOutlined
            style={{ fontSize: "2rem" }}
            onClick={() => {
              handleChangeCarousel("next");
            }}
          />
        </Col> */}
      </Row>
    </div>
  );
};

export default Capabilities;

// const SliderContainer = styled.div`
//   width: 100%;

//   .slick-list {
//     .slick-track {
//       display: flex;
//       gap: 1rem;

//       div.ant-card {
//         height: 370px !important;
//       }
//     }
//   }

//   .slick-dots {
//     bottom: -40px;
//   }
// `;
