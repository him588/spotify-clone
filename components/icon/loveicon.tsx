import { Details } from "@/types/type";
import React from "react";

function Loveicon({h,w,c}:Details) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={c}
      fill={c}
      viewBox="0 0 24 24"
    >
      <path d="M20.808 11.079C19.829 16.132 12 20.5 12 20.5s-7.829-4.368-8.808-9.421C2.227 6.1 5.066 3.5 8 3.5a4.444 4.444 0 014 2 4.444 4.444 0 014-2c2.934 0 5.773 2.6 4.808 7.579z"></path>
    </svg>
  );
}

export default Loveicon;