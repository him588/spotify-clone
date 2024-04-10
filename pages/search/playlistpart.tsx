import { Card } from "@/components/core";
import React from "react";

function Playlistpart({ playlists }: { playlists: any }) {
  return (
    <>
      {playlists.items.length !== 0 ? (
        <div className=" flex gap-2 flex-col">
          <p className=" text-white text-[25px] font-bold">Playlist</p>

          <div className=" w-full grid grid-cols-4 grid-rows-2 gap-2">
            {playlists.items.map((playlist: any, index: number) => {
              if (index < 8) {
                return <Card playlist={playlist} key={index} />;
              } else {
                return "";
              }
            })}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}

export default Playlistpart;
