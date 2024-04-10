import React, { useEffect, useState } from "react";
import Header from "../../components/core/header";
import { Footer } from "@/components/core";
import { CrossIcon } from "@/components/icon";
import { useRouter } from "next/router";
import { Usesearch } from "@/components/custom/usesearch";
import Topresult from "./topresult";
import Playlistpart from "./playlistpart";

function Searchside({ increase, token }: { increase: boolean; token: string }) {
  const [searchinput, setsearchinput] = useState("");
  const router = useRouter();
  const { search } = router.query;
  const { searchData } = Usesearch(token, searchinput);
  useEffect(() => {
    setsearchinput(search ? search.toString() : "");
  }, [search]);
  console.log({ searchData });
  // const { artist, track, playlist } = searchData;
  return (
    <div className="h-full w-full bg-[#121212] rounded-md overflow-scroll scrollbar-hide relative">
      <div className="relative w-full bg-gradient-to-b from-[#12181b] to-[#121212] pt-1">
        <div className="p-3 top-0 z-30 w-full sticky ">
          <Header />
          <div className="w-[350px] absolute top-0 left-[100px] z-50 ">
            <input
              type="text"
              placeholder="What do you have to play? "
              value={searchinput}
              autoFocus
              onChange={(e) =>
                setsearchinput(() => {
                  router.push(`/search/${e.target.value}`);
                  return e.target.value;
                })
              }
              className=" h-[50px] w-[350px] px-3 rounded-full bg-[#0d1214] text-white mt-[6px]  hover:border-[1px] hover:border-solid hover:border-[#172024]"
            />
            <div
              onClick={() => {
                setsearchinput("");
                router.push(`/search`);
              }}
              className=" absolute  right-[10px] top-[20px] cursor-pointer"
            >
              <CrossIcon h={25} w={25} c="white" />
            </div>
          </div>
        </div>

        <div className="w-full px-3 -mt-1 flex flex-col gap-2">
          <div>
            {searchData !== null ? (
              <Topresult tracks={searchData.tracks} />
            ) : (
              ""
            )}
          </div>
          <div className=" mt-2">
            {searchData !== null ? (
              <Playlistpart playlists={searchData.playlists} />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className="w-full p-3">
        <Footer increase={increase} />
      </div>
    </div>
  );
}

export default Searchside;
