import { Row, Col, Card, Typography } from "antd";
import { SECTION_ID } from "../App";
import cncMilling from "../assets/cnc_milling_capabilities__1_.png";
import turning from "../assets/3d_printing.png";
import material from "../assets/technologies_im_homepage.png";
import sheetMetal from "../assets/sheet_metal_fabrication.png";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { apwRed } from "../colors";
import SectionTitle from "./SectionTitle";

const { Meta } = Card;
const { Title } = Typography;

interface CardProps {
  title: string;
  description: string;
  cover: string;
}

const CapacityCard = ({ title, description, cover }: CardProps) => {
  return (
    <Card hoverable cover={<img alt={title} src={cover} />}>
      <Meta title={title} description={description} />
    </Card>
  );
};

const Capacity = () => {
  const capacities = [
    {
      title: "Milling and Turning",
      description:
        "description description description description description",
      cover: cncMilling,
    },
    {
      title: "Auto lathes/Swiss machines",
      description:
        "description description description description description",
      cover: turning,
    },
    {
      title: "Sheet metal Fabricate",
      description:
        "description description description description description",
      cover: material,
    },
    {
      title: "Material",
      description:
        "description description description description description",
      cover: sheetMetal,
    },
    {
      title: "Coating and Surface finishing",
      description:
        "description description description description description",
      cover: sheetMetal,
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
    slidesToShow: 5,
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
          slidesToScroll: 1
        }
      }
    ],
  };

  return (
    <>
      <SectionTitle title="Capacity" />
      <Row
        id={SECTION_ID.CAPACITY}
        // gutter={30}
        justify="center"
        align="middle"
        className="py-5"
      >
        <Col span={1}>
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

        <Col span={1}>
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

export default Capacity;

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
