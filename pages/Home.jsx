import React from 'react';
import Home from "../pages/Components/Home/Home"
import Styled from 'styled-components'

const Home1 = () => {
  return (
    <>
    <Wrapper>
    <Home/>
    </Wrapper>
    </>
  )
};

export default Home1;

const Wrapper = Styled.div`

  margin: 0 auto;
  width:  500px;
`;