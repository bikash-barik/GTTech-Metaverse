import React from "react";
import styled from "styled-components";

import img1 from "../assets/Anatomy/digestive_system-removebg-preview.png";
import img2 from "../assets/Anatomy/kidney-disease-cause-diabetes.jpg";
import img3 from "../assets/Anatomy/1200px-Lymphatic_system.svg.png";
import img4 from "../assets/Anatomy/Diagram_of_the_human_heart.svg.png";
import img5 from "../assets/Anatomy/Human_muscular_system_Thumnail.png";
import img6 from "../assets/Anatomy/lungs.png";
import img7 from "../assets/Anatomy/suyog-gastro-liver-933899.png";
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

const JoiNow = styled.button`
display: inline-block;
background-color: ${props => props.theme.body};
color:${props => props.theme.text};
outline: none;
border: none;
font-weight: 600;
font-size: ${props => props.theme.fontlg};
padding: 1.5rem 3rem;
border-radius:50px;
curser: pointer;
transform: all 0.2s ease;
position: relativel;

&:hover{
    transform: scale(0.9);
}

&::after{
    content:' ';
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.body};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transform: all 0.2s ease;

}

&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}

`


const Container = styled.div`
left:0;
right:0;
bottom:0;
top: 0;

padding: 1rem 2rem;
position: absolute;
z-index: 11;
width: 95%;


display: flex;
justify-content: space-between;
align-items: center;
`

const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.body};
  // left:0;
  // right:0;
  // bottom:0;
  // top: 0;

  // // padding: 1rem 2rem;
  // position: absolute;
  // z-index: 11;
  // width: 35%;
`;


// const Title = styled.h1`
//   font-size: ${(props) => props.theme.fontxxxl};
//   color: ${(props) => props.theme.body};
//   padding: 1rem 2rem;
//   position: absolute;
//   z-index: 11;
//   width: 35%;
//   text-transform: capitalize;
// `;


const BtnContainer = styled.div`
width: 35%;
display: flex;
  font-size: ${(props) => props.theme.fontxxxl};
  justify-content: flex-end;
`


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
        <Container>

        <Title>
          Join the <br />  CUTM Metaverse
         
        </Title>
        <JoiNow>
    Join Now
  </JoiNow>
        </Container>


{/* <Title>
  Join the <br /> Metaverse CUTM
</Title>
<BtnContainer>
  <JoiNow>
    Join Now
  </JoiNow>
</BtnContainer>  */}
      </Section>
    </>
  );
};

export default Banner;
