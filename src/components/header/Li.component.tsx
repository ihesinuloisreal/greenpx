import React, { AnchorHTMLAttributes, MouseEventHandler } from 'react'
import { LinkComponent } from './Link.component';
import styled from 'styled-components';

const Li = styled(LinkComponent)`
  border-radius: 30px;
  padding: 18px 24px;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;
type Li = {
    children?: React.ReactNode; // make the component able to receive children elements
    href?:  any;
};

const Licomponent = ({href, children}:Li) => {
  return (
    <Li href={href}>{children}</Li>
  )
}

export default Licomponent