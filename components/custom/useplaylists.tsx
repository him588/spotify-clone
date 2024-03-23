import { useSession } from "next-auth/react";
import spotifyApi from "../lib/spotify";
import { useCallback } from "react";

function Useplaylist() {
    const { data: session,status } = useSession();
    spotifyApi.setAccessToken(session?.user);

    const playlistinfo = useCallback(() => {
        console.log(session);
        // Add your playlist information logic here
    }, [session]);

    return playlistinfo;
}

export default Useplaylist;