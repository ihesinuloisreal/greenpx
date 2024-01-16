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

type cardHead = {
    h1: string;
    h6: string;
}

const CardHeadComponent = ({h1, h6}:cardHead) => {
  return (
    <CardHead>
        <H1>{h1}</H1>
        <H6>{h6}</H6>
    </CardHead>
  )
}

export default CardHeadComponent