import { Details } from "@/types/type";
import React from "react";

function Homeicon({ h, w, c }: Details) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 1024 1024"
    >
      <path
        fill={c}
        d="M512 128L128 447.936V896h255.936V640H640v256h255.936V447.936z"
      ></path>
    </svg>
  );
}

export default Homeicon;
