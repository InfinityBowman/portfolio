"use client";
import { motion } from "motion/react";
import Image from "next/image";
import AudioPlayer from "@/components/ui/hobbies/audio-player";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Track {
  name: string;
  artist: {
    name: string;
  };
  src: string;
  alt: string;
  id: number;
  artworkUrl: string;
}

const designs = [
  { id: 1, src: "/design-images/Relucent_Colors_Glow.png", alt: "Design 1" },
  {
    id: 2,
    src: "/design-images/NotionCalendarDark.png",
    alt: "Design 2",
  },
  { id: 3, src: "/design-images/NotionDark.png", alt: "Design 3" },
  { id: 4, src: "/design-images/ProtonDark.png", alt: "Design 4" },
];

const tracks = [
  {
    id: 1,
    src: "/audio/LiquidCaverns.mp3",
    alt: "Liquid Caverns",
  },
  { id: 2, src: "/audio/NeuroFunStyle.mp3", alt: "NeuroFun Style" },
  { id: 3, src: "/audio/Shattered.mp3", alt: "Shattered" },
  { id: 4, src: "/audio/youjust.mp3", alt: "You just" },
];

export default function Page() {
  const [topTrack, setTopTrack] = useState<Track | null>(null);

  useEffect(() => {
    const fetchTopTrack = async () => {
      try {
        const params = {
          method: "user.gettoptracks",
          user: "InfinityBowman",
          api_key: "e03f73854d4ce7c32d21bea38e51d407",
          format: "json",
          limit: "1",
        };
        const response = await axios.get(
          `https://ws.audioscrobbler.com/2.0/?method=user.gettoptracks&user=${params.user}&api_key=${params.api_key}&format=json&limit=${params.limit}`
        );
        const track = response.data.toptracks.track[0];

        const trackInfoParams = {
          method: "track.getInfo",
          api_key: process.env.NEXT_PUBLIC_LASTFM_API_KEY,
          artist: track.artist.name,
          track: track.name,
          format: "json",
        };

        const trackInfoResponse = await axios.get(
          `https://ws.audioscrobbler.com/2.0/?method=track.getInfo&api_key=${trackInfoParams.api_key}&artist=${trackInfoParams.artist}&track=${trackInfoParams.track}&format=json`
        );

        const trackInfo = trackInfoResponse.data.track;
        const artworkUrl = trackInfo.album.image.find(
          (img: { size: string; ["#text"]: string }) => img.size === "large"
        )["#text"];

        setTopTrack({ ...track, artworkUrl });
      } catch (error) {
        console.error("Error fetching top track:", error);
      }
    };

    // fetchTopTrack();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center gradient-text animate-gradient bg-clip-text text-transparent">
        Graphic Design
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {designs.map((design) => (
          <motion.div
            key={design.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: design.id * 0.2 }}
          >
            <motion.div
              className="relative overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                <Image
                  src={design.src}
                  alt={design.alt}
                  width={400}
                  height={300}
                  className="object-cover object-center h-60"
                  style={{ transform: "scale(1.01)" }}
                />{" "}
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mt-4 text-center gradient-text animate-gradient bg-clip-text text-transparent">
          Music
        </h2>
        {tracks.map((track) => (
          <motion.div
            key={track.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: track.id * 0.2 + 0.4 }}
          >
            <AudioPlayer url={track.src} title={track.alt} />
          </motion.div>
        ))}
        {/* <div className="flex text-2xl justify-center my-4">My top track on Last.fm is:</div> */}
        {topTrack && (
          <div className="text-center mb-4 flex justify-center">
            <div className="max-w-sm bg-primary-foreground p-4 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold">{topTrack.name}</h3>
              <p className="text-sm text-muted-foreground">{topTrack.artist.name}</p>
              <img src={topTrack.artworkUrl} alt={`${topTrack.name} artwork`} className="mx-auto mt-2" />
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
