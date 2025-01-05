"use client";
import { FaExternalLinkAlt } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function LeagueDashboard() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      mirror: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-start border-1 border-white rounded-lg p-4">
      <div className="flex flex-col px-2 justify-center max-w-sm md:w-auto">
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
      <div
        className="flex w-full justify-center items-center md:max-w-xl max-w-xs h-60 md:h-96 border border-white rounded-lg overflow-hidden mx-auto"
        data-aos="fade-left"
      >
        <video
          src="/League-Dashboard-Demo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
