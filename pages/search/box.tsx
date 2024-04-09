import React from "react";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

function Box({
  increase,
  color,
  name,
  img,
}: {
  increase: boolean;
  color: string;
  name: string;
  img: string;
}) {
  const divRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | null>(null);
  useEffect(() => {
    const updateWidth = (): void => {
      if (divRef.current) {
        setWidth(divRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);
  return (
    <div
      ref={divRef}
      className={`  w-full  rounded-lg relative overflow-hidden cursor-pointer transition-all duration-150 ease-in-out hover:shadow-2xl hover:shadow-[color] ${
        increase ? "h-[170px]" : "h-[200px]"
      }`}
      style={{ backgroundColor: color }}
    >
      <p className=" text-white font-bold text-[24px] py-1 px-2 ">{name}</p>
      <div className=" h-[100px] w-[100px] bg-black absolute -bottom-5 -right-5 rotate-45">
        <Image
          src={img}
          alt=""
          width={0}
          height={0}
          unoptimized
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
}

export default Box;
