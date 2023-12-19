"use client";
import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--Primary-color, #FFF);
`
const ImgContainer = styled.div`
    width: 215px;
    height: 215px;
    flex-shrink: 0;
`

const SplashScreen = (): JSX.Element => {
  return (
    <Container>
        <ImgContainer>
        <Image
              src="/images/layer_1.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={180.856}
              height={156.844}
              priority
            /></ImgContainer>
        
    </Container>
  );
};

export default SplashScreen;
