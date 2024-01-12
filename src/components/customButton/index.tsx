import { SignInBtn } from "./CustomButton"

export type ButtonProps = {
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