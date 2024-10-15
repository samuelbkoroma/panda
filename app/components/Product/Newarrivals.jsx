import styled from "styled-components";

import Veg from "@/app/assets/vegetable-1-2.jpg";
import star from "@/app/assets/star.png";

import CustomSlider from "../CustomSlider";

const NewArrival = () => {
  return (
    <Div>
      <h1 className="online">New Arrival </h1>
      <CustomSlider />
    </Div>
  );
};

export default NewArrival;

const Div = styled.div`
  margin-top: 100px;
  .online {
    font-size: 28px;
    font-family: "josefin sans", sans-serif;
    letter-spacing: 3px;
    background: linear-gradient(to top, #ff9c28, #ffffff, #ffffff);
    text-transform: uppercase;
    font-weight: 300;
    text-align: center;
    margin: 0 auto;
    width: 250px;
  }
`;
