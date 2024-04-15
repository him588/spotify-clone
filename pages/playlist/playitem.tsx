import { Footer } from "@/components/core";
import Songinplaylist from "../../components/core/songinplaylist";
import Clockicon from "@/components/icon/clockicon";
import React, { useEffect, useState } from "react";
type props = {
  items: any;
  token: string;
  increase: boolean;
  id: string;
  type: string;
};

function Playitem({ items, increase }: props) {
  const show = items.filter((item: any) => {
    return item.track.preview_url !== null;
  });
  const songs = show.map((item:any) => item.track);
  
  return (
    <div className=" w-full">
      <div className=" flex justify-between px-6">
        <div className=" text-[#9c9c9d] flex gap-4 text-[14px] font-medium">
          #<p>Title</p>
        </div>
        {increase ? (
          ""
        ) : (
          <p className=" text-[#9c9c9d] text-[14px] font-medium ml-2">Album</p>
        )}

        <div>
          <Clockicon h={20} w={20} c="#9c9c9d" />
        </div>
      </div>
      <div className=" h-[1px] w-full bg-[gray] bg-opacity-30 my-4 "></div>
      <div className=" w-full px-3 flex flex-col gap-2">
        {show.map((item: any, index: number) => (
          
          <Songinplaylist
            key={index}
            number={index + 1}
            increase={increase}
            item={item.track}
            items={songs}
          />
        ))}
      </div>
      <div className=" mt-6 p-4">
        <Footer increase={increase} />
      </div>
    </div>
  );
}

export default Playitem;
