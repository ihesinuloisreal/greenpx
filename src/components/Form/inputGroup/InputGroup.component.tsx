import Link from 'next/link';
import React, { ReactNode } from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import InputComponent from '../InputField/inputField.component';
import Button from '../../customButton';
import SocialMediaComponent from '../socialMedia/socialMedia.component';


import InputSection from '../inputSection/InputSection';
import InputFieldComponent from '../InputField/inputField.component';




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

/* const InputContainer = styled.div`
  align-items: center;
  gap: 8px;
`; */

type InputGroup = {
  children: ReactNode;
}

const InputGroupcomponent = ({children}:InputGroup) => {
  return (
    <>
    <InputGroupSec>
      {children}
    </InputGroupSec>

    {/* <InputGroupSec> */}
    
      
    </>
  )
}

export default InputGroupcomponent