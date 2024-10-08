import styled from "styled-components";
import bigboy from "@/app/assets/bigboy.png";
import mike from "@/app/assets/mike.png";
import brokenheart from "@/app/assets/brokenheart.png";
import goldthumb from "@/app/assets/goldthumb.png";
import appple from "@/app/assets/apple.png";
import Image from "next/image";

const Why = () => {
  return (
    <Div>
      <div className="top flex flex-col gap-5">
        <h1 className="online">Why Top Product</h1>
        <h3 className="offline">100% Natural, 100% Organic</h3>
      </div>

      <div className="sections flex justify-center gap-10 items-center ">
        <div className="main-big">
          <div className="main">
            <Image src={brokenheart} width={90} height={90} alt="heart" />
            <h2>Good for Health</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> eiusmod tempor
              incididunt ut labore.
            </p>
          </div>

          <div className="main">
            <Image src={brokenheart} width={90} height={90} alt="heart" />
            <h2>Good for Health</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> eiusmod tempor
              incididunt ut labore.
            </p>
          </div>
        </div>
        <div className="">
          <Image src={bigboy} width={674} height={514} alt="fruit" />
        </div>
        <div className="main-big">
          <div className="main">
            <Image src={brokenheart} width={90} height={90} alt="heart" />
            <h2>Good for Health</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> eiusmod tempor
              incididunt ut labore.
            </p>
          </div>

          <div className="main">
            <Image src={brokenheart} width={90} height={90} alt="heart" />
            <h2>Good for Health</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur <br /> eiusmod tempor
              incididunt ut labore.
            </p>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default Why;

const Div = styled.div`
  background: #fafaf8;
  text-align: center;
  padding-top: 100px;
  padding-bottom: 100px;

  .online {
    font-size: 18px;
    font-family: "josefin sans", sans-serif;
    letter-spacing: 3px;
    background: linear-gradient(to top, #ff9c28, #ffffff, #ffffff);
    text-transform: uppercase;
    font-weight: 300;
    text-align: center;
    margin: 0 auto;
    width: 250px;
  }

  .offline {
    font-size: 40px;
    font-weight: 300;
    color: #222222;
  }

  .main-big {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 50px;
    padding: 20px;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }

  .main h2 {
    font-size: 30px;
    font-weight: 340;
    color: #222222;
  }

  .main p {
    text-align: left;
    color: #777777;
    font-size: 16px;
    font-weight: 300;
  }
`;
