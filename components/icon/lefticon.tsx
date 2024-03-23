import { Details } from "@/types/type";
import React from "react";

function LeftIcon({h,w,c}:Details) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={w}
    height={h}
    viewBox="-5 0 23 23"
  >
    <g>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill={c} fillRule="nonzero" transform="translate(-614 -159)">
          <g transform="translate(50 120)">
            <path
              d="M565.76 39.29l10.879 10.452.06.054a.97.97 0 01.301.642v.124a.97.97 0 01-.3.642l-.054.044-10.885 10.462a1.061 1.061 0 01-1.459 0 .964.964 0 010-1.402l10.15-9.746-10.15-9.87a.964.964 0 010-1.402 1.061 1.061 0 011.459 0z"
              transform="matrix(-1 0 0 1 1141 0)"
            ></path>
          </g>
        </g>
      </g>
    </g>
  </svg>
  );
}

export default LeftIcon;