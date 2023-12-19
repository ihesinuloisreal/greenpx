"use client";
import React from "react";
import { LoadingAnimation } from "../../components/icons/LoadingAnimation";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    margin: 1em;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: auto 1fr 3fr;
    grid-template-areas: 
        "title title title"
        "main main masthead"
        "main main sidebar"
        "footer footer footer"
    ;
     @media screen and (max-width: 1380px) {
      grid-template-columns: 1fr 1fr ;
      grid-template-rows: auto 3fr 1fr;
      grid-template-areas: 
          "title title"
          "main main"
          "masthead sidebar"
          "footer footer"
      ;
      
    }
    @media screen and (max-width: 900px) {
        grid-template-columns: 3fr;
        grid-template-areas: 
            "title"
            "main"
            "masthead"
            "sidebar"
            "footer"
        ;
    }

`
const Masthead = styled.header`
    margin-bottom: 1em;
    padding: 1em;
    color: white;
    background-color: #b46ae3;
    @media screen and (max-width: 900px) {
      grid-area: masthead;
    }
    grid-area: masthead;
`
const TitlePage = styled.div`
    margin-bottom: 1em;
    padding: 1em;
    color: white;
    background-color: #51a7fa;
    grid-area: title;
    @media screen and (max-width: 900px) {
      grid-area: title;
  
    }
`
const MainContent = styled.main`
    margin-bottom: 1em;
    padding: 1em;
    color: white;
    background-color: #70bf40;
    grid-area: main;
    @media screen and (max-width: 900px) {
      grid-area: main;
    }
`
const Sidebar = styled.aside`
    margin-bottom: 1em;
    padding: 1em;
    color: white;
    background-color: #f49018;
    grid-area: sidebar;
    @media screen and (max-width: 900px) {
      grid-area: sidebar;
    }
`
const Footer = styled.footer`
    margin-bottom: 1em;
    padding: 1em;
    color: white;
    background-color: #0265c0;
    grid-area: footer;
    @media screen and (max-width: 900px) {
      grid-area: footer;
    }
`
const ScreenReader = styled(Link)`
    clip: rect(1px, 1px, 1px, 1px);
	position: absolute !important;
	height: 1px;
	width: 1px;
	overflow: hidden;
    &:hover &:active &:focus {
        background-color: #f1f1f1;
        border-radius: 3px;
        box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
        clip: auto !important;
        color: #21759b;
        display: block;
        font-size: 14px;
        font-weight: bold;
        height: auto;
        left: 5px;
        line-height: normal;
        padding: 15px 23px 14px;
        text-decoration: none;
        top: 5px;
        width: auto;
        z-index: 100000;
    }
`

const SplashScreen = (): JSX.Element => {
  return (
    <Container>

    {/* <ScreenReader to="/">Skip to content</ScreenReader> */}

    <Masthead>
        <code className="identifier"><pre>.masthead</pre></code>
        <h2>CSS Grid</h2>
    </Masthead>

    <TitlePage>
        <code className="identifier"><pre>.page-title</pre></code>
        <h1>Demo sandbox for Advanced Layouts with CSS Grid</h1>
    </TitlePage>

    <MainContent>
        <code className="identifier"><pre>.main-content</pre></code>
        <h2>Main content</h2>
        <p>This is where the main bulk of the document content would go.</p>
    </MainContent>

    <Sidebar>
        <code className="identifier"><pre>.sidebar</pre></code>
        <h2>Sidebar</h2>
        <p>The place where things of less relevance appears.</p>
    </Sidebar>

    <Footer>
        <code className="identifier"><pre>.footer-content</pre></code>
        <h2>Footer</h2>
        <p><span className="bg">The place where site nav and other meta info typically appears.</span></p>
    </Footer>
    </Container>
  );
};

export default SplashScreen;
