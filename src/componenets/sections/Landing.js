import React from "react";
import styled from "styled-components";
import GIF from '../../assets/video2.mp4';
// import GIF from "../../assets/landingvideo.mp4";
import CoverVideo from "../CoverVideo";
import TypeWriterText from "./TypeWriterText";

const VideoContainer = styled.div`
  width: 100vw;
  height: 90vh;

  object-fit: cover;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  video {
    width: 100%;
    height: auto;
    z-index: -1;
    opacity: .9;
  }
`;

const Section = styled.section`
  // min-height: ${(props) => `clac(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  min-height: 90vh;
  position: relative;
  // position: static;

  // background-color: ${(props) => props.theme.body};
`;
const Container = styled.div`
  width: 75%;
  min-height: 80vh;
  margin: 0 auto;
    // background-color: lightblue;
  opacity: 1;
  position: relative;
  top: 100px;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
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

const Landing = () => {
  return (
    <>
      <Section  id="home">
        <VideoContainer>
          <video src={GIF} type="video/mp4" autoPlay muted loop />
          <TypeWriterText />
        </VideoContainer>
        <Container>
          <Box >
            <TypeWriterText />
          </Box>
          <Box>
            {/* <CoverVideo /> */}
          </Box>
        </Container>
      </Section>
    </>
  );
};

export default Landing;
