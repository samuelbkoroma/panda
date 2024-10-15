import React from "react";
import Slider from "react-slick";
import ProductCard from "./Product/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";
import FruitBig from "@/app/assets/fruitbig.jpg";
import star from "@/app/assets/star.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowRight
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#54524d",
        width: 70,
        height: 50,
        position: "absolute",
        right: "-70px",
        top: "30%",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
        padding: 10,
        alignItems: "center",
        transition: "background 0.3s ease",
      }}
      onClick={onClick}
      onMouseEnter={(e) => (e.target.style.color = "#FF9C28")}
      onMouseLeave={(e) => (e.target.style.color = "#54524d")}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <BsArrowLeft
      className={className}
      style={{
        ...style,
        display: "block",
        color: "#54524d",
        width: 50,
        height: 50,
        position: "absolute",
        left: "-50px",
        top: "30%",
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",

        padding: 10,
      }}
      onClick={onClick}
    />
  );
}

const CustomSlider = () => {
  const Setting = {
    dots: false,
    lazyLoad: true,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Div>
      <Slider {...Setting} className="tproduct_slider">
        {[...Array(6)].map((_, index) => (
          <ProductCard
            key={index}
            BigImage={FruitBig}
            StarImage={star}
            ItemName="GreenHouse Power"
            Price="13.00"
            Weight="(13kg)"
          />
        ))}
      </Slider>
    </Div>
  );
};

export default CustomSlider;

const Div = styled.div`
  .tproduct_slider {
    display: flex;
    justify-content: center;
    width: 1260px;
    height: 600px;
    margin: 0 auto;
  }
`;
