import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Header } from "@/components/core";
import {
  Addtofavicon,
  MenuIcon,
  Threedoticon,
  Videoplayicon,
} from "@/components/icon";
import {Loveicon} from "@/components/icon";
// import Playitem from "./playitem";
import { UsePlaylistInfo, Usecurrentuser } from "@/components/custom";
import { UsePlaylistManagement } from "@/components/custom/usemanageplaylist";
import { playlist } from "@/types/type";
import Songinplaylist from "@/components/core/songinplaylist";

interface PlaylistinfoProps {
  increase: boolean;
}

function Sidepage({increase}: PlaylistinfoProps) {
  const {currentuser}=Usecurrentuser()
  console.log({currentuser})


  return (
    <div className="bg-[#121212] h-full w-full rounded-md overflow-scroll scrollbar-hide">
      <div
        className={`${increase ? "h-[40vh]" : "h-[60vh]"}`}
      >
        <div className="py-3 px-4">
          <Header />
        </div>
        <div className="flex gap-5 py-3 pl-5">
          <div className={` overflow-hidden ${increase ? "h-[120px] ": "h-[230px]"}`}>
            
          <div className=' h-full w-[230px] bg-gradient-to-r from-indigo-600 to-fuchsia-500 rounded-md flex flex-col items-center'>
            <Loveicon h={200} w={200} c='white'/>
        </div>
              {/* <Image
                src={playlistData.images[0].url}
                width={increase ? 120 : 230}
                height={increase ? 120 : 230}
                unoptimized
                className="rounded-md"
                alt=""
              /> */}
        
          </div>
          <div className={`${increase ? "mt-4" : "mt-10"}`}>
            <p className="text-white text-[14px]">Liked</p>
            <div className="text-white font-bold leading-[100px]">
              
                <p
                  className={`text-white font-bold ${
                    increase
                      ? "text-[50px] leading-[50px]"
                      : "text-[100px] leading-[100px]"
                  }`}
                >
                  Liked Song
                </p>
            
            </div>
            <div
              className={`text-white text-sm font-normal  flex gap-1 ${
                increase ? "mt-3" : "mt-12"
              }`}
            >
              <Image
                alt=""
                width={20}
                height={20}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/768px-Spotify_icon.svg.png"
              />
              <span className="font-bold cursor-pointer hover:underline hover:underline-offset-1">
                Songify
              </span>
              <span className="text-[20px] font-bold leading-4">.</span>
              
                <span>{currentuser?.likedsong.length}</span>
              
              Songs
            </div>
          </div>
        </div>
      </div>

      <div
        className={`h-[100px] flex justify-between px-4 items-center bg-gradient-to-b  to-[#121212]`}
      >
        <div className="flex items-center gap-5">
          <div className="h-[55px] w-[55px] rounded-full bg-[#1ed760] flex items-center justify-center cursor-pointer">
            <Videoplayicon w={45} h={45} c="black" />
          </div>
         
          <div>
            <Threedoticon h={30} w={30} c="#a7a7a7" />
          </div>
        </div>
        <div className="cursor-pointer flex items-center">
          <p className="text-[#a7a7a7] text-[16px] font-medium">List</p>
          <MenuIcon h={20} w={30} c="#a7a7a7" />
        </div>
      </div>
      <div className="px-4 mt-2">
        <div className=" flex items-center "></div>

       {
        currentuser?.likedsong.map((song,index)=><Songinplaylist key={index} increase={increase} number={index+1} item={song} items={currentuser.likedsong}   />)
       } 
        {/* {playlistData?.tracks?.items && playlistData.id && (
          <Playitem
            items={playlistData.tracks.items}
            token={token}
            increase={increase}
            id={playlistData.id}
            type={playlistData.type}
          />
        )} */}
      </div>
    </div>
  );
}

export default Sidepage;



