import { Headicon, Uploadicon } from "@/components/icon";
import React from "react";
import Image from "next/image";

function Newthird() {
  return (
    <div className=" font-[Merriweather] bg-[#080808] overflow-hidden">
      <div className=" h-[70px] w-full  bg-gray-400 flex items-center justify-center gap-4 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 ">
        <Headicon h={30} w={30} c="#686868" />
        <p className="  text-[#3e3e3e] text-[30px] font-light">
          Immerse Yourself in a world of Limitless Melodies
        </p>
      </div>
      <div className=" bg-[#080808] px-10 mt-5 flex flex-col gap-4">
        <p className=" text-white font-extralight text-[30px]">
          Favourite Genre
        </p>
        <div className=" grid grid-rows-2 grid-cols-3 gap-4 h-[500px] w-full">
          <div className=" h-full w-full rounded-lg cursor-pointer">
            <Image
              src={
                "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBhcnR5fGVufDB8fDB8fHww"
              }
              unoptimized
              alt=""
              height={0}
              width={0}
              style={{ height: "85%", width: "100%", borderRadius: "5px" }}
            />
            <div className=" flex items-center gap-2">
              <p className=" text-white  text-[25px] font-light ">Party</p>{" "}
              <div className=" rotate-[30deg]">
                <Uploadicon h={25} w={25} c="white" />
              </div>
            </div>
          </div>
          <div className=" h-full w-full cursor-pointer">
            <Image
              src={
                "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGFuY2UlMjBtdXNpY3xlbnwwfDB8MHx8fDA%3D"
              }
              unoptimized
              alt=""
              height={0}
              width={0}
              style={{ height: "85%", width: "100%", borderRadius: "5px" }}
            />
            <div className=" flex items-center gap-2">
              <p className=" text-white  text-[25px] font-light ">Dance</p>{" "}
              <div className=" rotate-[30deg]">
                <Uploadicon h={25} w={25} c="white" />
              </div>
            </div>
          </div>
          <div className=" h-[110%] w-full row-span-2 cursor-pointer">
            <Image
              src={
                "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGVuam95JTIwbXVzaWN8ZW58MHwxfDB8fHww"
              }
              unoptimized
              alt=""
              height={0}
              width={0}
              style={{ height: "85%", width: "100%", borderRadius: "5px" }}
            />
            <div className=" flex items-center gap-2">
              <p className=" text-white  text-[25px] font-light ">Lofi</p>{" "}
              <div className=" rotate-[30deg]">
                <Uploadicon h={25} w={25} c="white" />
              </div>
            </div>
          </div>
          <div className=" h-full w-full cursor-pointer">
            <Image
              src={
                "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fExvZnklMjBtdXNpY3xlbnwwfDB8MHx8fDA%3D"
              }
              unoptimized
              alt=""
              height={0}
              width={0}
              style={{ height: "85%", width: "100%", borderRadius: "5px" }}
            />
            <div className=" flex items-center gap-2">
              <p className=" text-white  text-[25px] font-light ">Hip-Pop</p>{" "}
              <div className=" rotate-[30deg]">
                <Uploadicon h={25} w={25} c="white" />
              </div>
            </div>
          </div>
          <div className=" h-full w-full cursor-pointer">
            <Image
              src={
                "https://images.unsplash.com/photo-1482443462550-d2c99314ab6a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhpcHBvcCUyMG11c2ljfGVufDB8MHwwfHx8MA%3D%3D"
              }
              unoptimized
              alt=""
              height={0}
              width={0}
              style={{ height: "85%", width: "100%", borderRadius: "5px" }}
            />
            <div className=" flex items-center gap-2">
              <p className=" text-white  text-[25px] font-light ">Enjoy</p>{" "}
              <div className=" rotate-[30deg]">
                <Uploadicon h={25} w={25} c="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newthird;
// text-[#686868]
