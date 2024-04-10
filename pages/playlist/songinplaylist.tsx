import React, { useContext, useEffect, useState } from "react";
import { fetchsonginfo } from "../../components/helper";
import Image from "next/image";
import {
  Addtofavicon,
  Threedoticon,
  Videoplayicon,
} from "../../components/icon";
import { musicplayercontext } from "../../components/context";
import Link from "next/link";
type props = {
  number: number;
  increase: boolean;
  item: any;
  items: any;
};
function Songinplaylist({ number, increase, item, items }: props) {
  const [hover, sethover] = useState(false);
  const { setmusicplayer } = useContext(musicplayercontext);

  function handleclick() {
    console.log(item);
    const artist = {
      name: item.track.artists[0].name,
      artistid: item.track.artists[0].id,
    };
    const song = {
      name: item.track.name,
      img: item.track.album.images[0].url,
      id: item.track.id,
      url: item.track.preview_url,
      exists_at: number - 1,
    };
    const containsin = {
      type: "playlist",
      songs: items,
    };
    setmusicplayer(() => {
      return { artist: artist, song: song, containsIn: containsin };
    });
  }
  console.log(item);
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
            item.track &&
            item.track.album &&
            item.track.album.images[0] &&
            item.track.album.images[0].url && (
              <Image
                src={item.track.album.images[0].url}
                alt=""
                unoptimized
                height={0}
                width={0}
                style={{ height: "40px", width: "40px", borderRadius: "5px" }}
              />
            )}

          <div>
            <p className=" text-white font-medium">
              {item.track.name.slice(0, 15)}...
            </p>
            <div className=" flex">
              {item.track.artists.map((artist: any, index: number) => {
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
          {item && item.track.album && item.track.album.name && (
            <p
              className={`" text-[14px]  font-normal text-left  hover:underline hover:underline-offset-1 hover:decoration-white ${
                hover ? "text-white" : "text-[gray]"
              } `}
            >
              {item.track.album.name}
            </p>
          )}
        </div>
      )}

      <div className=" flex gap-4 w-[33%]    items-center justify-end text-[gray] text-[15px] font-medium">
        {hover ? <Addtofavicon h={20} w={20} c="white" /> : ""}
        {hover ? <Threedoticon h={20} w={20} c="white" /> : ""}
        <p>{(item.track.duration_ms / 60000).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Songinplaylist;
