import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Playlist } from "@/types/type";
import { Playicon } from "../icon";

function  Card({ playlist }: { playlist: Playlist }) {
  const [show,setshow]=useState(false)
  return (
    <Link href={`/playlist/${playlist.id}`}>
      <div
        onMouseEnter={()=>{setshow(true)}}
        onMouseLeave={()=>{setshow(false)}}
        className=" flex relative flex-col w-[100%] h-[260px] p-2  rounded-lg cursor-pointer hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-5 hover:bg-gray-200   "
      >
        <Image
          height={0}
          width={0}
          unoptimized
          style={{
            width: "100%",
            height: "180px",
            borderRadius: "8px",
          }}
          alt=""
          src={playlist.images[0].url}
        />
        <p className=" text-white py-1 font-medium   text-[17px] ">
          {playlist.name.slice(0, 14)}...
        </p>
        <div className="flex flex-wrap text-[#787878] text-[14px] gap-1 font-medium ">
          <p className=" cursor-pointer hover:underline-offset-3 hover:underline">
            {playlist.owner.display_name}
          </p>
        </div>
        <div className={` absolute right-3 bottom-[80px] transition-all duration-150 ${show?" opacity-100 translate-y-0":" opacity-0 translate-y-11"}`}  >
         <Playicon ch={45} cw={45} h={25} w={25} c='black'/>
      </div>
      </div>
    </Link>
  );
}

export default Card;
