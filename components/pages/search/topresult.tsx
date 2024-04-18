import React, { useContext, useState } from "react";
import Image from "next/image";
import { Playicon } from "@/components/icon";
import Song from "./song";
import { musicplayercontext } from "@/components/context";

function Topresult({ tracks,increase }: { tracks: any,increase:boolean }) {
  // console.log({ tracks });
  const [show, setshow] = useState(false);
  const { setmusicplayer } = useContext(musicplayercontext);
  const newitems=tracks.items.filter((item:any)=>item.preview_url!==null)
  console.log({newitems})



  function handleclick() {
    const artist = {
      name: newitems[0].artists[0].name,
      artistid: newitems[0].artists[0].id,
    };
    const song = {
      name: newitems[0].name,
      img: newitems[0].album.images[0].url,
      id: newitems[0].id,
      url: newitems[0].preview_url,
      exists_at: 0,
    };
    const containsin = {
      type: "songs",
      songs: newitems,
    };
    setmusicplayer(() => {
      return { artist: artist, song: song, containsIn: containsin };
    });
  }

  return (
    <>
      {tracks.items.length !== 0 ? (
        <div className={`w-full h-[300px] flex gap-3 ${increase?"flex-col h-auto":"flex h-[300px]"}`}>
          <div className={`"   h-full flex flex-col gap-6 ${increase?" w-[400px] h-[230px]":"w-[50%] h-full"} `}>
            <p className=" text-white text-[25px] font-bold">Top result</p>
            <div
              onMouseEnter={() => {
                setshow(true);
              }}
              onMouseLeave={() => {
                setshow(false);
              }}
              onClick={handleclick}
              className={`w-full h-[280px] ${
                show ? "bg-gray-400" : "bg-gray-700"
              }  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 rounded-md cursor-pointer p-4 relative`}
            >
              {newitems &&
                tracks.items &&
                newitems[0].album &&
                newitems[0].album.images[0] &&
                newitems[0].album.images[0].url && (
                  <Image
                    src={newitems[0].album.images[0].url}
                    alt=""
                    height={0}
                    width={0}
                    unoptimized
                    style={{
                      height: "100px",
                      width: "100px",
                      borderRadius: "8px",
                    }}
                  />
                )}

              {newitems &&
                newitems[0] &&
                newitems[0].name && (
                  <p className=" text-[28px] font-bold text-white mt-2">
                    {newitems[0].name}
                  </p>
                )}

              {newitems &&
                newitems &&
                newitems[0] &&
                newitems[0].artists &&
                newitems[0].artists[0].name && (
                  <p className=" text-gray-600 font-semibold">
                    Song .{" "}
                    <span className=" text-white">
                      {newitems[0].artists[0].name}
                    </span>
                  </p>
                )}

              <div
                className={` absolute right-5 bottom-[30px] transition-all duration-150 ${
                  show
                    ? " opacity-100 translate-y-0"
                    : " opacity-0 translate-y-11"
                }`}
              >
                <Playicon ch={45} cw={45} h={25} w={25} c="black" />
              </div>
            </div>
          </div>
          <div className={`" flex w-[50%] h-full flex-col gap-6 ${increase?" w-full":" w-[50%]"}`}>
            <p className=" text-white text-[25px] font-semibold">Songs</p>
            <div>
              {newitems.map((item: any, index: number) => {
                if (index < (increase?10:4)) {
                  return <Song key={index} item={item} items={newitems} number={index} />;
                } else {
                  return "";
                }
              })}
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
     
    </>
  );
}

export default Topresult;
