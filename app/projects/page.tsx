"use client";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Button, buttonVariants } from "@/components/ui/button";
import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row items-start gap-4 border-1 border-white rounded-lg p-4">
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2" data-aos="fade-right">
            League Dashboard
          </h2>
          <p className="subtext" data-aos="fade-right" data-aos-delay="200">
            Dashboard of visualizations built purely with D3.js that uses Express and Axios to fetch live summoner data
            from the Riot API.
          </p>
          <Link
            data-aos="fade-right"
            data-aos-delay="400"
            className={`${buttonVariants({ variant: "outline" })} my-4 w-28 flex gap-2`}
            href="https://github.com/InfinityBowman/LeagueOfLegendsDashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <FaExternalLinkAlt className="mb-1" />
          </Link>
        </div>
        <div className="flex-shrink-0 border border-white rounded-lg overflow-hidden" data-aos="fade-left">
          <video
            src="/League-Dashboard-Demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="max-w-xl h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      <div className="flex flex-row items-start gap-4 border-1 border-white rounded-lg p-4">
        <div className="flex-shrink-0 border border-white rounded-lg overflow-hidden">
          <video
            src="/League-Dashboard-Demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="max-w-lg h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2">League Dashboard</h2>
          <p className="subtext">
            Dashboard of visualizations built purely with D3.js that uses Express and Axios to fetch live summoner data
            from the Riot API.
          </p>
          <Link
            data-aos="fade-right"
            data-aos-delay="400"
            className={`${buttonVariants({ variant: "outline" })} my-4 w-28 flex gap-2`}
            href="https://github.com/InfinityBowman/LeagueOfLegendsDashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <FaExternalLinkAlt className="mb-1" />
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-start gap-4 border-1 border-white rounded-lg p-4">
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-semibold mb-2" data-aos="fade-right">
            League Dashboard
          </h2>
          <p className="subtext" data-aos="fade-right" data-aos-delay="200">
            Dashboard of visualizations built purely with D3.js that uses Express and Axios to fetch live summoner data
            from the Riot API.
          </p>
          <Link
            data-aos="fade-right"
            data-aos-delay="400"
            className={`${buttonVariants({ variant: "outline" })} my-4 w-28 flex gap-2`}
            href="https://github.com/InfinityBowman/LeagueOfLegendsDashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <FaExternalLinkAlt className="mb-1" />
          </Link>
        </div>
        <div className="flex-shrink-0 border border-white rounded-lg overflow-hidden" data-aos="fade-left">
          <video
            src="/League-Dashboard-Demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="max-w-xl h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
