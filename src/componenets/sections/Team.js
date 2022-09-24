import React from "react";
import styled, { keyframes } from "styled-components";

import img1 from "../../assets/Team/muktisir.jpg";
import img2 from "../../assets/Team/dn-sir.jpg";
import img3 from "../../assets/Team/babu-sir.png";
// import img4 from "https://w7.pngwing.com/pngs/304/275/png-transparent-user-profile-computer-icons-profile-miscellaneous-logo-monochrome.png";

import { useRef } from "react";

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  position: relative;
  background-color: ${(props) => props.theme.body};
  position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  &>*: first-child{
    animation-duration: 20s;
}

&>*: last-child{
    animation-duration:15s;
}

`;

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: fit-contect;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom; 2px solid ${(props) => props.theme.text};
  

`;

const Container = styled.div`
  width: 80%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;
const Item = styled.div`
  width: calc(20rem - 4vw);
  padding: 1rem 0;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;

  border: 2px solid ${(props) => props.theme.text};
  border-radius: 20px;
  // transition: all 0.3s ease;

  &:hover {
    img {
      transform: translateY(-1rem) scale(1);
    }
  }
`;
const ImgContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  background-color: #0b0a0a;
  border: 1px solid ${(props) => props.theme.text};
  padding: 1rem;
  border-radius: 20px;
  cursor: pointer;

  img {
    width: 100%;
    height: auto;
    transition: all 0.3s ease;
  }
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-item: center;
  justify-content: center;
  text-transform: uppercase;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;

const Position = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-item: center;
  justify-content: center;
  text-transform: capitalize;
  color: ${(props) => `rgba(${props.theme.textRgba},0.9)`};
  font-weight: 400;
`;

const move = keyframes`
0%{ transform: translateX(100%)};
100%{ transform: translateX(-100%)}
`;

const Row = styled.div`
  // background-color: lightblue;
  white-space: nowrap;
  box-sizing: content-box;
  margin: 2rem 0;
  display: flex;

  animation: ${move} linear infinite ${(props) => props.direction};
`;

const MemberComponent = ({ img, name = " ", position = " ", passRef }) => {
  let paly = (e) => {
    passRef.current.style.animationPlayState = "running";
  };

  let pause = (e) => {
    passRef.current.style.animationPlayState = "paused";
  };

  return (
    <Item>
      <ImgContainer onMouseOver={e => pause(e)} onMouseOut={e => paly(e)}>
        <img src={img} alt={name} />
      </ImgContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  );
};

const Team = () => {
  const Row1Ref = useRef(null);
  const Row2Ref = useRef(null);
  return (
    <>
      <Section id="team">
        <Title>Team</Title>
        <Container>
            <MemberComponent img={img1} name="Mukti Kanta Mishra " position="Director" />
            <MemberComponent img={img2} name="D.N. Rao " position="Director" />
            <MemberComponent img={img3} name="Babu Shankar " position="Managing Director" />
            {/* <MemberComponent img={img1} name="Sandeep Kumar " position="Devloper" /> */}
        </Container>
        {/* <Title>Devloper Team</Title>

        <Row direction="none" ref={Row1Ref}>
          <MemberComponent img={img1} name="Bikash " position="Devloper" />
          <MemberComponent img={img1} name="Bikash " position="Devloper" />
          <MemberComponent img={img1} name="Bikash " position="Devloper" />
          <MemberComponent img={img1} name="Bikash " position="Devloper" />
          <MemberComponent img={img1} name="Bikash " position="Devloper" />
          <MemberComponent img={img1} name="Bikash " position="Devloper" />
        </Row> */}
      </Section>
    </>
  );
};

export default Team;
