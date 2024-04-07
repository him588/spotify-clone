import { useState, useRef, useContext, useEffect } from "react";
import { musicplayercontext } from "../context";
// Define your context here if not already defined
// const musicplayercontext = React.createContext();

const UseAudioPlayer = () => {
  const { musicplayer, setmusicplayer } = useContext(musicplayercontext);
  const [isPlaying, setisPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  //   console.log(musicplayer?.song.exists_at);

  //   useEffect(() => {
  //     if (audioRef.current) {
  //       audioRef.current.addEventListener("timeupdate", updateTime);
  //       audioRef.current.addEventListener("ended", handleAudioEnd);

  //       return () => {
  //         if (audioRef.current) {
  //           audioRef.current.removeEventListener("timeupdate", updateTime);
  //           audioRef.current.removeEventListener("ended", handleAudioEnd);
  //         }
  //       };
  //     }
  //   }, []);

  const updateTime = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (audioRef.current.paused || audioRef.current.ended) {
        audioRef.current.play(); // If paused or ended, play the audio
        setisPlaying(true);
      } else {
        audioRef.current.pause(); // If playing, pause the audio
        setisPlaying(false);
      }
    }
  };

  const updateProgress = () => {
    if (audioRef.current) {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      return progress;
    }
    return 0;
  };

  const handleSkip = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget;
      const boundingRect = progressBar.getBoundingClientRect();
      const offsetX = e.clientX - boundingRect.left;
      const progressBarWidth = boundingRect.width;
      const percentage = offsetX / progressBarWidth;
      const newTime = percentage * audioRef.current.duration;

      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);

      if (!isPlaying) {
        setisPlaying(true); // Start playing if not already playing
        audioRef.current.play();
      } else if (audioRef.current.ended) {
        audioRef.current.play(); // Replay if audio has ended
      }
    }
  };

  const handleAudioEnd = () => {
    setCurrentTime(0); // Reset current time to start
    setisPlaying(false); // Pause the audio
  };
  const playprevious = () => {
    if (musicplayer?.song.exists_at === 0) {
      return;
    } else {
      const index = musicplayer?.song.exists_at;
      const artist = {
        name: musicplayer?.containsIn.songs[index! - 1].track.artists[0].name,
        artistid: musicplayer?.containsIn.songs[index! - 1].track.artists[0].id,
      };
      const song = {
        name: musicplayer?.containsIn.songs[index! - 1].track.name,
        img: musicplayer?.containsIn.songs[index! - 1].track.album.images[0]
          .url,
        id: musicplayer?.containsIn.songs[index! - 1].track.id,
        url: musicplayer?.containsIn.songs[index! - 1].track.preview_url,
        exists_at: index! - 1,
      };
      const containsin = {
        type: "playlist",
        songs: musicplayer?.containsIn.songs,
      };
      setmusicplayer(() => {
        return { artist: artist, song: song, containsIn: containsin };
      });
    }
  };
  const playnext = () => {
    if (
      musicplayer?.song.exists_at ===
      musicplayer?.containsIn.songs.length - 1
    ) {
      return;
    } else {
      const index = musicplayer?.song.exists_at;
      const artist = {
        name: musicplayer?.containsIn.songs[index! + 1].track.artists[0].name,
        artistid: musicplayer?.containsIn.songs[index! + 1].track.artists[0].id,
      };
      const song = {
        name: musicplayer?.containsIn.songs[index! + 1].track.name,
        img: musicplayer?.containsIn.songs[index! + 1].track.album.images[0]
          .url,
        id: musicplayer?.containsIn.songs[index! + 1].track.id,
        url: musicplayer?.containsIn.songs[index! + 1].track.preview_url,
        exists_at: index! + 1,
      };
      const containsin = {
        type: "playlist",
        songs: musicplayer?.containsIn.songs,
      };
      setmusicplayer(() => {
        return { artist: artist, song: song, containsIn: containsin };
      });
    }
  };

  return {
    isPlaying,
    currentTime,
    audioRef,
    togglePlay,
    updateProgress,
    handleSkip,
    handleAudioEnd,
    updateTime,
    playprevious,
    playnext,
  };
};

export default UseAudioPlayer;
