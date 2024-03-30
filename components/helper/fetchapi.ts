import { Playlist } from "@/types/type"
import React from "react"

export async function fetchapi(token:string,type:string,limit:number){
    try {
     const response= await fetch (`https://api.spotify.com/v1/search?q=${type}&type=playlist&limit=${limit}`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
     }
     )
     const data=await response.json()
     return data
        
    } catch (error) {
        console.log("error fetching data",error)
        
    }
}