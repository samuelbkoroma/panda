import styled from "styled-components";
import Image from "next/image";

const ProductCard = ({ BigImage, StarImage, ItemName, Price, Weight }) => {
  return (
    <Div>
      <div className="card flex flex-col justify-center items-center gap-3">
        <Image src={BigImage} width={295} height={369} alt="vegetable" />
        <div className="star flex justify-center gap-3">
          <Image src={StarImage} width={12} height={11} alt="star" />
          <Image src={StarImage} width={12} height={11} alt="star" />
          <Image src={StarImage} width={12} height={11} alt="star" />
          <Image src={StarImage} width={12} height={11} alt="star" />
          <Image src={StarImage} width={12} height={11} alt="star" />
        </div>
        <div className="text-center">
          <h2 className="text-[16px] font-light">{ItemName}</h2>
          <p className="price  text-[22px] font-normal text-[#54524D] flex gap-1 items-center justify-center">
            {Price}
            <span className="text-[14px] font-light">{Weight}</span>
          </p>
        </div>
      </div>
    </Div>
  );
};

export default ProductCard;
const Div = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
`;
