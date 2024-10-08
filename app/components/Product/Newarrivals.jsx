import styled from "styled-components";
import Image from "next/image";
import Veg from "@/app/assets/vegetable-1-2.jpg";
import star from "@/app/assets/star.png";
import ProductCard from "./ProductCard";
import MeatBig from "@/app/assets/meatbig.jpg";
import FruitBig from "@/app/assets/fruitbig.jpg";
import Bucket from "@/app/assets/bucket.png";
import Coke from "@/app/assets/banner2.jpg";
import Food from "@/app/assets/banner3.jpg";
import Forward from "@/app/assets/forward.png";
import Darkarrow from "@/app/assets/darkarrow.png";

const NewArrival = () => {
  return (
    <Div>
      <h1 className="online">New Arrival </h1>
      <div className="cards flex justify-center gap-5">
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
      </div>

      <div className="specials flex justify-center gap-4">
        <div className="special">
          <Image src={Coke} alt="arrivals" width={610} heigt={250} />
          <div>
            <p>Just Arrived</p>
            <h3>New Diet Cake</h3>
            <section className="shop-now flex gap-2 items-center">
              <h4>Shop Now</h4>
              <Image src={Forward} width={14} height={8} alt="arrow" />
            </section>
          </div>
        </div>

        <div className="secs">
          <Image src={Food} alt="arrivals" width={610} heigt={250} />
          <div>
            <p>Best Selling</p>
            <h3>Special Snack</h3>
            <section className="shop-now flex gap-2 items-center">
              <h4>Shop Now</h4>
              <Image src={Darkarrow} width={14} height={8} alt="arrow" />
            </section>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default NewArrival;

const Div = styled.div`
  margin-top: 100px;
  .online {
    font-size: 28px;
    font-family: "josefin sans", sans-serif;
    letter-spacing: 3px;
    background: linear-gradient(to top, #ff9c28, #ffffff, #ffffff);
    text-transform: uppercase;
    font-weight: 300;
    text-align: center;
    margin: 0 auto;
    width: 250px;
  }

  .product p {
    font-size: 18px;
    font-weight: 300;
  }

  .special {
    position: relative;
  }

  .special div {
    position: absolute;
    top: 50px;
    left: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #ffffff;
  }

  .special div p {
    font-size: 18px;
    letter-spacing: 1.8px;
    font-weight: 300;
    color: #ffffff;
  }

  .special div h3 {
    font-size: 40px;
    font-weight: 300;
    color: #ffffff;
  }

  .secs {
    position: relative;
  }

  .secs div {
    position: absolute;
    top: 50px;
    left: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #222222;
  }

  .secs div p {
    font-size: 18px;
    letter-spacing: 1.8px;
    font-weight: 300;
    color: #222222;
  }

  .secs div h3 {
    font-size: 40px;
    font-weight: 300;
    color: #222222;
  }
`;
