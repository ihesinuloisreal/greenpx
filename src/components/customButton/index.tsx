

import Link from "next/link";
import styled from "styled-components";

const SignInBtn = styled(Link)`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;

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

const Button = ({href, children}: ButtonProps) =>{
    return(
        <SignInBtn href="" >{children}</SignInBtn>
    )
}
export default Button;