import React from 'react';
import Navbar from '../Navbar/Navbar';
import Styled, { keyframes } from "styled-components";
import Footer from '../Footer/Footer'
import Image from 'next/image'
import Serimg from './Images/Mask Group 11.png'
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Publicimg from './Images/lajos-szabo-lzW4Zv95-Ts-unsplash@2x.png'

const Services = () => {
  return (
      <>
      <Navbar/>
      <Container>
      <Fade bottom duration={3100} distance="310px">
        <Imgcon>
        <Fade bottom duration={3100} distance="310px">
        <Img>
          <Image id='' src={Serimg}></Image>
          
        </Img>
        </Fade>
        <Fade bottom duration={3100} distance="310px">
        <p className='h1'>Our Services</p>
        </Fade>
        </Imgcon>
        </Fade>   
        <Belowhero>      
        <Pubimg>
        <Image src={Publicimg}></Image>
      </Pubimg>     
      <p className='t1'>Public Utilities</p>
      </Belowhero> 
      </Container>
     
      <Footer/>
      </>
  )
};

export default Services;

const Imgcon = Styled.div`
  position: absolute;
  width: 100%;
  height: 1206px;
  left: 0;
  right:0;
  top: 128px;
  overflow: visible;
  // background:red;
  .h1{
    top: 397px;
left: 670px;
width: 482px;
height: 92px;
    position: absolute;
    overflow: visible;
    width: 79px;
    white-space: nowrap;
    line-height: 85px;
    margin-top: -4px;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: bold;
    font-size: 77px;
    color: rgba(252, 252, 250, 1);
  }
`;

const Img = Styled.div`

  position: absolute;
  
  height: 666px;
  left: 67px;
  right: 67px;
  top: 160px;
  overflow: visible;
  

`;

const Container = Styled.div `
  width: 100%;
  left:0;
 
  margin-right:0 auto;
  margin-left:0 auto;

`;
const Pubimg = Styled.div`
position: relative;
top: 30px;
left: 67px;
width: 893px;
height: 670px;
border-radius:15px;

`;

const Belowhero = Styled.div`
position: absolute;
width: 100%;
height: 1206px;
left: 0;
right:0;
top: 1288px;
overflow: visible;
// background:red;
.t1{
  position:absolute;
  top: 140px;
  left: 1226px;
 width: 579px;
height: 68px;
font-family: Numans;
    font-style: normal;
    font-weight: bold;
    font-size: 57px;
    color: black;

}`;