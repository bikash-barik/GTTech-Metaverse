import React from "react";
import styled from "styled-components";
// import Button from '../Button';
import Carousel from "../Carousel";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  // color: ${(props) => props.theme.body};

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  //   background-color: lightblue;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// const Title = styled.h2`
// font-size: ${(props) => props.theme.fontxxl};
//   text-transform: capitalize;
//   width: 80%;
//   margin: 0 auto;
//   color: ${(props) => props.theme.body};
//   align-self: flex-start;
// `
// const SubText = styled.h2`
// font-size: ${(props) => props.theme.fontlg};
// width: 80%;
// margin: 1rem auto;
// font-weight:400;
// color: ${(props) => props.theme.body};
// align-self: flex-start;
// `

const About = () => {
  return (
    <>
      <Section>
        <Container>
          <Box>
            <Carousel />
          </Box>
          <Box>
            ckvnnlkxc
          </Box>
        </Container>
      </Section>
    </>
  );
};

export default About;

// import React from 'react'
// import styled from 'styled-components'
// import Button from '../Button';
// import Carousel from '../Carousel';

// const Section = styled.section`
// min-height: 100vh;
// width: 100vw;
// background-color: ${(props) => props.theme.text};
// // color: ${(props) => props.theme.body};

// display: flex;
// justify-content: center;
// align-items:center;
// position: relative;
// `

// const Container = styled.div`
//   width: 75%;
//   margin: 0 auto;
// //   background-color: lightblue;

//   display: flex;
//   justify-content: center;
//   align-items:center;
// `;

// const Box = styled.div`
// width: 50%;
// height: 100%;
// display: flex;
// flex-direction: column;
// justify-content: center;
// align-items: center;
// `;

// const Title = styled.h2`
// font-size: ${(props) => props.theme.fontxxl};
//   text-transform: capitalize;
//   width: 80%;
//   margin: 0 auto;
//   color: ${(props) => props.theme.body};
//   align-self: flex-start;
// `

// const SubText = styled.h2`
// font-size: ${(props) => props.theme.fontlg};
// width: 80%;
// margin: 1rem auto;
// font-weight:400;
// color: ${(props) => props.theme.body};
// align-self: flex-start;
// `

// const SubTextLight = styled.p`
//   font-size: ${(props) => props.theme.fontlg};
//   width: 80%;
//   margin: 1rem auto;
//   font-weight:400;
//   color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
//   align-self: flex-start;
// `
// const About = () => {
//   return (
//     <>
//      <Section>
//        <Container>
//         <Box><Carousel/></Box>
//         <Box>
//             <Title>
//             Welcome To The Weirdos Club.
//             </Title>
//             <SubText>
//             The WEIRDOS CLUB is a private collection of NFTs—unique digital collectibles. The Weirdos are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
//             </SubText>
//             <SubTextLight>
//             With more than 200+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.
//             </SubTextLight>
//             <Button text="Join Our Discord" link="#" />
//         </Box>
//         </Container>
//         </Section>
//     </>
//   )
// }

// export default About
