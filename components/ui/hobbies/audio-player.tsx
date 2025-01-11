import React, { useState, useEffect, useRef } from "react";
import ReactPlayer from "react-player/youtube";
import { Play, Pause } from "lucide-react";
import WaveSurfer from "wavesurfer.js";

const AudioPlayer = ({ url, title }: { url: string; title: string }) => {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);

  useEffect(() => {
    if (!wavesurfer.current && waveformRef.current) {
      wavesurfer.current = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: "#dddddd",
        progressColor: "#4f4a85",
        cursorColor: "#fff",
        cursorWidth: 2,
        barWidth: 3,
        barRadius: 2,
        height: 70,
        normalize: false,
      });

      wavesurfer.current.on("ready", () => {
        setDuration(wavesurfer.current?.getDuration() || 0);
      });

      wavesurfer.current.on("audioprocess", () => {
        setCurrentTime(wavesurfer.current?.getCurrentTime() || 0);
      });
    }

    if (wavesurfer.current) {
      wavesurfer.current.load(url);
    }

    return () => {
      if (wavesurfer.current) {
        wavesurfer.current;
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
    <div className="p-4 text-center flex flex-col gap-2">
      <div className="z-10 flex items-center justify-start">
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
          className="p-3 bg-opacity-0 text-primary border rounded-full hover:bg-background-hover duration-0 flex"
        >
          {playing ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <div className="ml-4 text-primary">{title}</div>
      </div>
      <div ref={waveformRef} className=""></div>
      <div className="flex justify-between mt-2">
        <div className="text-primary text-sm">{formatTime(currentTime)}</div>
        <div className="text-primary text-sm">{formatTime(duration)}</div>
      </div>
    </div>
  );
};

export default AudioPlayer;
