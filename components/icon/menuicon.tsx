import { Details } from "@/types/type";
import React from "react";

function MenuIcon({ h, w, c }: Details) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="none"
      viewBox="0 0 24 24"
    >
      <g>
        <g>
          <path
            stroke={c}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 17h14M5 12h14M5 7h8"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default MenuIcon;
