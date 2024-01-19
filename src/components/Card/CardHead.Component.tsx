import React from 'react'
import styled from 'styled-components';
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
  font-size: 34px;
  font-style: normal;
  margin-bottom: 0px
`;
const H6 = styled.h5`
  width: 392px;
  height:30px;
  color: var(--Neutral-400, #898989);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  margin-top: 10px
`;
const H3 = styled.h3`
  width: 392px;
  color: var(--Neutral-600, #6F6C90);
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px; /* 166.667% */
`

type cardHead = {
    h1?: string;
    h6?: string;
    h3?: string;
}

const CardHeadComponent = ({h1, h6, h3}:cardHead) => {
  return (
    <CardHead>
        <H1>{h1}</H1>
        {h3 ? (<H3>{h3}</H3>): (<H6>{h6}</H6>)}        
    </CardHead>
  )
}

export default CardHeadComponent