"use client";
import Image from "next/image";
import React from "react";
import Link from 'next/link'
import styled from "styled-components";
import HeaderComponent from "@/components/header";
import SideImage from "@/components/image";

import image from "../../../public/images/signinPage.png";
import src from '../../../public/images/sms.svg'
import FormComponent from "@/components/Form";
import InputFieldComponent from "@/components/Form/InputField/inputField.component";
import InputSection from "@/components/Form/inputSection/InputSection";
import InputGroupcomponent from "@/components/Form/inputGroup/InputGroup.component";
import CardHeadComponent from "@/components/Card/CardHead.Component";
import Button from "@/components/customButton";
import icon from '../../../public/images/arrow-right.svg'





// Main Body section
const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ImgCon = styled.div`
  /* display: flex;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  justify-content: flex-end;
  align-items:flex-end; */

`;

const Signin = (): JSX.Element => {
  return (
    <>
    <HeaderComponent/>
    <MainContainer>
      <FormComponent>
      <CardHeadComponent h1="Reset Password" h6="please input your email address"/>
      <InputGroupcomponent>
          <InputSection>
            <InputFieldComponent type="email" placeholde="Email" src={src}/>
          </InputSection>
        </InputGroupcomponent>
        <Button href='/resetConfirm' src={icon}>
          Reset password
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