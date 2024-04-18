import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Header } from "@/components/core";
import {
  Addtofavicon,
  MenuIcon,
  Subicon,
  Threedoticon,
  Videoplayicon,
} from "@/components/icon";
import Playitem from "./playitem";
import { UsePlaylistInfo, Usecurrentuser } from "@/components/custom";
import { UsePlaylistManagement } from "@/components/custom/usemanageplaylist";
import { playlist } from "@/types/type";

interface PlaylistinfoProps {
  token: string;
  increase: boolean;
  id: string;
}

function Playlistinfo({ token, increase, id }: PlaylistinfoProps) {
  const { playlistData } = UsePlaylistInfo(token, id);
  const {handleAddPlaylist,handleRemovePlaylist}=UsePlaylistManagement()
  const {currentuser}=Usecurrentuser()
  const [contains,setcontains]=useState(false)
  const colors = [["#ea7861", "#7b3f33"]];
  useEffect(()=>{
    setcontains(()=>{
      const index=currentuser?.playlist.findIndex((play)=>play.id===id)
      if(index!==-1){
        return false
      }else return true
    })
  },[currentuser,id])
  function getRandomColorPair() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  }

  const randomColorPair = getRandomColorPair();
  function handleadd(){
    const playlist:playlist={
      name:playlistData.name,
      ownername:playlistData.owner.display_name,
      id:playlistData.id,
      image:playlistData.images[0].url
    }
    handleAddPlaylist(playlist)
  }
  // console.log(randomColorPair);

  return (
    <div className="bg-[#121212] h-full w-full rounded-md overflow-scroll scrollbar-hide">
      <div
        className={`bg-gradient-to-b from-[${randomColorPair[0]}] to-[${
          randomColorPair[1]
        }] ${increase ? "h-[40vh]" : "h-[60vh]"}`}
      >
        <div className="py-3 px-4">
          <Header />
        </div>
        <div className="flex gap-5 py-3 pl-5">
          <div className={` overflow-hidden ${increase ? "h-[120px] ": "h-[230px]"}`}>
            {playlistData?.images?.[0] && (
              <Image
                src={playlistData.images[0].url}
                width={increase ? 120 : 230}
                height={increase ? 120 : 230}
                unoptimized
                className="rounded-md"
                alt=""
              />
            )}
          </div>
          <div className={`${increase ? "mt-4" : "mt-10"}`}>
            <p className="text-white text-[14px]">Playlist</p>
            <div className="text-white font-bold leading-[100px]">
              {playlistData?.name && (
                <p
                  className={`text-white font-bold ${
                    increase
                      ? "text-[50px] leading-[50px]"
                      : "text-[100px] leading-[100px]"
                  }`}
                >
                  {playlistData.name.slice(0, 8)}...
                </p>
              )}
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
                Spotify
              </span>
              <span className="text-[20px] font-bold leading-4">.</span>
              {playlistData?.tracks?.items && (
                <span>{playlistData.tracks.items.length}</span>
              )}
              Songs
            </div>
          </div>
        </div>
      </div>

      <div
        className={`h-[100px] flex justify-between px-4 items-center bg-gradient-to-b from-[${randomColorPair[1]}] to-[#121212]`}
      >
        <div className="flex items-center gap-5">
          <div className="h-[55px] w-[55px] rounded-full bg-[#1ed760] flex items-center justify-center cursor-pointer">
            <Videoplayicon w={45} h={45} c="black" />
          </div>
          {contains?<div className="cursor-pointer" onClick={handleadd} >
            <Addtofavicon h={35} w={35} c="#a7a7a7" />
          </div>:<div className="cursor-pointer"onClick={()=>{ console.log("clicked"), handleRemovePlaylist(id)}} >
            <Subicon h={35} w={35} c="#a7a7a7" />
          </div>}
          
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
        {playlistData?.tracks?.items && playlistData.id && (
          <Playitem
            items={playlistData.tracks.items}
            token={token}
            increase={increase}
            id={playlistData.id}
            type={playlistData.type}
          />
        )}
      </div>
    </div>
  );
}

export default Playlistinfo;
