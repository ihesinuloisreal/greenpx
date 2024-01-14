

import styled from "styled-components";

const SignInBtn = styled.button`
  padding: 18px 5px;
  width: 392px;
  height: 24px;
  justify-content: center;
  align-items: center;
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

type ButtonProps = {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // to handle onClick functions
    children?: React.ReactNode; // make the component able to receive children elements
    color?: 'primary' | 'secondary'; // two styling options (you can create as many as you want)
    disabled?: boolean; // make the button disabled or not
    href?: string;
};

const Button = ({onClick, children}: ButtonProps) =>{
    return(
        <SignInBtn >{children}</SignInBtn>
    )
}
export default Button;