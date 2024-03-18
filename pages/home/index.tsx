"use client";
import { Homeicon, Searchicon } from "@/components/icon";
import Myplaylist from "./myplaylist";
import { useState } from "react";
import spotifyApi from "@/components/lib/spotify";
import { useSession } from "next-auth/react";
// import { CustomUser } from "@/types/type";

export default function Home() {
  const [Increase, setIncrease] = useState(false);


  const {data:session}=useSession()
  console.log(session?.user?.email)

  return (
    <div className={`" min-h-auto h-screen w-full bg-[black] p-2  `}>
      <div
        className={`" h-full  flex flex-col gap-2 transition-all duration-150 ${
          Increase ? "w-[55%] " : "w-[23%]"
        } `}
      >
        <div className=" h-[120px] w-[full] bg-[#121212] rounded-md flex flex-col gap-4 p-5">
          <div className="flex items-center gap-4 cursor-pointer">
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
    </div>
  );
}
