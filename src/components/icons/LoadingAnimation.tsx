/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const LoadingAnimation = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="216"
      viewBox="0 0 215 216"
      width="215"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_664_6694)">
        <path
          d="M198.664 81.8207V133.92L176.105 146.942L153.546 159.968V186.016L130.987 172.994V120.894L153.546 133.92L176.105 120.894V94.8465L153.546 81.8207V107.868L130.987 94.8465V68.7949L153.546 55.7729L176.105 68.7949L198.664 81.8207Z"
          fill="#038B00"
        />
        <path
          d="M108.428 55.7733V81.821L85.8685 68.7952L63.3093 55.7733L40.7501 68.7952V94.8468L63.3093 107.869V81.821L85.8685 94.8468V120.895L63.3093 133.92L40.7501 120.895L18.1909 107.869V55.7733L40.7501 42.7475L63.3093 29.7217L85.8685 42.7475L108.428 55.7733Z"
          fill="#038B00"
        />
        <path
          d="M176.105 120.894L153.546 133.92L130.987 120.894L108.428 107.868L85.8684 120.894V94.8465L63.3092 81.8207L40.75 68.7949L63.3092 55.7729L85.8684 68.7949L108.428 81.8207L130.987 68.7949V94.8465L153.546 107.868L176.105 120.894Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_664_6694">
          <rect fill="white" height="156.844" transform="translate(18 29.5)" width="180.856" />
        </clipPath>
      </defs>
    </svg>
  );
};
