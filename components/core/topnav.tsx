import React from "react";
import { Homeicon, Searchicon } from "../icon";
import Link from "next/link";

function Topnav() {
  return (
    <div className=" h-[120px] w-[full] bg-[#121212] rounded-md flex flex-col gap-4 p-5">
      <Link href={"/home"}>
        <div className="flex items-center gap-4 cursor-pointer ">
          <Homeicon h={30} w={30} c="white" />
          <p className=" text-white font-semibold ">Home</p>
        </div>
      </Link>
      <Link href={"/search"}>
        <div className="flex items-center gap-4 cursor-pointer">
          <Searchicon h={30} w={30} c="white" />
          <p className=" text-white font-semibold ">Search</p>
        </div>
      </Link>
    </div>
  );
}

export default Topnav;
