import React, { ReactNode } from 'react'
import styled from 'styled-components';
import InputFieldComponent from '../InputField/inputField.component';

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

type Input = {
    children: ReactNode;
}

const InputSection = ({children}:Input) => {
  return (
    <>
        <ImputGroup>
            {children}
        </ImputGroup>
    </>
  )
}

export default InputSection