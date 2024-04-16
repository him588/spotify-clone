import { Details } from "@/types/type";
import React from "react";

function Uploadicon({h,w,c}:Details) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 1024 1024"
    >
      <path
        fill={c}
        d="M160 832h704a32 32 0 110 64H160a32 32 0 110-64zm384-578.304V704h-64V247.296L237.248 490.048 192 444.8 508.8 128l316.8 316.8-45.312 45.248L544 253.696z"
      ></path>
    </svg>
  );
}

export default Uploadicon;