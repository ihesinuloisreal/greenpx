"use client";
import Image from "next/image";
import React from "react";
import Link from 'next/link'
import styled from "styled-components";
import Button from "@/components/customButton";


// Navigation Section
const MainHeader = styled.header`
  background: rgba(0, 0, 0, 0.10);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  width: 100%;
  height: 90px;
`;
const HeadItem = styled.div`

  display: flex;
  width: 1540px;
  height: 60px;
  padding-left: 64px;
  justify-content: space-between;
  align-items: center;
`;
const LogoSec = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const LogoTitle = styled.h2`
color: var(--Accent-Color, #4EA771);
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 900;
line-height: 18px; /* 75% */
text-transform: uppercase;
`;
const MenuSection = styled.div`
  display: flex;
  height: 54px;
  padding: 18px 24px;
  justify-content: flex-end;
  align-items: center;
  gap: 32px;
  border-radius: 30px;
`;
const MenuTitle = styled(Link)`
  text-decoration:none;
  color: var(--Accent-Color, #4EA771);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 100% */
`;
const LinkSection = styled.div`
  display: flex;
  align-items: flex-start;
  position: absolute;
  left: 394px;
  top: 3px;
  width: 424px;
  height: 54px;

`;
const Li = styled(Link)`
  border-radius: 30px;
  text-decoration:none;
  color: var(--Accent-Color, #4EA771);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 128.571% */
  padding: 18px 24px;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
`;

// Main Body section
const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
  /* width: 50%; */
  /* align-self: stretch; */
`;
const ImgCon = styled.div`
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  grid-column: 2/3;

`;
const Signinsec = styled.div`
  grid-column: 1/2;
  display: flex;
  width: 654px;
  height: 707px;
  padding: 0px 129px;
  flex-direction: column;
  align-items: center;
  gap: 7px;
`;
const Card = styled.div`
  display: flex;
  padding: 14px;
  flex-direction: column;
  align-items: center;
  /* gap: 41px; */
  border-radius: 12px;
  background: var(--Primary-color, #FFF);
  
  /* Cards/Long Default */
  box-shadow: 0px 14px 42px 0px rgba(8, 15, 52, 0.06);
  
  /* width: 443px;
  height: 707px; */
  
  
`;
const CardHead = styled.div`
 
  /* flex-direction: column;
  align-items: flex-start; */
  /* gap: 13px;  */
  /* width: 392px;
  height: 100px; */

`;
const H1 = styled.h1`
  color: var(--Neutral-800, #170F49);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Inter;
  /* font-size: 34px; */
  font-style: normal;
  margin-bottom: 0px
`;
const H6 = styled.h5`
  width: 392px;
  // height:30px;
  color: var(--Neutral-400, #898989);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  margin-top: 10px
`;
const Form = styled.form`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
  /* gap: 41px; */
`;

const InputGroupSec = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  /* gap: 17px; */

  /* width: 393px;
  height: 125px; */
`;
const ImputGroup = styled.div`
  display: flex;
  padding: 10px 5px 10px 14px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  height: 54px;
  width: 393px;
  border-radius: 12px;
  border: 1px solid var(--Neutral-100, #D8D8D8);
  background: var(--Primary-color, #FFF);
  
`;
/* const InputContainer = styled.div`
  align-items: center;
  gap: 8px;
`; */
const Input = styled.input`
  flex: 1 0 0;
  color: var(--Neutral-200, #BDBDBD);
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 34px; /* 24px */

  
  
  border-radius: 12px;
  border: 1px solid var(--Neutral-100, #D8D8D8);
  background: var(--Primary-color, #FFF);
`;
const InputBG = styled.div`
  padding: 10px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 7px;
  background: var(--Primary-color-90, #EAF8E7);

  /* width: 44px;
  height: 44px;
  angle: -180 deg; */

`;

const BtnIconBg = styled.div`
  padding: 10px;
  align-items: flex-start;
  border-radius: 7px;
  background: var(--Primary-color-90, #EAF8E7);
`;
const SignUpTxt = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`
const SingUptext = styled.p`
  color: var(--Neutral-400, #898989);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  /* font-size: 18px; */
  font-style: normal;
  /* font-weight: 400;
  line-height: 30px;  */
`;

const SignUp = styled(Link)`
  color: var(--Dark-color, #013237);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  text-decoration: none;
  line-height: 50px; 
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

const GmailSection = styled.div`
display: flex;
width: 392px;
height: 54px;
padding: 18px 5px;
margin-left:15rem;
align-items: center;
gap: 12px;
border-radius: 12px;
border: 1px solid var(--Accent-2, #C1E6BA);
background: var(--Primary-color, #FFF);
`;

const GmailText = styled.div`
color: var(--Dark-color, #013237);
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 18px; /* 100% */
`;

const GmailIcon = styled.div`
display: flex;
width: 44px;
height: 44px;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
flex-shrink: 0;
border-radius: 7px;
border: 1px solid var(--Accent-2, #C1E6BA);
`;

const Signin = (): JSX.Element => {
  return (
    <>
    <MainHeader>
      <HeadItem>
      <LogoSec>
        <Image
          src="/images/Layer_1.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={65.437}
          height={60}
          priority
        />
        <LogoTitle>Green PX</LogoTitle>
      </LogoSec>
        <LinkSection>
          <Li href="/">Home</Li>
          <Li href="/home">Products</Li>
          <Li href="/about">About Us</Li>
          <Li href="/contact">Contact Us</Li>
        </LinkSection>

      <MenuSection>
        <MenuTitle href="/contact">Menu</MenuTitle>
        <Image
          src="/images/MenuIcon.svg"
          alt="Menu Logo"
          className="dark:invert"
          width={24}
          height={24}
          priority
        />
      </MenuSection>
      </HeadItem>
    </MainHeader>


    <MainContainer>
      
      <Signinsec>
        <Card>
          <CardHead>
            <H1>Sign In</H1>
            <H6>Welcome back to Green PX</H6>
          </CardHead>
            <InputGroupSec>
              <ImputGroup>
                {/* <InputContainer></InputContainer> */}
                <Input type="text" placeholder="Email"/>
                <InputBG>
                <Image
                  src="/images/sms.svg"
                  alt="Vercel Logo"
                  className="dark:invert"
                  width={24}
                  height={24}
                  priority
                /></InputBG>
                </ImputGroup>
                <ImputGroup>
                <Input type="text" placeholder="Email"/>
                <InputBG>
                <Image
              src="/images/lock.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={24}
              height={24}
              priority
            /></InputBG>

              </ImputGroup>
            </InputGroupSec>

            <InputGroupSec>
              {/* <BtnSection> */}
                <Button>
                  Sign in 
                  <BtnIconBg>
                  <Image
                    src="/images/arrow-right.svg"
                    alt="Vercel Logo"
                    className="dark:invert"
                    width={24}
                    height={24}
                    priority
                  />
                  </BtnIconBg>
                </Button>
                  
              {/* </BtnSection> */}
            <SignUpTxt>
              <SingUptext>
              Don’t have an account? 
              </SingUptext>
              <SignUp href="/">Sign Up</SignUp>
            </SignUpTxt>
            <ForgotPass>Forgot your password?</ForgotPass>
            </InputGroupSec>
            <InputGroupSec>
              <Or>Or</Or>
              <GmailSection>
                <GmailText>Log in with Google</GmailText>
                <GmailIcon>
                  <Image
                    src="/images/Group.svg"
                    alt="Vercel Logo"
                    className="dark:invert"
                    width={24}
                    height={24}
                    priority
                  />
                </GmailIcon>
              </GmailSection>
              <GmailSection>
                <GmailText>Log in with Google</GmailText>
                <GmailIcon>
                  <Image
                    src="/images/Vector.svg"
                    alt="Vercel Logo"
                    className="dark:invert"
                    width={24}
                    height={24}
                    priority
                  />
                </GmailIcon>
              </GmailSection>
            </InputGroupSec>
          
        </Card>
      </Signinsec>
      <ImgCon>
        <Image
            src="/images/signinPage.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={786}
            height={885}
            priority
          />
      </ImgCon>
    </MainContainer>

  </>
  );
};
export default Signin;