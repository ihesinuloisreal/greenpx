import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';
import Image from 'next/image';
import InputComponent from '../InputField/inputField.component';
import Button from '../../customButton';
import SocialMediaComponent from '../socialMedia/socialMedia.component';

import LockIcon from '../../../../public/images/lock.svg'
import SmsIcon from '../../../../public/images/sms.svg'




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
  padding: 10px 5px 10px 8px;
  align-items: center;
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
    
      
    </>
  )
}

export default InputGroupcomponent