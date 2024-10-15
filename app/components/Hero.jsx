import styled from "styled-components";
import LazyLoad from "./HeroSlider";
const Hero = () => {
  return (
    <Div>
      <LazyLoad />
    </Div>
  );
};

export default Hero;

const Div = styled.div`
  margin-top: 20px;
`;
