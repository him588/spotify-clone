import React, { useState } from "react";
import Header from "../../core/header";
import { Footer } from "@/components/core";
import Box from "./box";
import { CrossIcon, Searchicon } from "@/components/icon";
import { useRouter } from "next/router";
const geners = [
  {
    name: "K-pop",
    img: "https://images.unsplash.com/photo-1630609674924-1b381d09d313?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGtwb3B8ZW58MHx8MHx8fDA%3D",
    color: "#dc148c",
  },
  {
    name: "90's",
    img: "https://images.unsplash.com/photo-1559743345-24713f59f5e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c29uZ3N8ZW58MHx8MHx8fDA%3D",
    color: "#006450",
  },
  {
    name: "South",
    img: "https://images.unsplash.com/photo-1560999909-e214227dd21b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHNvbmdzfGVufDB8fDB8fHww",
    color: "#8400e7",
  },
  {
    name: "Punjabi",
    img: "https://images.unsplash.com/photo-1520942559232-80c4daf60325?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHB1bmphYmklMjBzb25nfGVufDB8fDB8fHww",
    color: "#1e3264",
  },
  {
    name: "Haryanvi",
    img: "https://images.unsplash.com/photo-1588032786045-59cefda005c0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c29uZ3xlbnwwfHwwfHx8MA%3D%3D",
    color: "#e8115b",
  },
  {
    name: "Lofi",
    img: "https://images.unsplash.com/photo-1474959783111-a0f551bdad25?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNvbmd8ZW58MHx8MHx8fDA%3D",
    color: "#b02897",
  },
  {
    name: "Sad",
    img: "https://images.unsplash.com/photo-1535712593684-0efd191312bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNvbmd8ZW58MHx8MHx8fDA%3D",
    color: "#0d73ec",
  },
  {
    name: "Hindi",
    img: "https://images.unsplash.com/photo-1483744463508-8680c28a0bbf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHNvbmd8ZW58MHx8MHx8fDA%3D",
    color: "#e13300",
  },
  {
    name: "English",
    img: "https://images.unsplash.com/photo-1519619091416-f5d7e5200702?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHNvbmd8ZW58MHx8MHx8fDA%3D",
    color: "#1e3264",
  },
  {
    name: "Bhojpuri",
    img: "https://images.unsplash.com/photo-1586973831178-c7fc19836126?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHNvbmd8ZW58MHx8MHx8fDA%3D",
    color: "#503750",
  },
  {
    name: "Hip-Pop",
    img: "https://images.unsplash.com/photo-1575650272057-912a9b9f19ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHxzb25nfGVufDB8fDB8fHww",
    color: "#af2896",
  },
  {
    name: "Sleep",
    img: "https://images.unsplash.com/photo-1598387180485-af1fc300bd43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ4fHxzb25nfGVufDB8fDB8fHww",
    color: "#a56752",
  },
];
function Sidepage({ increase }: { increase: boolean }) {
  const [search, setsearch] = useState("");
  const router = useRouter();
  return (
    <div className="h-full w-full bg-[#121212] rounded-md overflow-scroll scrollbar-hide relative">
      <div className="relative w-full bg-gradient-to-b from-[#12181b] to-[#121212] pt-1">
        <div className="p-3 top-0 z-30 w-full sticky ">
          <Header />
          <div className="w-[350px] absolute top-0 left-[100px] z-50 ">
            <input
              type="text"
              placeholder="What do you have to play? "
              value={search}
              onChange={(e) =>
                setsearch((prev) => {
                  router.push(`/search/${e.target.value}`);
                  return e.target.value;
                })
              }
              className=" h-[50px] w-[350px] px-3 rounded-full bg-[#0d1214] text-white mt-[6px]  hover:border-[1px] hover:border-solid hover:border-[#172024]"
            />
            {/* <div
              onClick={() => setsearch("")}
              className=" absolute  right-[10px] top-[20px] cursor-pointer"
            >
              <CrossIcon h={25} w={25} c="white" />
            </div> */}
          </div>
        </div>

        <div className="w-full px-3 -mt-1">
          <p className="text-[28px] text-white font-bold">Browse all</p>
          <div
            className={`grid  grid-flow-row py-2  ${
              increase ? " grid-cols-3 gap-4" : "grid-cols-4 gap-7"
            } `}
          >
            {geners.map((gen) => (
              <Box
                key={gen.name}
                increase={increase}
                name={gen.name}
                img={gen.img}
                color={gen.color}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="p-3"></div>
      <div className="w-full p-3">
        <Footer increase={increase} />
      </div>
    </div>
  );
}

export default Sidepage;
