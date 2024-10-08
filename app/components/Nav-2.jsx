"use client";
import Image from "next/image";
import Logo from "@/app/assets/logo.png";
import Heart from "@/app/assets/heart.png";
import Bag from "@/app/assets/bag.png";
import Search from "@/app/assets/search.png";
import Account from "@/app/assets/account.png";
import styled from "styled-components";

const Navbars = () => {
  return (
    <Div>
      <div className="logo">
        <Image src={Logo} width={171} height={41} alt="logo" />
      </div>

      <ul className="menu-list">
        <li className="lists">Home</li>
        <li className="lists">SHOP</li>
        <li className="lists">ELEMENTS</li>
        <li className="lists">BLOG</li>
        <li className="lists">PAGES</li>
        <li className="lists">BUY PANDAI</li>
      </ul>

      <div className="icos">
        <Image
          src={Search}
          width={20}
          height={20}
          quality={100}
          alt="search"
          className="img"
        />
        <Image
          src={Account}
          width={20}
          height={20}
          quality={100}
          alt="account"
          className="img"
        />
        <Image
          src={Heart}
          width={20}
          height={20}
          quality={100}
          alt="heart"
          className="img"
        />
        <Image
          src={Bag}
          width={20}
          height={20}
          quality={100}
          alt="shop"
          className="img"
        />
      </div>
    </Div>
  );
};

export default Navbars;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;
  margin-top: 20px;

  .menu-list {
    display: flex;
    gap: 20px;
  }

  .lists {
    font-size: 14px;
    font-family: "josefin sans", sans-serif;
    font-weight: 500;
    text-transform: uppercase;
  }

  .lists:hover {
    background: linear-gradient(to top, #ff9c28, #ffffff, #ffffff);
    cursor: pointer;
  }

  .icos {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .img {
    object-fit: cover;
    width: 20px;
    height: 20px;
  }
`;
