import React from 'react'
import styled from 'styled-components';
import Button from '../customButton';
import Link from 'next/link';

const SignUpTxt = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
`
const P = styled.p`
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

const SignInSignUpQ = () => {
  return (
    <SignUpTxt>
        <P>
        Don’t have an account? 
        </P>
        <SignUp href="/">
          Sign Up
          </SignUp>
    </SignUpTxt>
  )
}

export default SignInSignUpQ