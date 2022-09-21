import React from 'react'
import styled from 'styled-components'

const Up = styled.div`
width: 3rem;
box-sizing: border-box;
margin: 0;
padding: 0;
height: 3rem;
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};

font-size: ${props => props.theme.fontxl};
position: fixed;
right: 1rem;
bottom: 1rem;

display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
transition: all 0.2s ease;


&:hover{
  transform: scale(1.2);
}

&:active{
  transform: scale(0.9);
}

`

const ScrollToTop = () => {
   let element = document.getElementById("home");

   element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',

   })

  return (
    <>
      <Up onClick={() => ScrollToTop()}>
        &#x2191;
      </Up>

    </>
  )
}

export default ScrollToTop