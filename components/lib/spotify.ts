var SpotifyWebApi = require("spotify-web-api-node");

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
  //   redirectUri: "http://www.example.com/callback",
});
const scopes = [
  "user-read-email",
  "playlist-read-privacy",
  "playlist-read-collaboration",
  "user-read-email",
  "streaming",
  "user-read-private",
  "user-library-read",
  "user-top-read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-follow-read ",
].join(",");
const params = {
  scope: scopes,
};
console.log(params);

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = `https://account.spotify.com/authorize${queryParamString.toString()}`;
export default spotifyApi;
export { LOGIN_URL };
