import { Homeicon, Searchicon } from "@/components/icon";
import Myplaylist from "../../components/core/myplaylist";
import { useContext, useEffect, useState } from "react";
import { musicplayercontext } from "@/components/context";
import { Musicplayer, Topnav } from "@/components/core";
import Sidepage from "./sidepage";
export default function Liked() {
  const [Increase, setIncrease] = useState(false);
  const { musicplayer } = useContext(musicplayercontext);

  return (
    <div
      className={` scrollbar-thin bg-black scrollbar-thumb-slate-950 ${
        musicplayer !== null ? "h-[110vh]" : "h-screen"
      }`}
    >
      <div
        className={`min-h-auto   w-full flex  gap-2 bg-[black] p-2 transition-all duration-150 ${
          musicplayer !== null ? "h-[95vh]" : "h-[100vh]"
        } `}
      >
        <div
          className={`" h-full  flex flex-col gap-2 transition-all duration-150 ${
            Increase ? "w-[52%] " : "w-[400px]"
          } `}
        >
          <Topnav />
          <div className=" h-[calc(100%-120px)] w-full bg-[#121212] rounded-md">
            <Myplaylist Increase={Increase} setIncrease={setIncrease} />
          </div>
        </div>
        <div
          className={`h-full flex flex-col transition-all duration-150 ${
            Increase ? "w-[48%]" : "w-[calc(100%-400px)]"
          }`}
        >
<Sidepage increase={Increase}/>
          {/* <Liked/> */}
          {/* <Playlistinfo
            token={token}
            increase={Increase}
            id={id ? id.toString() : ""}
          /> */}
        </div>
      </div>
      <div
        className={`" h-[15vh]  bottom-0 px-2  ${
          musicplayer ? "h-[15vh]" : "h-0 hidden"
        } `}
      >
        <Musicplayer />
      </div>
    </div>
  );
}
