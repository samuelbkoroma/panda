import styled from "styled-components";
import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

const ProductCard = ({ BigImage, ItemName, Price, Weight }) => {
  return (
    <Section className="product-card">
      <Image
        src={BigImage}
        width={295}
        height={369}
        alt="vegetable"
        aria-label={ItemName}
      />
      <div className="star-rating  flex justify-center gap-3">
        {[...Array(5)].map((_, index) => (
          <BsStarFill
            key={index}
            size={12}
            color="#FFD700"
            aria-hidden="true"
          />
        ))}
      </div>
      <div className="product-details text-center">
        <h2 className="product-name text-[16px] font-light">{ItemName}</h2>
        <p className="product-price text-[22px] font-normal text-[#54524D] flex gap-1 items-center justify-center">
          {Price}
          <span className="product-weight text-[14px] font-light">
            {Weight}
          </span>
        </p>
      </div>
    </Section>
  );
};

export default ProductCard;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 295px;
  height: 498.38px;
  margin-top: 50px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

// import styled from "styled-components";
// import Image from "next/image";
// import { BsStarFill } from "react-icons/bs";

// const ProductCard = ({ BigImage, ItemName, Price, Weight }) => {
//   return (
//     <Div className="card flex flex-col justify-center items-center gap-3 w-[295px] h-[498.38px]">
//       <Image src={BigImage} width={295} height={369} alt="vegetable" />
//       <div className="star flex justify-center gap-3">
//         {[...Array(5)].map((_, index) => (
//           <BsStarFill key={index} size={12} color="#FFD700" />
//         ))}
//       </div>
//       <div className="text-center">
//         <h2 className="text-[16px] font-light">{ItemName}</h2>
//         <p className="price  text-[22px] font-normal text-[#54524D] flex gap-1 items-center justify-center">
//           {Price}
//           <span className="text-[14px] font-light">{Weight}</span>
//         </p>
//       </div>
//     </Div>
//   );
// };

// export default ProductCard;
// const Div = styled.div`
//   margin-top: 50px;
// `;
