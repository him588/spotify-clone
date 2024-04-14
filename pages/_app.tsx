import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import "@/styles/globals.css";
import { Musicplayercontextprovider } from "@/components/context";
import { UserContext, UserContextProvider } from "@/components/context/userscontext";
import { useContext } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const { session, ...restPageProps } = pageProps;
  return (
    <SessionProvider session={session}>
      <UserContextProvider>
          <Musicplayercontextprovider>
            <Component {...restPageProps} />
          </Musicplayercontextprovider>
      </UserContextProvider>
    </SessionProvider>
  );
}
