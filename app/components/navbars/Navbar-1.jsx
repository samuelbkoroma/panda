"use client";
import Image from "next/image";
import LocationPic from "@/app/assets/location.png";
import Phone from "@/app/assets/phone.png";
import Line from "@/app/assets/line.png";
import Flag from "@/app/assets/flag.png";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Div>
      <div className="header">
        <div className="nav-section-1">
          <div className="phone flex items-center gap-2">
            <Image
              src={Phone}
              alt="phone"
              width={18}
              height={18}
              quality={100}
            />
            <p>+236 787 000</p>
          </div>
          <div>
            <Image src={Line} width={2} height={19} quality={100} alt="line" />
          </div>
          <div className="location flex items-center gap-2">
            <Image
              src={LocationPic}
              alt="location"
              width={18}
              height={18}
              quality={100}
              className="hover:text-red-500"
            />
            <p>25 West 21th street, maimi fl, usa</p>
          </div>
        </div>

        <div className="nav-section-2">
          <div className="nav-2-1 flex items-center gap-5">
            <div className="currency flex items-center gap-2">
              <p>USD</p>
              <MdKeyboardArrowDown className="arrow-down" />
            </div>
            <div className="language flex items-center gap-2">
              <Image
                src={Flag}
                alt="location"
                width={18}
                height={18}
                quality={100}
                className="hover:text-red-500"
              />
              <p>Eng</p>
              <MdKeyboardArrowDown className="arrow-down" />
            </div>
          </div>
          <Image src={Line} width={2} height={19} quality={100} alt="line" />
          <div className="nav-2-2 flex gap-8">
            <FaFacebookF className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaLinkedinIn className="icon" />
          </div>
        </div>
      </div>
    </Div>
  );
};

export default Navbar;

const Div = styled.div`
  .header {
    font-family: "josefin sans", sans-serif;
    font-weight: 300;
    display: flex;
    justify-content: space-around;
    text-transform: capitalize;
    height: 50px;
    border-bottom: 2px solid #e0dedf;
  }

  .phone p {
    font-family: "josefin sans", sans-serif;
    font-weight: 300;
  }
  p:hover {
    color: #ff9c28;
  }

  .icon {
    color: #54524d;
    width: 18px;
    height: 18px;
  }

  .icon:hover {
    color: #ff9c28;
  }

  .arrow-down {
    color: #54524d;
  }

  .nav-section-1 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

  .nav-section-2 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
