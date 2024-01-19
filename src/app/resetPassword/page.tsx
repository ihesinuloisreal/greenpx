"use client";
import Image from "next/image";
import React from "react";
import Link from 'next/link'
import styled from "styled-components";
import HeaderComponent from "@/components/header";
import SideImage from "@/components/image";

import image from "../../../public/images/signinPage.png";
import FormComponent from "@/components/Form";
import InputGroupcomponent from "@/components/Form/inputGroup/InputGroup.component";
import CardHeadComponent from "@/components/Card/CardHead.Component";
import SocialMediaComponent from "@/components/Form/socialMedia/socialMedia.component";

import googleIcon from '../../../public/images/Group.svg'
import facebookIcon from '../../../public/images/Vector.svg'
import Button from "@/components/customButton";
import SignInSignUpQ from "@/components/signIn_SignUp_Q";
import InputSection from "@/components/Form/inputSection/InputSection";
import InputFieldComponent from "@/components/Form/InputField/inputField.component";

import LockIcon from '../../../public/images/eye-slash.svg'
import SmsIcon from '../../../public/images/sms.svg'
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
const ForgotPass = styled.p`
  color: var(--Dark-color, #013237);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  margin: 0px;
  /* line-height: 30px;  */
`;

const Or = styled.div`
  justify-content: center;
  align-items: center;
  color: var(--Neutral-600, #6F6C90);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 166.667% */
  margin-top: 20px;

`;

const Signin = (): JSX.Element => {
  return (
    <>
    <HeaderComponent/>
    <MainContainer>
      <FormComponent>
        <CardHeadComponent h1="Sign In" h6="Welcome back to Green PX"/>
        <InputGroupcomponent>
          <InputSection>
            <InputFieldComponent type="Password" placeholde="Enter Password" src={LockIcon}/>
          </InputSection>
          <InputSection>
            <InputFieldComponent type="password" placeholde="Confirm Password" src={LockIcon}/>
          </InputSection>
        </InputGroupcomponent>
        <Button src={icon} href='/'>
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