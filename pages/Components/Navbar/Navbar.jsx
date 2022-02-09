import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "./Images/Image_10.png";
import Home from "../Home/Home";
import Aboutus from "../About/Aboutus";
import Service from "../Services/Services";
import Contact from "../Contact/Contact";
import Image from 'next/image'
import Link from 'next/link'


const Navbar = () => {
  return (
    <>
      
        <Navbar1>
        <I>
        <Image className="i" src={logo}></Image>
        </I>
          <Link href="/">
            <li id="h">HOME </li>
          </Link>
          <Link href="/Aboutus">
            <li id="a">ABOUT US</li>
          </Link>
          <Link href="/Services">
          <li id="s">SERVICES</li>
          </Link>
          <Link href="/Services">
          <li id="p">PROJECTS</li>
          </Link>
          <Link href="/Contact">
          <li id="c">CONTACT</li>
          </Link>
        </Navbar1>
        
    </>
  );
};

export default Navbar;

const Navbar1 = styled.div`

	margin: 0 auto;
	width: 100%;

 // background:red;
  a {
    color: none;
    text-decoration: none;
  }
  position: absolute;

  height: 126px;
  right: 0px;
  left: 0px;
  z-index: 1;
  top: 0px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  list-style: none;
  :hover {
    color: rgba(31, 81, 64, 1);
  }
  #h {
    left: 980px;
    top: 79px;
    position: absolute;
    overflow: visible;
    width: 80px;
    white-space: nowrap;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
    :hover {
      color: rgba(31, 81, 64, 1);
    }
  }
  #a {
    left: 1129px;
    top: 79px;
    position: absolute;
    overflow: visible;
    width: 134px;
    white-space: nowrap;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
    :hover {
      color: rgba(31, 81, 64, 1);
    }
  }
  #s {
    left: 1320px;
    top: 79px;
    position: absolute;
    overflow: visible;
    width: 125px;
    white-space: nowrap;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
    :hover {
      color: rgba(31, 81, 64, 1);
    }
  }
  #p {
    left: 1508px;
    top: 79px;
    position: absolute;
    overflow: visible;
    width: 126px;
    white-space: nowrap;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
    :hover {
      color: rgba(31, 81, 64, 1);
    }
  }
  #c {
    left: 1728px;
    top: 79px;
    position: absolute;
    overflow: visible;
    width: 126px;
    white-space: nowrap;
    text-align: left;
    font-family: Numans;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    color: rgba(0, 0, 0, 1);
    :hover {
      color: rgba(31, 81, 64, 1);
    }
  }
 
`;
const I = styled.div`
  position: absolute;
  width: 165px;
  height: 75px;
  left: 67px;
  top: 44px;
  overflow: visible;
`;