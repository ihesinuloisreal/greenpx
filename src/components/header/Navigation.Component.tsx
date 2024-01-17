import React from 'react'
import { LinkComponent } from './Link.component';
import styled from 'styled-components';
import Licomponent from './Li.component';

const LinkSection = styled.div`
   display: flex; 
  align-items: flex-start;
  position: absolute; 
  left: 394px;

`;


const NavigationComponent = () => {
  return (
    <LinkSection>
        <Licomponent href="/signIn">Home</Licomponent>
        <Licomponent href="/resetPass">Products</Licomponent>
        <Licomponent href="/">About Us</Licomponent>
        <Licomponent href="/">Contact Us</Licomponent>
    </LinkSection>
  )
}

export default NavigationComponent