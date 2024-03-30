// import { useSession } from "next-auth/react";
// import spotifyApi from "../lib/spotify"
// import { useState } from "react";


// export default function Usegetdata(){
//   const {data:session,status}=useSession()
//   // const [accesstoken,setaccesstoken]=useState<string>()


// async function authenticationwithspotify() {
//  try {
//   const data =await spotifyApi.clientCredentialsGrant();
//   const accessToken = data.body['access_token']
//   console.log({accessToken})
//   spotifyApi.setAccessToken(accessToken);
//     console.log('Authentication successful');
  
//  } catch (error) {
//   console.log("authentication error:",error)
//   }  
// }
// return async function getplaylist(){
//   await authenticationwithspotify()
//   try {
//     const data=await spotifyApi.searchPlaylists("workout")
//     return data.body
//   } catch (error) {
//  console.log("error fething playlist:",error) 
//  return null  
//   }

// }


// }