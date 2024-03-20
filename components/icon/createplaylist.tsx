import { Details } from "@/types/type";
import React from "react";

function CreateplaylistIcon({ h, w, c }: Details) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={c}
      fill={c}
      version="1.1"
      viewBox="0 0 30 30"
    >
      <g>
        <g transform="translate(0 -289.063)">
          <path
            fill={c}
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="1"
            strokeWidth="2"
            d="M4 5c-.554 0-1 .446-1 1s.446 1 1 1h15c.554 0 1-.446 1-1s-.446-1-1-1H4zm0 7c-.554 0-1 .446-1 1s.446 1 1 1h18c.554 0 1-.446 1-1s-.446-1-1-1H4zm17.95 5.004c-.344 0-.678.033-1 .1v3.851H17.1c-.066.323-.1.657-.1 1 0 .343.034.677.1 1h3.85v3.85c.322.066.656.1 1 .1.342 0 .676-.034 1-.1v-3.85h3.85c.067-.323.1-.657.1-1a4.98 4.98 0 00-.1-1h-3.85v-3.851a4.983 4.983 0 00-1-.1zM4 19c-.554 0-1 .446-1 1s.446 1 1 1h10c.554 0 1-.446 1-1s-.446-1-1-1H4z"
            opacity="1"
            transform="translate(0 289.063)"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default CreateplaylistIcon;
