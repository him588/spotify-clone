import { Details } from "@/types/type";
import React from "react";

function Threedoticon({ h, w, c }: Details) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill={c}
      version="1.1"
      viewBox="0 0 32 32"
      xmlSpace="preserve"
    >
      <g>
        <path d="M16 13c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"></path>
        <path d="M6 13c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"></path>
        <path d="M26 13c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"></path>
      </g>
    </svg>
  );
}

export default Threedoticon;
