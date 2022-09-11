import React from 'react'
import styled from 'styled-components';
// import GIF from '../assets/Home Video.mp4';
import GIF from '../assets/video1.mp4';

const VideoContainer = styled.div`
width:100%;

video{
    width:100%;
    height:auto;
    border-radius: 20px;
    -webkit-box-shadow: -10px 15px 168px 13px rgba(0,0,0,0.75);
-moz-box-shadow: -10px 15px 168px 13px rgba(0,0,0,0.75);
box-shadow: -10px 15px 168px 13px rgba(0,0,0,0.75);

}
`


const CoverVideo = () => {
  return (
    <>
     <VideoContainer>
        <video src={GIF} type="video/mp4" autoPlay muted loop />
        </VideoContainer>   
    </>
  )
}

export default CoverVideo



