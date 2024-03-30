import React from "react";
import Header from "../../components/core/header";
import { Card, Footer } from "@/components/core";
import Useplaylist from "@/components/custom/useplaylists";
import { useSession } from "next-auth/react";
import Recentlyplayed from "@/components/core/recentlyplayed";
import Block from "./block";
import {Button} from "@/components/core";

const colors = [
  "from-gray-800",
  "from-[#12122c]",
  "from-[#353535]",
  "from-[#3d1935]",
  "from-[#143026]",
  "from-[#301414]",
  "from-[#301414]",
];

function Sidepage({ token,increase }: { token: string,increase:boolean }) {
  const { data } = useSession();
  // const {accessToken}=data

  const playlistInfo = Useplaylist();
  playlistInfo();
  return (
    <div className=" h-full w-full bg-[#121212] rounded-md overflow-scroll scrollbar-hide ">
      <div className="  relative w-full bg-gradient-to-b from-[#12181b]  to-[#121212]">
        <div className=" p-3  top-0 z-30 w-full">
          <Header />
          <div className=' flex gap-2 py-4'>
            <Button name='All'/>
            <Button name='Music'/>
            <Button name='Podcast'/>
        </div>
        </div>
        <div className=" px-3 flex  flex-wrap  z-10 gap-3">
          <Recentlyplayed />
          <Recentlyplayed />
          <Recentlyplayed />
        </div>
      </div>
      <div className="p-3">
        <Block token={token} increase={increase} type="Work out" />
        <Block token={token} increase={increase} type="Party" />
        <Block token={token} increase={increase} type="Lofi" />
        <Block token={token} increase={increase} type="Punjabi" />
        <Block token={token} increase={increase} type="Motivation" />
        <Block token={token} increase={increase} type="Study" />
        <Block token={token} increase={increase} type="Romantic" />
      </div>
      <div className=" w-full p-3">
        <Footer increase={increase} />
      </div>
    </div>
  );
}

export default Sidepage;
