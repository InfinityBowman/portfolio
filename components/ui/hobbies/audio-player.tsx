import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player/youtube";
import { FaPlay, FaPause } from "react-icons/fa";
import WaveSurfer from "wavesurfer.js";

const AudioPlayer = ({ url }: { url: string }) => {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);

  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#dddddd90",
        progressColor: "#4f4a85",
        cursorColor: "#fff",
        cursorWidth: 2,
        barWidth: 3,
        barRadius: 2,
        height: 80,
        width: 600,
        normalize: false,
      });

      wavesurfer.current.load(url);

      wavesurfer.current.on("ready", () => {
        setDuration(wavesurfer.current?.getDuration() || 0);
      });

      wavesurfer.current.on("audioprocess", () => {
        setCurrentTime(wavesurfer.current?.getCurrentTime() || 0);
      });
    }

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current.destroy();
      }
    };
  }, [url]);

  const handlePlayPause = () => {
    setPlaying(!playing);
    if (wavesurfer.current) {
      wavesurfer.current.playPause();
    }
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="p-4 shadow-lg rounded-lg text-center flex flex-col items-center relative">
      <div ref={waveformRef} className="absolute inset-0 opacity-100"></div>
      <ReactPlayer
        url={url}
        playing={playing}
        controls={false}
        width="0"
        height="0"
        config={{
          playerVars: { showinfo: 0, controls: 0 },
        }}
      />
      <button
        onClick={handlePlayPause}
        className="mt-4 p-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition flex items-center justify-center z-10"
      >
        {playing ? <FaPause size={20} /> : <FaPlay size={20} />}
      </button>
      <div className="absolute bottom-2 left-2 text-white text-sm">{formatTime(currentTime)}</div>
      <div className="absolute bottom-2 right-2 text-white text-sm">{formatTime(duration)}</div>
    </div>
  );
};

export default AudioPlayer;
