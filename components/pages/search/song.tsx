import React, { useState ,useContext} from "react";
import { Addtofavicon, Threedoticon } from "@/components/icon";
import { musicplayercontext } from "@/components/context";
import Image from "next/image";

function Song({ item,items,number }: { item: any,items:any,number:number }) {
  const [hover, sethover] = useState(false);
  const { setmusicplayer } = useContext(musicplayercontext);

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
        exists_at: number ,
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
      className=" flex justify-between items-center hover:bg-[gray] py-2 px-2 hover:bg-opacity-15 rounded-md cursor-pointer  "
        onClick={handleclick}
    >
      <div className={`" flex items-center gap-3 w-full`}>
        <div className=" flex gap-3">
          {item &&
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
            {item && item.name && (
              <p className=" text-white font-medium">
                {item.name.slice(0, 15)}...
              </p>
            )}

            {item &&
              item.artists &&
              item.artists[0] &&
              item.artists[0].name && (
                <p
                  className={`" text-[14px]  font-normal text-left  hover:underline hover:underline-offset-1 hover:decoration-white ${
                    hover ? "text-white" : "text-[gray]"
                  } `}
                >
                  {item.artists[0].name}
                </p>
              )}
          </div>
        </div>
      </div>
      <div className=" flex gap-4 w-[33%]    items-center justify-end text-[gray] text-[15px] font-medium">
        {hover ? <Addtofavicon h={20} w={20} c="white" /> : ""}
        {hover ? <Threedoticon h={20} w={20} c="white" /> : ""}
        {item && item.duration_ms && (
          <p>{(item.duration_ms / 60000).toFixed(2)}</p>
        )}
      </div>
    </div>
  );
}

export default Song;
