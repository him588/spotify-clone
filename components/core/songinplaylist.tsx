import React, { useEffect, useState } from "react";
import { fetchsonginfo } from "../helper";
import Image from "next/image";
import { Addtofavicon, Threedoticon, Videoplayicon } from "../icon";
function Songinplaylist({
  url,
  token,
  number,
  increase,
}: {
  url: string;
  token: string;
  number: number;
  increase: boolean;
}) {
  const [songinfo, setsonginfo] = useState<any>("");
  const [hover, sethover] = useState(false);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const play = await fetchsonginfo(url, token);
        setsonginfo(play);
      } catch (error) {
        console.log(error);
      }
    };
    fetchdata();
  }, [url, token]);
  console.log({ songinfo });
  return (
    <div
      onMouseEnter={() => sethover(true)}
      onMouseLeave={() => sethover(false)}
      className=" flex justify-between items-center hover:bg-[gray] py-2 px-4 hover:bg-opacity-15 rounded-md cursor-pointer  "
    >
      <div
        className={`" flex items-center gap-3  ${
          increase ? "w-[60%]" : "w-[33%]"
        }`}
      >
        <div className=" h-[20px] w-[20px]">
          {hover ? (
            <Videoplayicon h={25} w={25} c="white" />
          ) : (
            <p className=" text-[gray] font-medium">{number}</p>
          )}
        </div>

        <div className=" flex gap-3">
          {songinfo && songinfo.album && songinfo.album.images && (
            <Image
              src={songinfo.album.images[0].url}
              alt=""
              unoptimized
              height={0}
              width={0}
              style={{ height: "40px", width: "40px", borderRadius: "5px" }}
            />
          )}
          <div>
            {songinfo && songinfo.album && songinfo.album.name && (
              <p className=" text-white font-medium">{songinfo.album.name}</p>
            )}
            <div className=" flex">
              {songinfo &&
                songinfo.artists &&
                songinfo.artists.map((art: any, index: number) => {
                  if (index < 2) {
                    return (
                      <p
                        className={` text-[14px] hover:underline hover:underline-offset-1 mr-1 hover:decoration-white ${
                          hover ? " text-white" : "text-[gray]"
                        }`}
                        key={index}
                      >
                        {art.name}
                      </p>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
      {increase ? (
        ""
      ) : (
        <div className=" flex items-center justify-center w-[33%] ">
          {songinfo && songinfo.album && songinfo.album.name && (
            <p
              className={`" text-[14px]  font-normal text-left  hover:underline hover:underline-offset-1 hover:decoration-white ${
                hover ? "text-white" : "text-[gray]"
              } `}
            >
              {songinfo.album.name}
            </p>
          )}
        </div>
      )}

      <div className=" flex gap-4 w-[33%]    items-center justify-end text-[gray] text-[15px] font-medium">
        {hover ? <Addtofavicon h={20} w={20} c="white" /> : ""}
        {hover ? <Threedoticon h={20} w={20} c="white" /> : ""}
        <p>{(songinfo.duration_ms / 60000).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default Songinplaylist;
