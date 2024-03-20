import { Details } from "@/types/type";
import React from "react";

function CorrectIcon({ h, w, c }: Details) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      fill={c}
      version="1.1"
      viewBox="0 0 335.765 335.765"
      xmlSpace="preserve"
    >
      <path d="M311.757 41.803L107.573 245.96 23.986 162.364 0 186.393 107.573 293.962 335.765 65.795z"></path>
    </svg>
  );
}

export default CorrectIcon;
