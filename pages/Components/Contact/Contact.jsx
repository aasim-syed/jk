import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'
import styled from 'styled-components'
import Tele from './Scroll Group 3@2x.png'
import Image from 'next/image'

const Contact = () => {

  return (
    <>
      <Navbar/>
      <Form>
        <Img>
        <Image className='img' src={Tele}/>
        </Img>
        <h1 className='got'>Got a Project in mind? Ping us now!</h1>
        <input className='name' type='text' placeholder='Name'/>
        <input className='mailid' type='text' placeholder='Mailid'/>
        <input className='mes' type='text' placeholder='Message'/>
        <button className='knowmore'>Know more</button>


      </Form>
    </>
  )
};

export default Contact;

const Form = styled.div`
margin: 0 auto;

margin-top: 177px;
left: 0px;
right: 0px;
width: 100%;
height: 100%;
bottom: 0px;
background: #D6D5D0;
opactiy:1;
.got{
  top: 300px;
left: 902px;
width: 1007px;
height: 174px;
font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-weight: 1120px;
    font-size: 75px;
    color: #1F5241;
    position: absolute;
}
.name{
  top: 516px;
left: 862px;
width: 402px;
height: 75px;
text-align: left;
font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
background: white;
border-radius: 23px;
opacity: 1;
position: absolute;
margin:0 auto;
max-width:500px;
}
.mailid{
  top: 516px;
left: 1300px;
width: 445px;
height: 75px;
position: absolute;
border-radius: 23px;
opacity: 1;
text-align: left;
font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
background: white;
}
.mes{

  top: 657px;
left: 865px;
width: 891px;
height: 212px;
// background: transparent url('img/Rectangle 1322.png') 0% 0% no-repeat padding-box;
border-radius: 23px;
opacity: 1;
font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
background: white;
position: absolute;
}
.knowmore{
  
  font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
  top: 928px;
left: 902px;
width: 276px;
height: 75px;
position: absolute;
background: none;
border: 3px solid #FFFFFF;
border-radius: 16px;
opacity: 1;
}

`;
const Wrapper  = styled.div`
margin:0 auto;
max-width:500px;
display:grid;`;

const Img = styled.div`
top: 187px;
left: 0px;
width: 989px;


mix-blend-mode: normal;
opacity: 1;
.img{
  top: 187px;
left: 0px;
width: 989px;
height: 954px;

mix-blend-mode: normal;
opacity: 1;
}`;