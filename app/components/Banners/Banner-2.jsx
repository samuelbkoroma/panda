import introSlider from "@/app/assets/intro-slider2.png";
import styled from "styled-components";
import FloatImage from "@/app/assets/floating-image.png";
import Brand from "@/app/assets/brand.png";
import Image from "next/image";

const SecondBanner = () => {
  return (
    <Div>
      <div className="image-bounce">
        <Image
          src={FloatImage}
          width={587}
          height={490}
          alt="banner"
          className="object-cover"
        />
      </div>
      <div className="texts">
        <Image src={Brand} alt="brand" width={269} height={73} />

        <h2 className="best-product">
          New Best Product <br />
          With Cocoa Cake and Oil
        </h2>

        <div className="btn-price">
          <button className="shop">Shop now</button>

          <p className="price">
            Only <span>29.00</span>
          </p>
        </div>
      </div>
    </Div>
  );
};

export default SecondBanner;

const Div = styled.div`
  height: 600px;
  width: 100%;
  background-image: url("@/app/assets/intro-slider2.png");
  background-size: cover;
  background-position: center;
  display: flex;
  gap: 100px;
  justify-content: center;
  align-items: center;

  .image-bounce:hover {
  }

  .texts {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .shop {
    width: 183.91px;
    height: 51.39px;
    text-align: center;
    background-color: #333333;
    color: #ffffff;
  }
  .btn-price {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .best-product {
    font-weight: 300;
    font-family: "josefin sans", sans-serif;
    font-size: 40px;
    text-transform: capitalize;
  }

  .price {
    font-size: 20px;
  }

  .price span {
    background: linear-gradient(to top, #ff9c28, #ffffff, #ffffff);
    font-size: 40px;
    font-weight: 300;
  }
`;
