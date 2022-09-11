import React from "react";
import styled from "styled-components";

import img1 from "../assets/Nfts/bighead-1.svg";
import img2 from "../assets/Nfts/bighead-2.svg";
import img3 from "../assets/Nfts/bighead-3.svg";
import img4 from "../assets/Nfts/bighead-4.svg";
import img5 from "../assets/Nfts/bighead-5.svg";
import img6 from "../assets/Nfts/bighead-6.svg";
import img7 from "../assets/Nfts/bighead-7.svg";
import img8 from "../assets/Nfts/bighead-8.svg";
import img9 from "../assets/Nfts/bighead-9.svg";
import img10 from "../assets/Nfts/bighead-10.svg";
import Button from "./Button";

const Section = styled.section`
  height: 25rem;
  width: 100vw;
  position: relative;
  border-top: 2px solid ${(props) => props.theme.text};
  border-top: 2px solid ${(props) => props.theme.text};
  background-color: ${(props) => `rgba(${props.theme.textRgba}, 0.9)`};

  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
`;

const ImgContainer = styled.div`
width:100%;
position; absolute;
top:50%;
left:50%;
// transform: translate(-50%, -50%);

display: flex;
justify-content: space-between;
align-items: center;
opacity:0.2;

img{
    width: 15rem;
    height: auto;
}
`;

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.body};
//   padding: 1rem 2rem;
  position: relative;
  z-index: 10;
//   width: 35%;
`;
const Banner = () => {
  return (
    <>
      <Section>
        <ImgContainer>
          <img src={img1} alt="metavers" />
          <img src={img2} alt="metavers" />
          <img src={img3} alt="metavers" />
          <img src={img4} alt="metavers" />
          <img src={img5} alt="metavers" />
          <img src={img6} alt="metavers" />
         
        </ImgContainer>
        {/* <Title>
          Join the <br /> Metaverse CUTM
        </Title>
       <Button text="join now" link="#" /> */}
      </Section>
    </>
  );
};

export default Banner;
