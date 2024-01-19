"use client";
import Image from "next/image";
import React from "react";
import Link from 'next/link'
import styled from "styled-components";
import HeaderComponent from "@/components/header";
import SideImage from "@/components/image";

import image from "../../../public/images/signinPage.png";
import like from '../../../public/images/like.svg'
import reset from '../../../public/images/resetCon.png'
import FormComponent from "@/components/Form";
import CardHeadComponent from "@/components/Card/CardHead.Component";
import Button from "@/components/customButton";
import InputGroupcomponent from "@/components/Form/inputGroup/InputGroup.component";
import ImageComponent from "@/components/image";




// Main Body section
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ImgCon = styled.div`
  /* width: 355.06px;
  height: 355.06px;
  justify-content: center;
  align-items: center; */

`;

const Signin = (): JSX.Element => {
  return (
    <>
    <HeaderComponent/>
    <MainContainer>
      <FormComponent>
        
        <InputGroupcomponent>
        <CardHeadComponent h1="Reset Password" h3="Check your mail inbox for a password reset mail from us"/>
          <ImageComponent src={reset}/>
        </InputGroupcomponent>
        <Button href='/resetPassword' src={like}>
          Okay
        </Button>
      </FormComponent>
      
      <ImgCon>
        <SideImage src={image}/>
      </ImgCon>
    </MainContainer>

  </>
  );
};
export default Signin;