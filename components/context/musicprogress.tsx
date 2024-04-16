import React, { ReactNode, createContext, useContext, useState } from "react";

type prop = {
  progress: number | null;
  setprogress: React.Dispatch<React.SetStateAction<number|null>>;
};
const initilvalue = {
  progress: 0,
  setprogress: () => 0,
};
const musicprogresscontext = createContext<prop>(initilvalue);

function Musicprogresscontextprovider({ children }: { children: ReactNode }) {
  const [progress, setprogress] = useState<number|null>(null);
  return (
    <musicprogresscontext.Provider value={{ progress,setprogress }}>
      {children}
    </musicprogresscontext.Provider>
  );
}
