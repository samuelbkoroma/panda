import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Product1 from "@/app/assets/1.jpg";
import Product2 from "@/app/assets/2.jpg";
import Product3 from "@/app/assets/3.jpg";
import Product4 from "@/app/assets/4.jpg";
import Product5 from "@/app/assets/5.jpg";
import Veg from "@/app/assets/vegetable-1-2.jpg";
import star from "@/app/assets/star.png";
import ProductCard from "./ProductCard";
import MeatBig from "@/app/assets/meatbig.jpg";
import FruitBig from "@/app/assets/fruitbig.jpg";
import Drinkbig from "@/app/assets/drinkbig.jpg";
import Bucket from "@/app/assets/bucket.png";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

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

const TopProduct = () => {
  const settings = {
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
      <h1 className="online">Top Products </h1>
      <div className="products flex gap-9 text-center justify-center mt-10 ">
        <div className="product">
          <Image src={Product1} width={160} height={130} />
          <h1>Canned</h1>
        </div>

        <div className="product">
          <Image src={Product2} width={160} height={130} />
          <h1>Fruits</h1>
        </div>

        <div className="product">
          <Image src={Product3} width={160} height={130} />
          <h1>Drinks</h1>
        </div>

        <div className="product">
          <Image src={Product4} width={160} height={130} />
          <h1> Meat</h1>
        </div>

        <div className="product">
          <Image src={Product5} width={160} height={130} />
          <h1>Vegetable</h1>
        </div>
      </div>

      <Slider {...settings} className="tproduct_slider">
        <ProductCard
          BigImage={FruitBig}
          StarImage={star}
          ItemName="GreenHouse Power"
          Price="13.00"
          Weight="(13kg)"
        />
        <ProductCard
          BigImage={Veg}
          StarImage={star}
          ItemName="GreenHouse Power"
          Price="13.00"
          Weight="(13kg)"
        />
        <ProductCard
          BigImage={Bucket}
          StarImage={star}
          ItemName="GreenHouse Power"
          Price="13.00"
          Weight="(13kg)"
        />
        <ProductCard
          BigImage={MeatBig}
          StarImage={star}
          ItemName="GreenHouse Power"
          Price="13.00"
          Weight="(13kg)"
        />
        <ProductCard
          BigImage={Drinkbig}
          StarImage={star}
          ItemName="GreenHouse Power"
          Price="13.00"
          Weight="(13kg)"
        />
      </Slider>
    </Div>
  );
};

export default TopProduct;

const Div = styled.div`
  margin-top: 100px;
  position: relative;

  .online {
    font-size: 20px;
    font-family: "josefin sans", sans-serif;
    letter-spacing: 3px;
    background: linear-gradient(to top, #ff9c28, #ffffff, #ffffff);
    text-transform: uppercase;
    font-weight: 300;
    text-align: center;
    margin: 0 auto;
    width: 250px;
  }

  .tproduct_slider {
    display: flex;
    justify-content: center;

    width: 1260px;
    height: 792px;
    margin: 0 auto;
  }
  .product p {
    font-size: 18px;
    font-weight: 300;
  }
  .slick-slide {
    width: 320px !important;
  }
`;
