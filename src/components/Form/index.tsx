import Link from 'next/link';
import React from 'react'
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


const FormComponent = () => {
  return (
    <Signinsec>
        <Card>
          <CardHead>
            <H1>Sign In</H1>
            <H6>Welcome back to Green PX</H6>
          </CardHead>
            <InputGroupcomponent/>
          
        </Card>
      </Signinsec>
  )
}

export default FormComponent