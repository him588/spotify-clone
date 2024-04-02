import React from "react";
import { Instaicon, Twittericon } from "../icon";
import Facebookicon from "../icon/facebookicon";

function Footer({ increase }: { increase: boolean }) {
  return (
    <div className=" w-full">
      <div className=" flex justify-between">
        <div className=" flex gap-10 ">
          <div className=" flex gap-1 flex-col">
            <p className=" text-base font-bold text-white">Company</p>
            <div className=" text-base text-[#898989] font-medium mt-1 flex flex-col gap-1">
              <p className=" cursor-pointer hover:text-white hover:underline  hover:underline-offset-1">
                About
              </p>
              <p className=" cursor-pointer hover:text-white hover:underline  hover:underline-offset-1">
                Jobs
              </p>
              <p className=" cursor-pointer hover:text-white hover:underline  hover:underline-offset-1">
                For the Record
              </p>
            </div>
          </div>
          <div className=" flex gap-1 flex-col">
            <p className=" text-base font-bold text-white">Communities</p>
            <div className=" text-base text-[#898989] font-medium mt-1 flex flex-col gap-1">
              <p className=" cursor-pointer hover:text-white hover:underline  hover:underline-offset-1">
                For Artists
              </p>
              <p className=" cursor-pointer hover:text-white hover:underline  hover:underline-offset-1">
                Developers
              </p>
              <p className=" cursor-pointer hover:text-white hover:underline  hover:underline-offset-1">
                Advertisement
              </p>
              <p className=" cursor-pointer hover:text-white hover:underline  hover:underline-offset-1">
                Investors
              </p>
              <p className=" cursor-pointer hover:text-white hover:underline  hover:underline-offset-1">
                Vendors
              </p>
            </div>
          </div>
          <div>
            <p className=" text-base font-bold text-white">Useful links</p>
            <div className=" text-base text-[#898989] font-medium mt-1 flex flex-col gap-1">
              <p className=" cursor-pointer hover:text-white hover:underline  hover:underline-offset-1">
                Support
              </p>
              <p className=" cursor-pointer hover:text-white hover:underline  hover:underline-offset-1">
                Free Mobile app
              </p>
              <p className=" cursor-pointer hover:text-white hover:underline  hover:underline-offset-1">
                For the Record
              </p>
            </div>
          </div>
        </div>
        <div className={`flex gap-4 ${increase ? " flex-col" : "flex-row"}`}>
          <div className=" h-[40px] w-[40px] rounded-full bg-[#292929] flex items-center justify-center cursor-pointer hover:bg-gray-500 hover:bg-opacity-30 ">
            <Instaicon h={20} w={20} c="white" />
          </div>
          <div className=" h-[40px] w-[40px] rounded-full bg-[#292929] flex items-center justify-center cursor-pointer hover:bg-gray-500 hover:bg-opacity-30 ">
            <Twittericon h={20} w={20} c="white" />
          </div>
          <div className=" h-[40px] w-[40px] rounded-full bg-[#292929] flex items-center justify-center cursor-pointer hover:bg-gray-500 hover:bg-opacity-30 ">
            <Facebookicon h={20} w={20} c="white" />
          </div>
        </div>
      </div>
      <div className=" h-[1px] w-full bg-[gray] bg-opacity-50 my-8"></div>
      <div className=" flex items-end justify-end">
        <p className="text-[#898989] text-[14px] font-semibold">
          © 2024 Spotify AB
        </p>
      </div>
    </div>
  );
}

export default Footer;
