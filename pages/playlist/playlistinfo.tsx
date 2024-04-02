import { getplaylistinfo } from "@/components/helper";
import React, { useEffect, useState } from "react";
import { Header } from "@/components/core";
import Image from "next/image";
import {
  Addtofavicon,
  MenuIcon,
  Threedoticon,
  Videoplayicon,
} from "@/components/icon";
import Playitem from "./playitem";

function Playlistinfo({
  token,
  increase,
}: {
  token: string;
  increase: boolean;
}) {
  const [playlistData, setPlaylistData] = useState<any>();
  useEffect(() => {
    const fetchPlaylistData = async () => {
      try {
        const play = await getplaylistinfo(token, "1LIowjORrNqFFyXYqK0JvE");
        setPlaylistData(play);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPlaylistData();
  }, [token]);
  return (
    <div className="bg-[#121212] h-full w-full rounded-md overflow-scroll scrollbar-hide">
      <div
        className={` bg-[#891d2d] bg-gradient-to-b from-[#891d2d] to-[#380808] ${
          increase ? "h-[40vh]" : "h-[60vh]"
        } `}
      >
        <div className="py-3 px-4">
          <Header />
        </div>
        <div className="flex gap-5 py-3 pl-5">
          <div className="">
            {playlistData && playlistData.images && playlistData.images[0] && (
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
          <div className={`" ${increase ? "mt-4" : "mt-10 "}`}>
            <p className="text-white text-[14px]">Playlist</p>
            <div className="text-white text-[100px] font-bold leading-[100px]">
              {playlistData && playlistData.name && (
                <p
                  className={`text-white  font-bold  ${
                    increase
                      ? " text-[50px] leading-[50px] "
                      : "text-[100px] leading-[100px]"
                  }`}
                >
                  {playlistData.name.slice(0, 10)}...
                </p>
              )}
            </div>
            <div
              className={`"text-white text-sm font-normal text-white flex gap-1  ${
                increase ? "mt-3" : "mt-12"
              }`}
            >
              <Image
                alt=""
                width={20}
                height={20}
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/768px-Spotify_icon.svg.png"
                }
              />
              <span className="font-bold cursor-pointer hover:underline hover:underline-offset-1">
                Spotify
              </span>
              <span className="text-[20px] font-bold leading-4">.</span>
              {playlistData && playlistData.tracks && (
                <span>{playlistData.tracks.items.length}</span>
              )}
              Songs
            </div>
          </div>
        </div>
      </div>

      <div className="h-[100px] flex justify-between px-4 items-center bg-gradient-to-b from-[#380808] to-[#121212]">
        <div className="flex items-center gap-5 ">
          <div className="h-[55px] w-[55px] rounded-full bg-[#1ed760] flex items-center justify-center cursor-pointer">
            <Videoplayicon w={45} h={45} c="black" />
          </div>
          <div className="cursor-pointer">
            <Addtofavicon h={35} w={35} c="#a7a7a7" />
          </div>
          <div>
            <Threedoticon h={30} w={30} c="#a7a7a7" />
          </div>
        </div>
        <div className="cursor-pointer flex items-center ">
          <p className="text-[#a7a7a7] text-[16px] font-medium">List</p>
          <MenuIcon h={20} w={30} c="#a7a7a7" />
        </div>
      </div>
      <div className="px-4 mt-2">
        {playlistData && playlistData.tracks && playlistData.tracks.items && (
          <Playitem
            items={playlistData.tracks.items}
            token={token}
            increase={increase}
          />
        )}
      </div>
    </div>
  );
}

export default Playlistinfo;
