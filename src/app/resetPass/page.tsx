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
        <InputFieldComponent src={src}/>
      </FormComponent>
      
      <ImgCon>
        <SideImage src={image}/>
      </ImgCon>
    </MainContainer>

  </>
  );
};
export default Signin;