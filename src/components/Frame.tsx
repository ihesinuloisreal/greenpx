/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import Image from 'next/image'

interface Props {
  className: any;
  greenPxClassName: any;
}

export const Frame = ({ className, greenPxClassName }: Props): JSX.Element => {
  return (
    <div className={`inline-flex items-center gap-[12px] relative ${className}`}>
      <Image
        className="relative w-[65.44px] h-[60px] object-cover"
        alt="Image"
        src="https://c.animaapp.com/5hYESc7o/img/image-47-6@2x.png"
      />
      <div
        className={`relative w-fit [font-family:'Inter',Helvetica] font-black text-dark-color text-[24px] text-center tracking-[0] leading-[18px] whitespace-nowrap ${greenPxClassName}`}
      >
        GREEN PX
      </div>
    </div>
  );
};
