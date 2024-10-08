import styled from "styled-components";
import Image from "next/image";
import chokobby from "@/app/assets/chokobb.png";
import star from "@/app/assets/star.png";
import wine from "@/app/assets/vegetable-1-2.jpg";
import trending from "@/app/assets/trending1.jpg";
import meat from "@/app/assets/meatbig.jpg";
import drink from "@/app/assets/drinkbig.jpg";
import bigcake from "@/app/assets/bigcake.jpg";

const Best = () => {
  return (
    <Div>
      <div className="flex justify-center gap-[100px]">
        <div className="trend flex flex-col gap-5">
          <h2 className="trending">Trending </h2>
          <div className="trend__item flex items-center gap-2">
            <Image src={chokobby} alt="chokobby" width={150} height={188} />.
            <div className="writing flex flex-col gap-5 justify-center">
              <div className="stars flex gap-2">
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
              </div>
              <h2 className="text-[16px] font-light text-[#54524D]">
                Delicious Milk
              </h2>
              <h4 className="text-[22px] font-normal  text-[#54524D]">
                $29.00
              </h4>
            </div>
          </div>
          {/* //item2 */}
          <div className="trend__item flex items-center gap-2">
            <Image src={meat} alt="chokobby" width={150} height={188} />.
            <div className="writing flex flex-col gap-5 justify-center">
              <div className="stars flex gap-2">
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
              </div>
              <h2 className="text-[16px] font-light text-[#54524D]">
                Delicious Milk
              </h2>
              <h4 className="text-[22px] font-normal  text-[#54524D]">
                $29.00
              </h4>
            </div>
          </div>

          {/* //item3 */}

          <div className="trend__item flex items-center gap-2">
            <Image src={wine} alt="chokobby" width={150} height={188} />.
            <div className="writing flex flex-col gap-5 justify-center">
              <div className="stars flex gap-2">
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
              </div>
              <h2 className="text-[16px] font-light text-[#54524D]">
                Delicious Milk
              </h2>
              <h4 className="text-[22px] font-normal  text-[#54524D]">
                $29.00
              </h4>
            </div>
          </div>
        </div>

        <div className="trend flex flex-col gap-5">
          <h2 className="trending">Best Selling </h2>
          <div className="trend__item flex items-center gap-2">
            <Image src={trending} alt="chokobby" width={150} height={188} />.
            <div className="writing flex flex-col gap-5 justify-center">
              <div className="stars flex gap-2">
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
              </div>
              <h2 className="text-[16px] font-light text-[#54524D]">
                Delicious Milk
              </h2>
              <h4 className="text-[22px] font-normal  text-[#54524D]">
                $29.00
              </h4>
            </div>
          </div>
          {/* //item2 */}
          <div className="trend__item flex items-center gap-2">
            <Image src={trending} alt="chokobby" width={150} height={188} />.
            <div className="writing flex flex-col gap-5 justify-center">
              <div className="stars flex gap-2">
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
              </div>
              <h2 className="text-[16px] font-light text-[#54524D]">
                Delicious Milk
              </h2>
              <h4 className="text-[22px] font-normal  text-[#54524D]">
                $29.00
              </h4>
            </div>
          </div>

          {/* //item3 */}

          <div className="trend__item flex items-center gap-2">
            <Image src={drink} alt="chokobby" width={150} height={188} />.
            <div className="writing flex flex-col gap-5 justify-center">
              <div className="stars flex gap-2">
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
              </div>
              <h2 className="text-[16px] font-light text-[#54524D]">
                Delicious Milk
              </h2>
              <h4 className="text-[22px] font-normal  text-[#54524D]">
                $29.00
              </h4>
            </div>
          </div>
        </div>
        <div className="trend flex flex-col gap-5">
          <h2 className="trending">Top Rated </h2>
          <div className="trend__item flex items-center gap-2">
            <Image src={drink} alt="chokobby" width={150} height={188} />.
            <div className="writing flex flex-col gap-5 justify-center">
              <div className="stars flex gap-2">
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
              </div>
              <h2 className="text-[16px] font-light text-[#54524D]">
                Delicious Milk
              </h2>
              <h4 className="text-[22px] font-normal  text-[#54524D]">
                $29.00
              </h4>
            </div>
          </div>
          {/* //item2 */}
          <div className="trend__item flex items-center gap-2">
            <Image src={chokobby} alt="chokobby" width={150} height={188} />.
            <div className="writing flex flex-col gap-5 justify-center">
              <div className="stars flex gap-2">
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
              </div>
              <h2 className="text-[16px] font-light text-[#54524D]">
                Delicious Milk
              </h2>
              <h4 className="text-[22px] font-normal  text-[#54524D]">
                $29.00
              </h4>
            </div>
          </div>

          {/* //item3 */}

          <div className="trend__item flex items-center gap-2">
            <Image src={meat} alt="chokobby" width={150} height={188} />.
            <div className="writing flex flex-col gap-5 justify-center">
              <div className="stars flex gap-2">
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
                <Image src={star} width={12} height={11} alt="star" />
              </div>
              <h2 className="text-[16px] font-light text-[#54524D]">
                Delicious Milk
              </h2>
              <h4 className="text-[22px] font-normal  text-[#54524D]">
                $29.00
              </h4>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default Best;

const Div = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  .trending {
    border-bottom: 1px solid #e0dede;
  }
`;
