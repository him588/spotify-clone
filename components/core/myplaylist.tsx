"use client";
import { Button } from "@/components/core";
import {
  Addicon,
  Arrowicon,
  Libicon,
  MenuIcon,
  Searchicon,
} from "@/components/icon";
import React, { useEffect, useState } from "react";
import Sortbybox from "./sortbybox";
import { sorted } from "@/types/type";
import Addplaylist from "./addplaylist";
type prop = {
  Increase: boolean;
  setIncrease: React.Dispatch<React.SetStateAction<boolean>>;
};
function Myplaylist({ Increase, setIncrease }: prop) {
  const [menu, setmenu] = useState(false);
  const [showmenu, setshowmenu] = useState(false);
  const [showplaylist, setshowplaylist] = useState(false);
  const [sortvalue, setsortvalue] = useState<string>();
  const [search, setsearch] = useState<string>();
  const [showsearch, setshowsearch] = useState(false);
  const [sortby, setsortby] = useState<sorted>({
    Recents: true,
    Recentlyadded: false,
    Alphabetical: false,
    Creator: false,
  });
  useEffect(() => {
    if (sortby.Recents) {
      setsortvalue("Recents");
    } else if (sortby.Recentlyadded) {
      setsortvalue("Recently added");
    } else if (sortby.Alphabetical) {
      setsortvalue("Alphabetical");
    } else {
      setsortvalue("Creator");
    }
  }, [sortby]);
  return (
    <div
      className=" h-full w-full p-3"
      onClick={() => {
        setshowmenu(false);
      }}
    >
      <div className=" flex items-center justify-between">
        <div className=" flex gap-2 items-center">
          <Libicon h={28} w={28} c="#a7a7a7" />
          <p className=" font-semibold text-[#a7a7a7] text-[16px]">
            Your Library
          </p>
        </div>
        <div className=" flex items-center gap-2">
          <div className=" relative">
            <div
              onClick={() => setshowplaylist((prev) => !prev)}
              className=" p-1 cursor-pointer  rounded-full hover:bg-gray-400 hover:bg-clip-padding hover:backdrop-filter hover:bg-opacity-5"
            >
              <Addicon h={30} w={30} c="#a7a7a7" />
            </div>
            {showplaylist ? (
              <div className=" h-[45px] w-[180px] ml-2 bg-[#282828] absolute rounded-sm z-20">
                <Addplaylist setshowplaylist={setshowplaylist} />
              </div>
            ) : (
              ""
            )}
          </div>
          <div
            onClick={() => setIncrease((prev) => !prev)}
            className={`"p-1 cursor-pointer  rounded-full hover:bg-gray-400 hover:bg-clip-padding hover:backdrop-filter hover:bg-opacity-5 transition-all duration-150 ${
              Increase ? " rotate-180" : " rotate-0"
            }`}
          >
            <Arrowicon h={30} w={30} c="#a7a7a7" />
          </div>
        </div>
      </div>
      <div
        className={`flex mt-3 gap-4 ${
          Increase ? " flex-row justify-between" : " flex-col"
        } `}
      >
        <div className=" flex gap-2">
          <Button name="All" />
          <Button name="Liked song " />
          <Button name="Playlist" />
        </div>
        <div
          className={` flex  justify-between items-center ${
            Increase ? " gap-4" : "w-full"
          }`}
        >
          <div
            className={` flex  bg-clip-padding backdrop-filter bg-opacity-20 ${
              showsearch ? " rounded-sm bg-gray-400 " : " rounded-full"
            }`}
          >
            <div
              onClick={() => setshowsearch((prev) => !prev)}
              className=" cursor-pointer p-1 rounded-full   hover:bg-gray-400 hover:bg-clip-padding hover:backdrop-filter hover:bg-opacity-20"
            >
              <Searchicon h={20} w={20} c="#a7a7a7" />
            </div>
            <input
              type="text"
              className={`"  outline-none border-none bg-transparent text-white transition-all duration-150 ${
                showsearch ? "w-[140px]" : "w-0"
              } `}
              placeholder="Search in library"
              value={search}
              onChange={(e) => setsearch(e.currentTarget.value)}
            />
          </div>
          <div
            onMouseEnter={() => setmenu(true)}
            onMouseLeave={() => setmenu(false)}
            onClick={(e) => {
              e.stopPropagation();
              setshowmenu(true);
            }}
            className=" flex gap-1  relative"
          >
            <p
              className={`cursor-pointer ${
                menu ? "text-white text-[14px]" : "text-[#a7a7a7] text-[14px]"
              }`}
            >
              {showsearch ? `${sortvalue?.slice(0, 3)}...` : sortvalue}
            </p>
            <MenuIcon
              h={menu ? 22 : 21}
              w={menu ? 22 : 21}
              c={menu ? "white" : "#a7a7a7"}
            />
            {showmenu ? (
              <div
                onMouseEnter={(e) => e.stopPropagation()}
                onMouseLeave={(e) => e.stopPropagation()}
                className=" h-[250px] w-[150px] rounded-sm  z-10 absolute right-0"
              >
                <Sortbybox
                  setshowmenu={setshowmenu}
                  setsortby={setsortby}
                  sortby={sortby}
                />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myplaylist;
