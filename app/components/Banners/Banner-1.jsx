import slider1 from "@/app/assets/slider1.jpg";
import styled from "styled-components";

const Banner = () => {
  return (
    <Div background={slider1}>
      <div className="banner1-sec">
        <h2 className="online">FROM ONLINE STORE</h2>

        <h3 className="bday">
          Panda Birthday <br />
          <p>Collection</p>
        </h3>
        <button className="shop">Shop now</button>
      </div>
    </Div>
  );
};

export default Banner;

const Div = styled.div`
  height: 600px;
  width: 100%;
  background-image: url(${(props) => props.background.src});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  .banner1-sec {
    position: absolute; /* Allow precise positioning */
    top: 50%; /* Adjust this based on the vertical position of the target area */
    left: calc(
      22% + 100px
    ); /* Adjust the offset from the center of the image */
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }

  .online {
    font-size: 18px;
    font-family: "josefin sans", sans-serif;
    letter-spacing: 3px;
    background: linear-gradient(to top, #ff9c28, #ffffff, #ffffff);
    width: 256px;
    text-transform: uppercase;
    font-weight: 400;
  }

  .bday {
    font-weight: 300;
    font-family: "josefin sans", sans-serif;
    font-size: 60px;
    text-transform: capitalize;
  }

  .shop {
    width: 183.91px;
    height: 51.39px;
    text-align: center;
    background-color: #333333;
    color: #ffffff;
  }
`;
