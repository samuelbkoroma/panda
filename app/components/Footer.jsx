import styled from "styled-components";
import Image from "next/image";
import Location from "@/app/assets/location.png";
import Phone from "@/app/assets/phone.png";
import Logo from "@/app/assets/logo.png";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  return (
    <Div>
      <ul className="menulists flex justify-center gap-7 mb-10">
        <li>About Us </li>
        <li>Our Team </li>
        <li>Faq</li>
        <li>My Account</li>
        <li>Contact US</li>
      </ul>

      <div className="footer-middle flex justify-between items-center ">
        <div className="middle-1 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Image src={Phone} width={18} height={18} alt="phone" />
            <p className="text-[#54524D] text-[14px]">+234 32423443</p>
          </div>

          <div className="flex items-center  gap-2">
            <Image src={Location} width={18} height={18} alt="phone" />
            <p className="text-[#54524D] text-[14px]">Lumley bo</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={Location} width={18} height={18} alt="phone" />
            <p className="text-[#54524D] text-[14px]">Cole farm</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={Phone} width={18} height={18} alt="phone" />
            <p className="text-[#54524D] text-[14px]">+234 32423443</p>
          </div>
        </div>

        <div className="middle-2 flex flex-col gap-9">
          <div className="logo">
            <Image src={Logo} className="w-[171px] h-[41]" alt="logo" />
          </div>
          <div className="flex gap-8">
            <FaFacebookF className="icon" />
            <FaTwitter className="icon" />
            <FaPinterest className="icon" />
            <FaLinkedinIn className="icon" />
          </div>
        </div>

        <div className="middle-3 flex flex-col gap-3">
          <h1 className="text-right font-semibold text-[15px]">
            Subscribe Newsletter
          </h1>
          <p className="text-right text-[12px]">
            Subscribe to the Panda eCommerce Newsletter <br /> updates from your
            favourite products.
          </p>
        </div>
      </div>
    </Div>
  );
};

export default Footer;

const Div = styled.div`
  padding-top: 100px;
  padding-bottom: 100px;
  background-color: #f8f8f8;

  .con {
    color: #222222;
    font-weight: normal;
    font-size: 14px;
  }

  .menulists {
    color: #222222;
    font-weight: 700;
    font-size: 14px;
  }

  .footer-middle {
    margin: 0 40px;
    padding: 0;
  }
  .icon {
    color: #54524d;
    width: 18px;
    height: 18px;
  }

  .icon:hover {
    color: #ff9c28;
  }
`;
