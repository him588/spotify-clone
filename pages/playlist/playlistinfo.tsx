import { getplaylistinfo } from "@/components/helper";
import React, { useEffect, useState } from "react";
import { Header } from "@/components/core";
import Image from "next/image";

function Playlistinfo({ token }: { token: string }) {
  const [playlistdata, setplaylistdata] = useState<any>();
  useEffect(() => {
    const playlist = getplaylistinfo(token, "1LIowjORrNqFFyXYqK0JvE");
    playlist
      .then((play) => setplaylistdata(play))
      .catch((error) => console.log(error));
  }, [token]);
  if (playlistdata !== undefined) {
    console.log({ playlistdata });
  }

  return (
    <div className=" bg-[#121212] h-full w-full rounded-md overflow-hidden">
      <div className=" h-[65vh] bg-[#891d2d] bg-gradient-to-b from-[#891d2d] to-[#380808]">
        <div className=" p-3">
          <Header />
        </div>
        <div className=" flex gap-5 p-3">
          <div className=" shadow-xl">
            <Image
              src={playlistdata.images[0].url}
              width={0}
              height={0}
              unoptimized
              style={{
                height: "230px",
                width: "230px",
                borderRadius: "4px",
              }}
              alt=""
            />
          </div>
          <div className=" mt-10">
            <p className=" text-white text-[14px]">Playlist</p>
            <p className=" text-white text-[100px] font-bold leading-[100px]">
              {playlistdata.name.slice(0, 10)}...
            </p>
            <div className=" text-white text-sm font-normal flex gap-1 mt-12">
              <Image
                alt=""
                width={20}
                height={20}
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/768px-Spotify_icon.svg.png"
                }
              />
              <span className=" font-bold cursor-pointer hover:underline hover:underline-offset-1">
                Spotify
              </span>
              <span className=" text-[20px] font-bold leading-4">.</span>
              {playlistdata.tracks.items.length} Songs
            </div>
          </div>
        </div>
      </div>
      <div className=" h-[100px] bg-gradient-to-b from-[#380808] to-[#121212]">
        <div className=" flex gap-5 px-3">
          <div className=" h-[60px] w-[60px] rounded-full bg-[#1ed760]"></div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Playlistinfo;
