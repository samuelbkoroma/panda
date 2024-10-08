import styled from "styled-components";
import Image from "next/image";
import Accountman from "@/app/assets/accountman.png";
import BigCake from "@/app/assets/bigcake.jpg";
import share from "@/app/assets/share.png";
import Cake from "@/app/assets/cake.jpg";
import wine from "@/app/assets/wine.jpg";

const Blog = () => {
  return (
    <Div>
      <div className="top flex flex-col gap-5">
        <h1 className="online">Our Blog</h1>
        <h3 className="offline">Recent Stories And Article</h3>
      </div>
      <div className="cards flex gap-7 justify-center">
        <div className="card-1 flex flex-col gap-3 h-[477px] w-[400px] shadow">
          <Image
            className="w-full h-[250px] object-cover"
            alt="sweet cake"
            src={BigCake}
          />

          <p className="text-[14px] font-light text-[#777777]">Daily Needs</p>
          <h2 className="text-[24px] font-light text-[#222222]">
            New Trends In 2024
          </h2>
          <div className="flex justify-center items-center gap-7">
            <Image src={Accountman} height={30} width={30} alt="phone" />
            <h2 className="text-[13px] font-normal text-[#54524D]">John Doe</h2>
            <Image src={share} height={18} width={18} alt="phone" />
          </div>
          <p className="text-[16px] text-[#54524D] font-light">
            There are many variations of passages of <br /> Lorem Ipsum
            available, <span className="text-[#FF9C28]">(read more)</span>
          </p>
        </div>
        {/* //card 2 */}
        <div className="card-1 flex flex-col gap-3 h-[477px] w-[400px] shadow">
          <Image
            className="w-full h-[250px] object-cover"
            alt="sweet cake"
            src={Cake}
          />

          <p className="text-[14px] font-light text-[#777777]">Daily Needs</p>
          <h2 className="text-[24px] font-light text-[#222222]">
            New Trends In 2024
          </h2>
          <div className="flex justify-center items-center gap-7">
            <Image src={Accountman} height={30} width={30} alt="phone" />
            <h2 className="text-[13px] font-normal text-[#54524D]">John Doe</h2>
            <Image src={share} height={18} width={18} alt="phone" />
          </div>
          <p className="text-[16px] text-[#54524D] font-light">
            There are many variations of passages of <br /> Lorem Ipsum
            available, <span className="text-[#FF9C28]">(read more)</span>
          </p>
        </div>
        {/* //card 3 */}
        <div className="card-1 flex flex-col gap-3 h-[477px] w-[400px] shadow">
          <Image
            className="w-full h-[250px] object-cover"
            alt="sweet cake"
            src={wine}
          />

          <p className="text-[14px] font-light text-[#777777]">Daily Needs</p>
          <h2 className="text-[24px] font-light text-[#222222]">
            New Trends In 2024
          </h2>
          <div className="flex justify-center items-center gap-7">
            <Image src={Accountman} height={30} width={30} alt="phone" />
            <h2 className="text-[13px] font-normal text-[#54524D]">John Doe</h2>
            <Image src={share} height={18} width={18} alt="phone" />
          </div>
          <p className="text-[16px] text-[#54524D] font-light">
            There are many variations of passages of <br /> Lorem Ipsum
            available, <span className="text-[#FF9C28]">(read more)</span>
          </p>
        </div>
      </div>
    </Div>
  );
};

export default Blog;

const Div = styled.div`
  margin-top: 100px;
  text-align: center;
  margin-bottom: 100px;
  .online {
    font-size: 18px;
    font-family: "josefin sans", sans-serif;
    letter-spacing: 3px;
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
    margin-bottom: 50px;
  }
`;
