import { Button } from "@/components/core";
import BellIcon from "@/components/icon/bellicon";
import LeftIcon from "@/components/icon/lefticon";
import React from "react";
import { Usecurrentuser } from "../custom";

function Header() {
  const {currentuser}=Usecurrentuser()
  return (
    <div className="h-[10vh] w-full flex flex-col gap-6  ">
      <div className=" flex justify-between">
        <div className=" flex gap-2">
          <div className=" bg-[#050708] h-[35px] w-[35px] rounded-full flex items-center justify-center cursor-pointer bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70">
            <LeftIcon h={15} w={15} c="white" />
          </div>
          <div className=" bg-[#050708] h-[35px] w-[35px] rounded-full flex items-center justify-center cursor-pointer bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 rotate-180">
            <LeftIcon h={15} w={15} c="white" />
          </div>
        </div>
        <div className=" flex gap-3">
          <div className=" bg-[#050708] h-[36px] w-[36px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 hover:h-[38px] hover:w-[38px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70">
            <BellIcon h={20} w={20} c="white" />
          </div>
          <div className=" flex  h-[32px] w-[32px] rounded-full items-center justify-center bg-[#b49bc8] text-[#2d2732] font-semibold text-[20px] cursor-pointer">
            {currentuser?.name.slice(0,1)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
