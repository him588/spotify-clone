import React, { ReactNode, createContext, useState } from "react";
type context = {
  musicplayer: music | null;
  setmusicplayer: React.Dispatch<React.SetStateAction<music | null>>;
};
type music = {
  artist: {
    name: string;
    artistid: string;
  };
  song: {
    name: string;
    img: string;
    id: string;
    url: string;
    exists_at: number;
  };
  containsIn: {
    type: string;
    songs: any;
  };
};

const initialvalue: context = {
  musicplayer: null,
  setmusicplayer: () => null,
};
const musicplayercontext = createContext<context>(initialvalue);

function Musicplayercontextprovider({ children }: { children: ReactNode }) {
  const [musicplayer, setmusicplayer] = useState<music | null>(null);
  return (
    <musicplayercontext.Provider value={{ musicplayer, setmusicplayer }}>
      {children}
    </musicplayercontext.Provider>
  );
}

export { musicplayercontext, Musicplayercontextprovider };
