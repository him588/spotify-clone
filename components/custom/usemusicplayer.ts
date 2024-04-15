import { useState, useRef, useContext, useEffect, useCallback } from "react";
import { musicplayercontext } from "../context";
const UseAudioPlayer = () => {
  const { musicplayer, setmusicplayer } = useContext(musicplayercontext);
  const [isPlaying, setisPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);
  const updateProgress = useCallback(() => {
    if (audioRef.current) {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      return progress;
    }
    return 0;
  }, [audioRef]);
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
    playnext();
  };
  const playprevious = () => {
    if (musicplayer?.song.exists_at === 0) {
      return;
    } else {
      const index = musicplayer?.song.exists_at;
      const artist = {
        name: musicplayer?.containsIn.songs[index! - 1].artists[0].name,
        artistid: musicplayer?.containsIn.songs[index! - 1].artists[0].id,
      };
      const song = {
        name: musicplayer?.containsIn.songs[index! - 1].name,
        img: musicplayer?.containsIn.songs[index! - 1].album.images[0].url,
        id: musicplayer?.containsIn.songs[index! - 1].id,
        url: musicplayer?.containsIn.songs[index! - 1].preview_url,
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
  const playnext = useCallback(() => {
    if (
      musicplayer?.song.exists_at ===
      musicplayer?.containsIn.songs.length - 1
    ) {
      return;
    } else {
      const index = musicplayer?.song.exists_at;
      const artist = {
        name: musicplayer?.containsIn.songs[index! + 1].artists[0].name,
        artistid: musicplayer?.containsIn.songs[index! + 1].artists[0].id,
      };
      const song = {
        name: musicplayer?.containsIn.songs[index! + 1].name,
        img: musicplayer?.containsIn.songs[index! + 1].album.images[0].url,
        id: musicplayer?.containsIn.songs[index! + 1].id,
        url: musicplayer?.containsIn.songs[index! + 1].preview_url,
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
  }, [musicplayer, setmusicplayer]);
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
