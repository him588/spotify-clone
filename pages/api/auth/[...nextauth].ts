import SpotifyProvider from "next-auth/providers/spotify";
import nextAuth, { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import spotifyApi, { LOGIN_URL } from "@/components/lib/spotify";



async function refreshAccessToken(token: JWT) {
  if (!token.refreshToken) {
    throw new Error("Refresh token not available");
  }

  const params = new URLSearchParams();
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", token.refreshToken as string);

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        Buffer.from(
          process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_SECRET
        ).toString("base64"),
    },
    body: params,
  });

  const data = await response.json();

  return {
    ...token,
    accessToken: data.access_token,
    refreshToken: data.refresh_token ?? token.refreshToken,
    accessTokenExpires: Date.now() + data.expires_in * 1000,
  };
}

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId:process.env.NEXT_PUBLIC_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET!,
      authorization:LOGIN_URL,
    }),
  ],
  secret: process.env.JWT_SECRET!,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, account,user }) {
      // Persist the OAuth access_token to the token right after signin
      if (account&&user) {
        
        return {...token,accessToken:account.access_token,refreshToken:account.refresh_token,username:account.providerAccountId,accessTokenExpire:account.expires_at ? account.expires_at * 1000 : 0};
      }

      // access token has not expired
      if (token.accessTokenExpires && Date.now() < +token.accessTokenExpires) {
        return token;
      }

      // access token has expired
      return await refreshAccessToken(token);
    },
    async session({ session, token }) {
      
      const new_session = { ...session, accessToken: token.accessToken,refreshToken:token.refreshToken,username:token.username };
      return new_session;
    },
  },
};

export default nextAuth(authOptions);
