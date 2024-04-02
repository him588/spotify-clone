import { Homeicon, Searchicon } from "@/components/icon";
import Myplaylist from "../../components/core/myplaylist";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Playlistinfo from "./playlistinfo";
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

  return (
    <div
      className={`" min-h-auto h-screen w-full flex  gap-2 bg-[black] p-2  `}
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
        <Playlistinfo token={token} increase={Increase} />
      </div>
    </div>
  );
}
