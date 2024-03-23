import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const { session, ...restPageProps } = pageProps;
  return (
    <SessionProvider session={session}>
      <Component {...restPageProps} />
    </SessionProvider>
  );
}
