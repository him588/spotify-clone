import { CreateplaylistIcon } from "@/components/icon";
import React from "react";

function Addplaylist({
  setshowplaylist,
}: {
  setshowplaylist: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      onClick={() => setshowplaylist(false)}
      className=" h-full w-full flex items-center gap-2 px-1 cursor-pointer"
    >
      <CreateplaylistIcon h={20} w={20} c="white" />
      <p className=" text-white text-sm">Create a new playlist</p>
    </div>
  );
}

export default Addplaylist;
