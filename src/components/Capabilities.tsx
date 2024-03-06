import { Row, Col, Card } from "antd";
import { SECTION_ID } from "../App";
import cncMilling from "../assets/cnc_milling_capabilities__1_.png";
import turning from "../assets/3d_printing.png";
import material from "../assets/technologies_im_homepage.png";
import sheetMetal from "../assets/sheet_metal_fabrication.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { CAPACITY_URLS } from "../router";

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
      cover: cncMilling,
      url: CAPACITY_URLS.CNC_MACHINING.key,
    },
    {
      title: CAPACITY_URLS.SHEET_METAL_FABRICATION.label,
      description:
        "description description description description description",
      cover: material,
      url: CAPACITY_URLS.SHEET_METAL_FABRICATION.key,
    },
    {
      title: CAPACITY_URLS.MATERIAL.label,
      description:
        "description description description description description",
      cover: sheetMetal,
      url: CAPACITY_URLS.MATERIAL.key,
    },
  ];

  const carouselRef = useRef<any>();

  const handleChangeCarousel = (type: "prev" | "next") => {
    if (!carouselRef.current) return;
    if (type === "next") {
      carouselRef.current.slickNext();
    } else {
      carouselRef.current.slickPrev();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    prevArrow: <></>,
    nextArrow: <></>,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Row
        id={SECTION_ID.CAPABILITIES}
        // gutter={30}
        justify="center"
        align="middle"
        className="py-5"
      >
        <Col span={1} lg={{ span: 1, offset: 0 }} xs={{ span: 3 }}>
          <LeftOutlined
            style={{ fontSize: "2rem" }}
            onClick={() => {
              handleChangeCarousel("prev");
            }}
          />
        </Col>

        <Col span={18} className="max-w-[80vw]">
          <SliderContainer>
            <Slider
              {...settings}
              ref={(ref) => {
                carouselRef.current = ref;
              }}
            >
              {capacities.map((item) => (
                <CapacityCard {...item} />
              ))}
            </Slider>
          </SliderContainer>
        </Col>

        <Col span={1} lg={{ span: 1, offset: 0 }} xs={{ span: 3, offset: 1 }}>
          <RightOutlined
            style={{ fontSize: "2rem" }}
            onClick={() => {
              handleChangeCarousel("next");
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default Capabilities;

const SliderContainer = styled.div`
  width: 100%;

  .slick-list {
    .slick-track {
      display: flex;
      gap: 1rem;

      div.ant-card {
        height: 300px !important;
      }
    }
  }
`;
