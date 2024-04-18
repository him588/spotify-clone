import React, { useEffect, useState } from "react";
import { Card } from "@/components/core";
import { fetchapi } from "@/components/helper";
// import { Playlist } from "@/types/type";
import { error } from "console";
import Link from "next/link";

function Block({
  token,
  type,
  increase,
}: {
  token: string;
  type: string;
  increase: boolean;
}) {
  const [playlistsdata, setplaylistsdata] = useState<any>(null);
  useEffect(() => {
    const data = fetchapi(token, type, increase ? 3 : 4);
    data
      .then((data) => setplaylistsdata(data.playlists.items))
      .catch((error) => console.log(error));
  }, [token, type, increase]);
  return (
    <div className=" gap-3 flex flex-col mb-2 overflow-hidden">
      <div className=" w-full flex justify-between items-end px-2">
        <Link href={`/search/${type}`}>
        <p className=" text-[26px] text-white font-bold hover:underline hover:underline-offset-2 cursor-pointer  ">
          {type}
        </p>
        </Link>
        <Link href={`/search/${type}`}>
        <p className=" text-[14px] text-[#b0b0b0] font-bold hover:underline hover:underline-offset-2 cursor-pointer  ">
          Show all
        </p>
        </Link>
      </div>
      <div
        className={` grid  gap-3 -mt-1 grid-rows-1 overflow-hidden ${
          increase ? " grid-cols-3" : "grid-cols-4"
        }`}
      >
        {playlistsdata?.map((playlist:any) => {
          return <Card key={playlist.id} playlist={playlist} />;
        })}
        {/* <Card playlist={playlistsdata && playlistsdata[0]}/> */}
      </div>
    </div>
  );
}

export default Block;
