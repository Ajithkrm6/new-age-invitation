import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import MusicNoteIcon from "@mui/icons-material/MusicNote"; // Icon for playing music
import MusicOffIcon from "@mui/icons-material/MusicOff"; // Icon for pausing music

export const MusicButton = () => {
  const musicRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false); // State to track if the music is playing
  const [countdown, setCountdown] = useState(true);

  const musicFile = "/music/EePremaUtsavam.mp3";

  const handleClick = () => {
    if (!musicRef.current) {
      // Initialize audio only on first click
      musicRef.current = new Audio(musicFile);
      musicRef.current.loop = true;
      musicRef.current.volume = 1;

      musicRef.current.play().catch((error) => {
        console.error("Error playing the audio:", error);
      });
      setIsPlaying(true); // Update state to indicate audio is playing
    } else {
      // Toggle play/pause on subsequent clicks
      if (isPlaying) {
        musicRef.current.pause();
      } else {
        musicRef.current.play().catch((error) => {
          console.error("Error playing the audio:", error);
        });
      }
      setIsPlaying(!isPlaying); // Update the playing state
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCountdown(false);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <Button
        className="bg-textgreen hover:bg-textgreen"
        variant="outline"
        size="icon"
        onClick={handleClick}
      >
        {isPlaying ? (
          <MusicNoteIcon style={{ color: "#ffffff" }} />
        ) : (
          <MusicOffIcon style={{ color: "#ffffff" }} />
        )}
        {/* Show appropriate icon */}
      </Button>
    </div>
  );
};
