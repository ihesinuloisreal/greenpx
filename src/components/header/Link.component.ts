import Link from "next/link";
import styled from "styled-components";

export const LinkComponent = styled(Link)`
    text-decoration:none;
    color: var(--Accent-Color, #4EA771);
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    
  line-height: 18px; /* 100% */
`