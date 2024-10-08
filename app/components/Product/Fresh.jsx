import styled from "styled-components";
import Image from "next/image";
import Bigboybanner from "@/app/assets/bigboybanner.png";

const Fresh = () => {
  return (
    <Div>
      <Image src={Bigboybanner} className="w-full" height={504} alt="banner" />
      <div className="middle-banner">
        <p className="online">100% ORGANIC</p>
        <h3>
          Fresh Vegetables <br />
          for you
        </h3>
        <button className="shop">Shop</button>
      </div>
    </Div>
  );
};

export default Fresh;

const Div = styled.div`
  position: relative;

  .online {
    font-size: 18px;
    font-family: "josefin sans", sans-serif;
    letter-spacing: 3px;
    background: linear-gradient(to top, #ff9c28, #ffffff, #ffffff);
    text-transform: uppercase;
    font-weight: 300;
    width: 190px;
  }

  .middle-banner {
    position: absolute;
    top: 50%; /* Adjust this based on the vertical position of the target area */
    left: calc(
      22% + 100px
    ); /* Adjust the offset from the center of the image */
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    align-items: start;
    justify-content: start;
  }

  .shop {
    width: 183.91px;
    height: 51.39px;
    text-align: center;
    background-color: #333333;
    color: #ffffff;
  }
  .middle-banner h3 {
    font-size: 60px;
    font-weight: 310;
  }
`;
