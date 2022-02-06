import React from 'react';
import styled from 'styled-components'
import Products from '../components/Products'

const Homescreen = () => {
  return <>
    <Jumbotron>
        <img src="/img/Jumbotron.png" alt="" />
    </Jumbotron>
    <Products/>
    
  </>;
};

export default Homescreen;

const Jumbotron = styled.div`
display: flex;
justify-content: center;
  img {
    width: 80%;
    height: auto;
    object-fit: cover;
  }
`