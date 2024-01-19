import ImageComponent from '@/components/image';
import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';

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
 /* align-items: flex-start;
  gap: 10px;
  border-radius: 7px; */
  /* background: var(--Primary-color-90, #EAF8E7); */

  /* width: 44px;
  height: 44px;
  angle: -180 deg; */

`;
const InputGroup = styled.div`
  /* display: flex;
  padding: 10px 5px 10px 8px;
  align-items: center;
  height: 54px;
  width: 393px;
  border-radius: 12px;
  border: 1px solid var(--Neutral-100, #D8D8D8);
  background: var(--Primary-color, #FFF); */
  
`;

type prop = {
  src: string;
  placeholde?: string;
  type? : string;
}

const InputFieldComponent = ({src, type, placeholde}:prop) => {
  return (
    <>
      <Input type={type} placeholder={placeholde}/>
      <InputBG>
        <ImageComponent
          src={src}
          alt="Vercel Logo"
          className="dark:invert"
          width={24}
          height={24}
          priority
        />
      </InputBG>
    </>
  )
}

export default InputFieldComponent