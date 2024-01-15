import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import InputComponent from '../InputField/inputField.component';
import Button from '../../customButton';
import SocialMediaComponent from '../socialMedia/socialMedia.component';
import googleIcon from '../../../../public/images/Group.svg'
import facebookIcon from '../../../../public/images/Vector.svg'
import LockIcon from '../../../../public/images/lock.svg'
import SmsIcon from '../../../../public/images/sms.svg'






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
  padding: 10px 5px 10px 8px;
  align-items: center;
  height: 54px;
  width: 393px;
  border-radius: 12px;
  border: 1px solid var(--Neutral-100, #D8D8D8);
  background: var(--Primary-color, #FFF);
  
`;


const BtnSection = styled.div`
  display: flex;
  width: 392px;
  height: 24px;
  padding: 18px 5px;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  background: var(--Dark-color, #013237);

`;

const BtnIconBg = styled.div`
  padding: 10px;
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
  font-weight: 600;
  line-height: 30px; /* 166.667% */ 
  text-decoration: none;
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

const SyledButton = styled(Button)`
  display: flex;
`




const InputGroupcomponent = () => {
  return (
    <>
    <InputGroupSec>
        <ImputGroup>
          {/* <InputContainer></InputContainer> */}
          <InputComponent src={SmsIcon}/>
          
        </ImputGroup>
        <ImputGroup>
          <InputComponent src={LockIcon}/>
          
        </ImputGroup>
    </InputGroupSec>

    {/* <InputGroupSec> */}

        <BtnSection>
        <SyledButton href='/'>Sign in
          
        </SyledButton>
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
        </BtnSection>
    <SignUpTxt>
        <SingUptext>
        Don’t have an account? 
        </SingUptext>
        <SignUp href="/">
          Sign Up
          </SignUp>
    </SignUpTxt>
    <ForgotPass>Forgot your password?</ForgotPass>
        <Or>Or</Or>
      <SocialMediaComponent title="Log in with Google" image={googleIcon}/>
      <SocialMediaComponent title="Log in with Facebook" image={facebookIcon}/>
       
    </>
  )
}

export default InputGroupcomponent