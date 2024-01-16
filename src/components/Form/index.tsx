import Link from 'next/link';
import React, { ReactNode } from 'react'
import styled from 'styled-components';
import InputGroupcomponent from './inputGroup/InputGroup.component';



const Signinsec = styled.div`
  /* display: flex;
  padding: 0px 100px;
  flex-direction: column;
  align-items: center;
  gap: 7px; */
`;
const Card = styled.div`
  display: flex;
  padding: 0px 100px;
  margin-left: 100px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: var(--Primary-color, #FFF);
  
  /* Cards/Long Default */
  box-shadow: 0px 14px 42px 0px rgba(8, 15, 52, 0.06);
  
  /* width: 443px;
  height: 707px; */
  
  
`;

type FormProp = {
  children: ReactNode
}

const FormComponent = ({children}:FormProp) => {
  return (
    <Signinsec>
        <Card>
          
            {children}
          
        </Card>
      </Signinsec>
  )
}

export default FormComponent