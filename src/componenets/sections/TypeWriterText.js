import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Button from "../Button";

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;

  span {
    text-transform: uppercase;
    font-family: "Akaya Telivigala", cursive;
  }
  .text-1 {
    color: blue;
  }
  .text-2 {
    color: orange;
  }
  .text-3 {
    color: red;
  }
`;

const Subtitle = styled.h3`
  font-size: ${(props) => props.theme.fontlg};
  text-transform: capitalize;
  color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
  font-width:600;
  margin-bottom: 1rem;
  width: 80%;
  align-self: flex-start;
`;

const ButtonContainer = styled.div`
width: 80%;
align-self: flex-start;
`

const TypeWriterText = () => {
  return (
    <>
      <Title>
        Discovery A New era of cool
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(" <span class='text-1'> Metaverse</span>")
              .pauseFor(2000)
              .deleteAll()
              .typeString("<span class='text-2'>Collectible Item</span>")
              .pauseFor(2000)
              .deleteAll()
              .typeString("<span class='text-3'>3D Assets!</span>")
              .pauseFor(2000)
              .deleteAll()
              .start();
          }}
        />
      </Title>
      <Subtitle>Bored With Your Theory Book & Classes </Subtitle>
      <ButtonContainer>
      <Button text="Explore" link="/3dview/assest"/>
      </ButtonContainer>
    </>
  );
};

export default TypeWriterText;
