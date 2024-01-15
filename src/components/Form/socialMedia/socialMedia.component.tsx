import Image from 'next/image';
import React from 'react'
import styled from 'styled-components';
import ImageComponent from '@/components/image';


const GmailSection = styled.div`
display: flex;
width: 392px;
height: 54px;
padding: 8px 5px;
/* margin-left: 3rem; */
/* align-items: center;
justify-content: center; */
border-radius: 12px;
border: 1px solid var(--Accent-2, #C1E6BA);
background: var(--Primary-color, #FFF);
`;

const GmailText = styled.div`

display: flex;
padding: 10px;
justify-content: center;
align-items: center;
/* gap: 10px; */
flex: 1 0 0;

color: var(--Dark-color, #013237);
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Poppins;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: 18px; /* 100% */
`;

const GmailIcon = styled.div`
display: flex;
width: 44px;
height: 44px;
padding: 5px;
justify-content: center;
align-items: center;
/* gap: 10px; */
flex-shrink: 0;
border-radius: 7px;
border: 1px solid var(--Accent-2, #C1E6BA);
`;

type prop = {
    title: string;
    image: any;
}

const SocialMediaComponent = ({title,image}:prop) => {
  return (
    <div>
         <GmailSection>
          <GmailText>{title}</GmailText>
          <GmailIcon>
              <ImageComponent 
              src={image}
              alt="Vercel Logo"
              className="dark:invert"
              width={24}
              height={24}
              priority
              />
          </GmailIcon>
        </GmailSection>
        
    </div>
  )
}

export default SocialMediaComponent