import React from "react";
import Header from "../../components/core/header";
import { Footer } from "@/components/core";
import Recentlyplayed from "@/components/core/recentlyplayed";
import Block from "./block";
import { Button } from "@/components/core";

function Sidepage({ token, increase }: { token: string; increase: boolean }) {
  return (
    <div className=" h-full w-full bg-[#121212] rounded-md overflow-scroll scrollbar-hide ">
      <div className="  relative w-full bg-gradient-to-b from-[#12181b]  to-[#121212]">
        <div className=" p-3  top-0 z-30 w-full">
          <Header />
          <div className=" flex gap-2 py-4">
            <Button name="All" />
            <Button name="Music" />
            <Button name="Podcast" />
          </div>
        </div>
        {/* <div className=" px-3 flex  flex-wrap  z-10 gap-3">
          <Recentlyplayed />
          <Recentlyplayed />
          <Recentlyplayed />
        </div> */}
      </div>
      <div className="p-3 -mt-3">
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
