import Image from "next/image";
import React from "react";
import styled from "styled-components";
import icon from '../../../public/images/arrow-right.svg'

const BtnIconBg = styled.div`
  padding: 10px;
  border-radius: 7px;
  background: var(--Primary-color-90, #EAF8E7);
`;
const Icon = () => {
    return(
        <BtnIconBg>

            <Image
                src={icon}
                alt="Vercel Logo"
                className="dark:invert"
                width={24}
                height={24}
                priority
            />
        </BtnIconBg>
    )
}

export default Icon;