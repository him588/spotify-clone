import React from "react";

function Button({ name }: { name: string }) {
  return (
    <button className=" py-[6px] px-3 bg-gray-400 rounded-3xl bg-clip-padding backdrop-filter bg-opacity-10 font-semibold text-white text-[14px] hover:bg-gray-500 hover:bg-opacity-20">
      {name}
    </button>
  );
}

export default Button;
