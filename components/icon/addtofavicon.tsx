import { Details } from "@/types/type";
import React from "react";

function Addtofavicon({ h, w, c }: Details) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g
        stroke={c}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path d="M7 12h5m0 0h5m-5 0V7m0 5v5"></path>
        <circle cx="12" cy="12" r="9"></circle>
      </g>
    </svg>
  );
}

export default Addtofavicon;
