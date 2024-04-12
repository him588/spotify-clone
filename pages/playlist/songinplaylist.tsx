import React, { useContext, useEffect, useState } from "react";
import { fetchsonginfo } from "../../components/helper";
import { Track, user } from "@/types/type";
import Image from "next/image";
import {
  Addtofavicon,
  Threedoticon,
  Videoplayicon,
} from "../../components/icon";
import { UserContext, musicplayercontext } from "../../components/context";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { UseUserSongManagement } from "@/components/custom";
type props = {
  number: number;
  increase: boolean;
  item: any;
  items: any[];
};
function Songinplaylist({ number, increase, item, items }: props) {
  const [hover, sethover] = useState(false);
  const { setmusicplayer } = useContext(musicplayercontext);
  const {handleAdd}=UseUserSongManagement()
  

  function handleclick() {
    setmusicplayer(() => {
      const artist = {
        name: item.artists[0].name,
        artistid: item.artists[0].id,
      };
      const song = {
        name: item.name,
        img: item.album.images[0].url,
        id: item.id,
        url: item.preview_url,
        exists_at: number - 1,
      };
      const containsin = {
        type: "playlist",
        songs: items,
      };
      return { artist: artist, song: song, containsIn: containsin };
    });
  }

  return (
    <div
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
      className=" flex justify-between items-center hover:bg-[gray] py-2 px-4 hover:bg-opacity-15 rounded-md cursor-pointer  "
      onClick={handleclick}
    >
      <div
        className={`" flex items-center gap-3  ${
          increase ? "w-[60%]" : "w-[33%]"
        }`}
      >
        <div className=" h-[20px] w-[20px]">
          {hover ? (
            <Videoplayicon h={25} w={25} c="white" />
          ) : (
            <p className=" text-[gray] font-medium">{number}</p>
          )}
        </div>

        <div className=" flex gap-3">
          {item &&
            item &&
            item.album &&
            item.album.images[0] &&
            item.album.images[0].url && (
              <Image
                src={item.album.images[0].url}
                alt=""
                unoptimized
                height={0}
                width={0}
                style={{ height: "40px", width: "40px", borderRadius: "5px" }}
              />
            )}

          <div>
            <p className=" text-white font-medium">
              {item.name.slice(0, 15)}...
            </p>
            <div className=" flex">
              {item.artists.map((artist: any, index: number) => {
                if (index < 2) {
                  return (
                    <Link key={index} href={`/artist/${artist.id}`}>
                      <p
                        className={` text-[14px] hover:underline hover:underline-offset-1 mr-1 hover:decoration-white ${
                          hover ? " text-white" : "text-[gray]"
                        }`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {artist.name}
                      </p>
                    </Link>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
      {increase ? (
        ""
      ) : (
        <div className=" flex items-center justify-center w-[33%] ml-10 ">
          {item && item.album && item.album.name && (
            <p
              className={`" text-[14px]  font-normal text-left  hover:underline hover:underline-offset-1 hover:decoration-white ${
                hover ? "text-white" : "text-[gray]"
              } `}
            >
              {item.album.name}
            </p>
          )}
        </div>
      )}

      <div className=" flex gap-4 w-[33%]    items-center justify-end text-[gray] text-[15px] font-medium">
        <div onClick={(e)=>handleAdd(e,item)}>{hover ? <Addtofavicon h={20} w={20} c="white" /> : ""}</div>
        <div>{hover ? <Threedoticon h={20} w={20} c="white" /> : ""}</div>
        <p>{(item.duration_ms / 60000).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Songinplaylist;
