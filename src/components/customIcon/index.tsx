import Image from "next/image";
import React from "react";
import styled from "styled-components";
import ImageComponent from "../image";

const BtnIconBg = styled.div`
  padding: 10px;
  border-radius: 7px;
  background: var(--Primary-color-90, #EAF8E7);
`;

type IconProp = {
    src: string;
    width: string;
    height: string;
}

const Icon = ({src, width, height}:IconProp) => {
    return(
        <BtnIconBg>

            <ImageComponent
                src={src}
                alt="Vercel Logo"
                className="dark:invert"
                width={width}
                height={height}
                priority
            />
        </BtnIconBg>
    )
}

export default Icon;