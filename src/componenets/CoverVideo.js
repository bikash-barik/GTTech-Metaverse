import React from 'react'
import styled from 'styled-components';
import CCC from '../assets/cutm.mp4';
import GIF from '../assets/CCC.mp4';
// import Video from '../assets/Home Video.mp4';

const VideoContainer = styled.div`
width:100%;

video{
    width:100%;
    height:auto;
    border-radius: 20px;
//     -webkit-box-shadow: -10px 15px 168px 13px rgba(0,0,0,0.75);
// -moz-box-shadow: -10px 15px 168px 13px rgba(0,0,0,0.75);
// box-shadow: -10px 15px 168px 13px rgba(0,0,0,0.75);

}
`


const CoverVideo = () => {
  return (
    <>
        <VideoContainer>
        <video src={CCC} type="video/mp4" autoPlay muted loop />
        </VideoContainer>   
    </>
  )
}

export default CoverVideo


export const CoverVideo1 = () => {
  return (
    <>
     <VideoContainer>
        <video src={GIF} type="video/mp4" autoPlay muted loop />
        </VideoContainer>   
    </>
  )
}



