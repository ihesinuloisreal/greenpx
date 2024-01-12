// import { Link } from "react-router-dom";
import styled from "styled-components";

export const SignInBtn = styled.button`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  background: var(--Dark-color, #013237);

  text-decoration: none;
  color: var(--Primary-color, #FFF);
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 100% */
`;
const BtnSection = styled.div`
  display: flex;
  width: 392px;
  height: 24px;
  padding: 18px 5px;
  align-items: center;
  gap: 12px;
  border-radius: 12px;
  background: var(--Dark-color, #013237);

`;