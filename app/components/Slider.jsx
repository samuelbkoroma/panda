"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Banner from "./Banners/Banner-1";
import SecondBanner from "./Banners/Banner-2";

function LazyLoad() {
  const settings = {
    lazyLoad: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div>
          <Banner />
        </div>
        <div>
          <SecondBanner />
        </div>
      </Slider>
    </div>
  );
}

export default LazyLoad;

const Div = styled.div``;
