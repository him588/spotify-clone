import { Details } from "@/types/type";
import React from "react";

function Libicon({ h, w, c }: Details) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill="#000"
      version="1.1"
      viewBox="0 0 30 30"
    >
      <g>
        <g
          fill={c}
          fillOpacity="1"
          stroke="none"
          strokeDasharray="none"
          strokeMiterlimit="4"
          strokeOpacity="0.716"
          strokeWidth="1"
          transform="translate(0 -289.063)"
        >
          <rect
            width="4"
            height="24"
            x="3"
            y="292.063"
            opacity="1"
            rx="2"
            ry="2"
          ></rect>
          <rect
            width="4"
            height="24"
            x="9"
            y="292.063"
            opacity="1"
            rx="2"
            ry="2"
          ></rect>
          <rect
            width="4"
            height="24"
            x="-86.262"
            y="280.908"
            opacity="1"
            rx="2"
            ry="2"
            transform="rotate(-20)"
          ></rect>
        </g>
      </g>
    </svg>
  );
}

export default Libicon;
