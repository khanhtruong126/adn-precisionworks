import { useRef } from "react";
import vendor1 from "../assets/inside-our-vender/vendor1.jpg";
import vendor2 from "../assets/inside-our-vender/vendor2.jpg";
import vendor3 from "../assets/inside-our-vender/vendor3.jpg";
import vendor4 from "../assets/inside-our-vender/vendor4.jpg";
import vendor5 from "../assets/inside-our-vender/vendor5.jpg";
import vendor6 from "../assets/inside-our-vender/vendor6.jpg";
import SectionTitle from "./SectionTitle";
import { Col, Row } from "antd";
import styled from "styled-components";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import Slider from "react-slick";

const InsideOurVendor = () => {
  const vendorImages = [vendor1, vendor2, vendor3, vendor4, vendor5, vendor6];
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
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="inside-our-vender"
      className="pt-5 pb-8 flex flex-col items-center"
    >
      <SectionTitle title="Inside Our Vendor" />
      <Row gutter={25} justify="space-between" align="middle" className="w-full px-10">
        <Col span={1} lg={1} xs={{ span: 3 }} className="text-end">
          <LeftOutlined
            style={{ fontSize: "2rem" }}
            onClick={() => {
              handleChangeCarousel("prev");
            }}
          />
        </Col>

        <Col span={22} lg={22} xs={18} className="">
          <SliderContainer>
            <Slider
              {...settings}
              ref={(ref) => {
                carouselRef.current = ref;
              }}
            >
              {vendorImages.map((item, index) => (
                <div key={index} className="!w-fit">
                  <img
                    src={item}
                    alt={`vendir${index}`}
                    className="h-[200px] w-[300px]"
                  />
                </div>
              ))}
            </Slider>
          </SliderContainer>
        </Col>

        <Col span={1} lg={1} xs={{ span: 3 }}>
          <RightOutlined
            style={{ fontSize: "2rem" }}
            onClick={() => {
              handleChangeCarousel("next");
            }}
          />
        </Col>
      </Row>
    </section>
  );
};

export default InsideOurVendor;

const SliderContainer = styled.div`
  width: 100%;

  .slick-list {
    .slick-track {
      display: flex;
      gap: 2rem;

      .slick-active.slick-current {
        display: flex;
        justify-content: center;

        & > div {
            width: fit-content;
        }
      }
    }
  }

  .slick-dots {
    bottom: -40px;
  }
`;
