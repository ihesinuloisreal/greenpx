import Link from "next/link";
import styled from "styled-components";
import React from "react";
import Image from "next/image";
import { LinkComponent } from "./Link.component";
import NavigationComponent from "./Navigation.Component";

// Navigation Section
const MainHeader = styled.header`
  background: rgba(0, 0, 0, 0.10);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  height: 70px; 

  display: flex;
  padding-left: 64px;
  justify-content: space-between;
  align-items: center;
`;

const LogoSec = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const LogoTitle = styled.h2`
color: var(--Accent-Color, #4EA771);
text-align: center;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Inter;
font-size: 24px;
font-style: normal;
font-weight: 900;
line-height: 18px; /* 75% */
text-transform: uppercase;
`;
const MenuSection = styled.div`
  display: flex;
  /* height: 54px; */
  padding: 18px 24px;
  align-items: center;
  gap: 10px;
  border-radius: 30px;
`;
const MenuTitle = styled(LinkComponent)`
`;

const HeaderComponent = () => {
    return(
        <MainHeader>
        <LogoSec>
          <Image
            src="/images/navlogo.png"
            alt="Vercel Logo"
            className="dark:invert"
            width={65.437}
            height={60}
            priority
          />
          <LogoTitle>Green PX</LogoTitle>
        </LogoSec>
          <NavigationComponent/>
  
        <MenuSection>
          <MenuTitle href="/contact">Menu</MenuTitle>
          <Image
            src="/images/MenuIcon.svg"
            alt="Menu Logo"
            className="dark:invert"
            width={24}
            height={24}
            priority
          />
        </MenuSection>
      </MainHeader>
  
    )
}

export default HeaderComponent;