/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
  buttonTextClassName: any;
  buttonTextClassNameOverride: any;
  divClassName: any;
  divClassNameOverride: any;
}

export const FrameWrapper = ({
  className,
  buttonTextClassName,
  buttonTextClassNameOverride,
  divClassName,
  divClassNameOverride,
}: Props): JSX.Element => {
  return (
    <div className={`inline-flex items-start relative ${className}`}>
      <button className="inline-flex h-[54px] items-center justify-end gap-[12px] px-[24px] py-[18px] relative flex-[0_0_auto] rounded-[30px] all-[unset] box-border">
        <button
          className={`relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black text-[14px] text-center tracking-[0] leading-[18px] whitespace-nowrap all-[unset] box-border ${buttonTextClassName}`}
        >
          Home
        </button>
      </button>
      <div className="inline-flex h-[54px] items-center justify-end gap-[12px] px-[24px] py-[18px] relative flex-[0_0_auto] rounded-[30px]">
        <div
          className={`relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black text-[14px] text-center tracking-[0] leading-[18px] whitespace-nowrap ${buttonTextClassNameOverride}`}
        >
          Products
        </div>
      </div>
      <div className="inline-flex h-[54px] items-center justify-end gap-[12px] px-[24px] py-[18px] relative flex-[0_0_auto] rounded-[30px]">
        <div
          className={`relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black text-[14px] text-center tracking-[0] leading-[18px] whitespace-nowrap ${divClassName}`}
        >
          About Us
        </div>
      </div>
      <div className="inline-flex h-[54px] items-center justify-end gap-[12px] px-[24px] py-[18px] relative flex-[0_0_auto] rounded-[30px]">
        <div
          className={`relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-bold text-black text-[14px] text-center tracking-[0] leading-[18px] whitespace-nowrap ${divClassNameOverride}`}
        >
          Contact
        </div>
      </div>
    </div>
  );
};
