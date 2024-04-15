import { Card } from "@/components/core";
import React from "react";

function Playlistpart({ playlists,increase }: { playlists: any,increase:boolean }) {
  return (
    <>
      {playlists.items.length !== 0 ? (
        <div className=" flex gap-2 flex-col">
          <p className=" text-white text-[25px] font-bold">Playlist</p>

          <div className={`" w-full grid  grid-flow-row gap-2  ${increase?"grid-cols-3":"grid-cols-4"}`}>
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
