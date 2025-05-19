"use client";

import { Volume2Icon, VolumeXIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    const handleUserInteraction = () => {
      if (audio && audio.paused) {
        audio.play().catch((err) => {
          console.warn("Autoplay blocked:", err);
        });
        setIsPlaying(true);
      }

      window.removeEventListener("click", handleUserInteraction);
    };

    window.addEventListener("click", handleUserInteraction);

    return () => {
      window.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        src="/song.mp3"
        autoPlay
        loop
        preload="auto"
        style={{ display: "none" }}
      />
      <button
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 bg-white bg-opacity-90 hover:bg-opacity-100 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 border border-pink-100"
        aria-label={isPlaying ? "Mute music" : "Play music"}
      >
        {isPlaying ? (
          <Volume2Icon className="w-6 h-6 text-pink-500" />
        ) : (
          <VolumeXIcon className="w-6 h-6 text-pink-400" />
        )}
      </button>
    </>
  );
}
