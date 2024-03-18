import { sortbyfun } from "@/components/helper";
import { CorrectIcon } from "@/components/icon";
import { sorted } from "@/types/type";
import React, { useState } from "react";
type prop = {
  setshowmenu: React.Dispatch<React.SetStateAction<boolean>>;
  setsortby: React.Dispatch<React.SetStateAction<sorted>>;
  sortby: sorted;
};

function Sortbybox({ setshowmenu, setsortby, sortby }: prop) {
  return (
    <div
      className=" h-full w-full rounded-md bg-[#282828]"
      onClick={(e) => {
        e.stopPropagation();
        setshowmenu(false);
      }}
    >
      <p className=" text-[12px] font-semibold text-[#acacac]  p-2">Sort by</p>
      <div className=" w-full px-1">
        <div
          className={`" h-[50px] w-full flex items-center pl-3  text-[14px] hover:bg-gray-500 cursor-pointer hover:bg-opacity-10 rounded-sm gap-2 ${
            sortby.Recents ? " text-[#20b254]" : "text-[white]"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            sortbyfun(setsortby, "Recents");
            setshowmenu(false);
          }}
        >
          {sortby.Recents ? <CorrectIcon h={18} w={18} c="#20b254" /> : ""}{" "}
          Recents
        </div>
        <div
          className={`" h-[50px] w-full flex items-center pl-3  text-[14px] hover:bg-gray-500 cursor-pointer hover:bg-opacity-10 rounded-sm gap-2 ${
            sortby.Recentlyadded ? " text-[#20b254]" : "text-[white]"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            sortbyfun(setsortby, "Recentlyadded");
            setshowmenu(false);
          }}
        >
          {sortby.Recentlyadded ? (
            <CorrectIcon h={18} w={18} c="#20b254" />
          ) : (
            ""
          )}{" "}
          Recently added
        </div>
        <div
          className={`" h-[50px] w-full flex items-center pl-3  text-[14px] hover:bg-gray-500 cursor-pointer hover:bg-opacity-10 rounded-sm gap-2 ${
            sortby.Alphabetical ? " text-[#20b254]" : "text-[white]"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            sortbyfun(setsortby, "Alphabetical");
            setshowmenu(false);
          }}
        >
          {sortby.Alphabetical ? <CorrectIcon h={18} w={18} c="#20b254" /> : ""}{" "}
          Alphabetical
        </div>
        <div
          className={`" h-[50px] w-full flex items-center pl-3  text-[14px] hover:bg-gray-500 cursor-pointer hover:bg-opacity-10 rounded-sm gap-2 ${
            sortby.Creator ? " text-[#20b254]" : "text-[white]"
          }`}
          onClick={(e) => {
            e.stopPropagation();
            sortbyfun(setsortby, "Creator");
            setshowmenu(false);
          }}
        >
          {sortby.Creator ? <CorrectIcon h={18} w={18} c="#20b254" /> : ""}{" "}
          Creator
        </div>
      </div>
    </div>
  );
}

export default Sortbybox;
