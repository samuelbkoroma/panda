"use client";

import Image from "next/image";
import Thumb from "@/app/assets/thump.png";
import Payment from "@/app/assets/payment.png";
import van from "@/app/assets/van.png";
import styled from "styled-components";

const HeadSec = () => {
  return (
    <Div>
      <div className="flex justify-center gap-5 items-center main-section">
        <div className="ship flex gap-2 items-center p-7">
          <Image src={van} width={44} height={31} alt="van" />
          <p className="paragraph">
            Free Shipping & Return <br />
            <span>Free shipping on order over $99</span>
          </p>
        </div>
        <div className="quality flex items-start middle-man text-center">
          <Image src={Thumb} width={44} height={31} alt="quality" />
          <p className="paragraph">
            Quality Guaranteed <br />
            <span>We offer high quality of products</span>
          </p>
        </div>
        <div className="payment flex gap-2 center p-7 items-start text-center">
          <Image src={Payment} width={44} height={31} alt="payment" />
          <p className="paragraph">
            Secure Payment <br />
            <span>We ensure secure payment!</span>
          </p>
        </div>
      </div>
    </Div>
  );
};

export default HeadSec;

const Div = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;

  .main-section {
    border: 1px solid #dfdfdf;
    height: 88px;
    width: 1000px;
    margin: 0 auto;
  }

  .paragraph {
    font-weight: 400;
    font-size: 14px;
    color: #222222;
    text-transform: uppercase;
    align-self: start;
  }

  .paragraph span {
    color: #777777;
    font-weight: 400;
    font-size: 14px;
    text-transform: capitalize;
  }

  .middle-man {
    border-left: 2px solid #dfdfdf;
    border-right: 2px solid #dfdfdf;
    padding: 0px 30px;
  }
`;
