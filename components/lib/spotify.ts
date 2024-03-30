import { useSession } from "next-auth/react";

var SpotifyWebApi = require("spotify-web-api-node");

// credentials are optional
// const {data:session}=useSession()
var spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_SECRET,
  //   redirectUri: "http://www.example.com/callback",
});


export default spotifyApi;
