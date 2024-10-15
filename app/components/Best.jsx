import styled from "styled-components";
import Image from "next/image";
import chokobby from "@/app/assets/chokobb.png";
import wine from "@/app/assets/vegetable-1-2.jpg";
import trending from "@/app/assets/trending1.jpg";
import meat from "@/app/assets/meatbig.jpg";
import drink from "@/app/assets/drinkbig.jpg";
import { BsStarFill, BsStar } from "react-icons/bs"; // Import outlined star

// Reusable TrendItem component with conditional rating
const TrendItem = ({ imageSrc, alt, title, price, rating }) => {
  return (
    <div className="trend__item flex items-center gap-2">
      <Image src={imageSrc} alt={alt} width={150} height={188} />
      <div className="writing flex flex-col gap-5 justify-center">
        <div className="stars flex gap-2">
          {[...Array(5)].map((_, index) =>
            index < rating ? (
              <BsStarFill key={index} size={12} color="#FFD700" />
            ) : (
              <BsStar key={index} size={12} color="#FFD700" />
            )
          )}
        </div>
        <h2 className="text-[16px] font-light text-[#54524D]">{title}</h2>
        <h4 className="text-[22px] font-normal text-[#54524D]">${price}</h4>
      </div>
    </div>
  );
};

const Best = () => {
  const trendItems = [
    {
      imageSrc: chokobby,
      alt: "chokobby",
      title: "Delicious Milk",
      price: 29.0,
      rating: 4,
    },
    {
      imageSrc: meat,
      alt: "meat",
      title: "Juicy Meat",
      price: 45.0,
      rating: 5,
    },
    { imageSrc: wine, alt: "wine", title: "Fine Wine", price: 32.0, rating: 3 },
  ];

  const bestSellingItems = [
    {
      imageSrc: trending,
      alt: "trending",
      title: "Tasty Cake",
      price: 19.0,
      rating: 5,
    },
    {
      imageSrc: drink,
      alt: "drink",
      title: "Refreshing Drink",
      price: 25.0,
      rating: 4,
    },
    {
      imageSrc: drink,
      alt: "drink",
      title: "Refreshing Drink",
      price: 25.0,
      rating: 4,
    },
  ];

  const topRatedItems = [
    {
      imageSrc: drink,
      alt: "drink",
      title: "Delicious Drink",
      price: 35.0,
      rating: 5,
    },
    {
      imageSrc: chokobby,
      alt: "chokobby",
      title: "Smooth Chocolate",
      price: 29.0,
      rating: 4,
    },
    {
      imageSrc: meat,
      alt: "meat",
      title: "Grilled Meat",
      price: 39.0,
      rating: 5,
    },
  ];

  return (
    <Div>
      <div className="flex justify-center gap-[100px]">
        <div className="trend flex flex-col gap-5">
          <h2 className="trending">Trending</h2>
          {trendItems.map((item, index) => (
            <TrendItem key={index} {...item} />
          ))}
        </div>

        <div className="trend flex flex-col gap-5">
          <h2 className="trending">Best Selling</h2>
          {bestSellingItems.map((item, index) => (
            <TrendItem key={index} {...item} />
          ))}
        </div>

        <div className="trend flex flex-col gap-5">
          <h2 className="trending">Top Rated</h2>
          {topRatedItems.map((item, index) => (
            <TrendItem key={index} {...item} />
          ))}
        </div>
      </div>
    </Div>
  );
};

export default Best;

// Styled-component enhancements
const Div = styled.div`
  margin: 100px 0;
  .trending {
    border-bottom: 1px solid #e0dede;
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 5px;
  }
  .trend__item {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    }
  }
  .stars {
    display: flex;
    gap: 5px;
  }
`;
