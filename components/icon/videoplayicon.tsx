import { Details } from "@/types/type";
import React from "react";

function Videoplayicon({ h, w, c }: Details) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 1024 1024"
    >
      <path fill={c} fillRule="evenodd" d="M716.8 512l-384-256v512z"></path>
    </svg>
  );
}

export default Videoplayicon;
