import SpotifyProvider from "next-auth/providers/spotify";
import nextAuth, { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import spotifyApi from "@/components/lib/spotify";


const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-read-currently-playing",
  "user-modify-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "streaming",
  "user-follow-read"
].join(",");

const params = {
  scope: scopes
};

const LOGIN_URL = "https://accounts.spotify.com/authorize?" + new URLSearchParams(params).toString();

async function refreshAccessToken(token: JWT) {

  // try {
  //   spotifyApi.setAccessToken(token.accessToken);
  //   spotifyApi.setRefreshToken(token.refreshToken);
  //   const {body:refreshToken}=await spotifyApi.refreshAccessToken();
  //   // console.log({refreshToken})
  //   return {
  //     ...token,accessToken: refreshToken.access_token,refreshToken: refreshToken.refresh_token ?? token.refreshToken,accessTokenExpires: Date.now() + refreshToken.expires_in * 1000
  //   }
    
  // } catch (error) {
  //   console.log(error)
  //   return {...token,error:"refreshtoken error"}
    
  // }
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
      clientId:process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_SECRET!,
      authorization:LOGIN_URL,
    }),
  ],
  secret: process.env.JWT_SECRET!,
  pages: {
    signIn: "/",
  },
  callbacks: {
    async jwt({ token, account,user }) {
      // Persist the OAuth access_token to the token right after signin
      if (account&&user) {
        
        return {...token,accessToken:account.access_token,refreshToken:account.refresh_token,username:account.providerAccountId,accessTokenExpire:account.expires_at ? account.expires_at * 1000 : 0};
      }

      // access token has not expired
      if (token.accessTokenExpires && Date.now() < +token.accessTokenExpires) {
        // console.log(token.accessToken)
        return token;
      }

      // access token has expired
      return await refreshAccessToken(token);
    },
    async session({ session, token }) {
      // console.log({token})
      
      const new_session = { ...session, accessToken: token.accessToken,refreshToken:token.refreshToken,username:token.username };
      // console.log(new_session)
      return new_session;
    },
  },
};

export default nextAuth(authOptions);
