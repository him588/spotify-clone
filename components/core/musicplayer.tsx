import Image from "next/image";
import { useContext, useEffect, useRef, useState } from "react";
import React from "react";
import { SkipIcon, Videopauseicon, Videoplayicon, VolumeIcon } from "../icon";
import { musicplayercontext } from "../context";
import UseAudioPlayer from "../custom/usemusicplayer";

function Musicplayer() {
  const [skipleft, setskipleft] = useState(false);
  const [skipright, setskipright] = useState(false);
  const { musicplayer } = useContext(musicplayercontext);
  const [playing, setplaying] = useState(true);

  const {
    audioRef,
    togglePlay,
    handleAudioEnd,
    updateProgress,
    handleSkip,
    updateTime,
    playnext,
    playprevious,
  } = UseAudioPlayer();

  useEffect(() => {}, [musicplayer]);
  return (
    <div className=" h-full w-full bg-[#121212] rounded-t-md flex justify-between items-center px-2 overflow-hidden">
      <div className=" flex items-center gap-3 w-[250px]">
        {musicplayer && musicplayer.song.img && (
          <Image
            src={musicplayer?.song.img}
            alt=""
            height={0}
            width={0}
            unoptimized
            onTimeUpdate={updateTime}
            style={{
              height: "60px",
              width: "60px",
              borderRadius: "5px",
            }}
          />
        )}

        <div>
          <p className=" text-white cursor-pointer hover:underline hover:underline-offset-1">
            {musicplayer?.song.name.slice(0, 20)}...
          </p>
          <p className=" text-sm cursor-pointer  text-[gray] hover:underline underline-offset-1">
            {musicplayer?.artist.name}
          </p>
        </div>
      </div>
      <div className=" flex flex-col items-center gap-2">
        <div className=" flex items-center gap-6">
          <div
            className=" flex items-center justify-center rotate-180 cursor-pointer"
            onMouseEnter={() => setskipleft(true)}
            onMouseLeave={() => setskipleft(false)}
            onClick={() => {
              playprevious();
              setplaying(true);
            }}
          >
            <SkipIcon h={35} w={35} c={skipleft ? "#1ed45e" : "white"} />
          </div>
          <div className=" h-[45px] w-[45px]">
            <div
              onClick={() => {
                togglePlay();
                setplaying((prev) => !prev);
              }}
              className=" h-[40px] w-[40px] bg-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-100 hover:h-[42px] hover:w-[42px]"
            >
              {playing ? (
                <Videopauseicon h={25} w={25} c="black" />
              ) : (
                <Videoplayicon h={40} w={40} c="black" />
              )}
            </div>
          </div>
          <div
            className=" flex items-center justify-center cursor-pointer"
            onMouseEnter={() => setskipright(true)}
            onMouseLeave={() => setskipright(false)}
            onClick={() => {
              playnext();
              setplaying(true);
            }}
          >
            <SkipIcon h={35} w={35} c={skipright ? "#1ed45e" : "white"} />
          </div>
        </div>
        <div>
          <audio
            src={musicplayer?.song.url}
            onTimeUpdate={updateTime}
            onEnded={handleAudioEnd}
            autoPlay={true}
            ref={audioRef}
            // loop={true}
          />
          <div
            className="progress-bar bg-[#4d4d4d] h-[3px] rounded-sm w-[280px] cursor-pointer overflow-hidden"
            onClick={handleSkip}
          >
            <div
              className="progress bg-white h-[3px]"
              style={{ width: `${updateProgress()}%` }}
            />
          </div>
        </div>
      </div>

      <div className=" flex gap-3 items-center">
        <div className=" cursor-pointer">
          <VolumeIcon h={20} w={20} c="white" />
        </div>

        <input
          type="range"
          className=" accent-white  outline-none bg-orange-800  h-1 w-[100px] hover:accent-[#1ed45e]"
          max={100}
          min={0}
        />
      </div>
    </div>
  );
}

export default Musicplayer;
