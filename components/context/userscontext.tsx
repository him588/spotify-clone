import { users } from "@/types/type";
import React, { ReactNode, createContext, useState } from "react";

type State = {
    Users?: users;
    setUsers?: React.Dispatch<React.SetStateAction<users>>;
}

const UserContext = createContext<State | null>(null);

const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [Users, setUsers] = useState<users>([]);

    return (
        <UserContext.Provider value={{ Users, setUsers }}>
            {children}
        </UserContext.Provider>
    );
}