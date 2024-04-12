import React, { ReactNode, createContext, useState, useEffect } from "react";
// import  user from "@/types/type"; // Assuming the type is now capitalized
import { user } from "@/types/type";

type ContextType = {
  users: user[];
  setUsers: React.Dispatch<React.SetStateAction<user[]>>;
};

const UserContext = createContext<ContextType | undefined>(undefined);

function UserContextProvider({ children }: { children: ReactNode }) {
  const [users, setUsers] = useState<user[]>([]);

  useEffect(() => {
    try {
      const localUserString = localStorage.getItem("users");
      const localUsers = localUserString ? JSON.parse(localUserString) : [];
      setUsers(localUsers);
    } catch (error) {
      console.error("Failed to parse users from localStorage", error);
      // Optionally set to a default value or handle the error more specifically
    }
  }, []);

  return (
    <UserContext.Provider value={{ users, setUsers }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
