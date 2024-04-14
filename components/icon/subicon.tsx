import { Details } from "@/types/type";
import React from "react";

function Subicon({h,w,c}:Details) {
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
        <path d="M7 12h10"></path>
        <circle cx="12" cy="12" r="10"></circle>
      </g>
    </svg>
  );
}

export default Subicon;