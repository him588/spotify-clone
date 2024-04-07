import { Homeicon, Searchicon } from "@/components/icon";
import Myplaylist from "../../components/core/myplaylist";
import { useContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Playlistinfo from "./playlistinfo";
import { musicplayercontext } from "@/components/context";
import { Musicplayer } from "@/components/core";
export default function Home() {
  const [Increase, setIncrease] = useState(false);
  const [token, settoken] = useState("");
  const { data: session } = useSession();
  const router = useRouter();
  const { id } = router.query;
  useEffect(() => {
    if (session && (session as any).accessToken) {
      settoken(() => (session as any).accessToken);
    }
  }, [session]);
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
            Increase ? "w-[55%] " : "w-[300px]"
          } `}
        >
          <div className=" h-[120px] w-[full] bg-[#121212] rounded-md flex flex-col gap-4 p-5">
            <div className="flex items-center gap-4 cursor-pointer ">
              <Homeicon h={30} w={30} c="white" />
              <p className=" text-white font-semibold ">Home</p>
            </div>
            <div className="flex items-center gap-4 cursor-pointer">
              <Searchicon h={30} w={30} c="white" />
              <p className=" text-white font-semibold ">Search</p>
            </div>
          </div>
          <div className=" h-[calc(100%-120px)] w-full bg-[#121212] rounded-md">
            <Myplaylist Increase={Increase} setIncrease={setIncrease} />
          </div>
        </div>
        <div
          className={`h-full flex flex-col transition-all duration-150 ${
            Increase ? "w-[45%]" : "w-[calc(100%-300px)]"
          }`}
        >
          <Playlistinfo
            token={token}
            increase={Increase}
            id={id ? id.toString() : ""}
          />
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
