import { SessionProvider } from "next-auth/react";
import { AppProps } from "next/app";
import "@/styles/globals.css";
import { Musicplayercontextprovider } from "@/components/context";

export default function App({ Component, pageProps }: AppProps) {
  const { session, ...restPageProps } = pageProps;
  return (
    <SessionProvider session={session}>
      <Musicplayercontextprovider>
        <Component {...restPageProps} />
      </Musicplayercontextprovider>
    </SessionProvider>
  );
}
