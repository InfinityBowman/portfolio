"use client";
import { ParticlesBackground } from "./particles";
import { Phrases } from "./phrases";

export const Hero = () => {
  return (
    <div className="relative flex flex-col gap-8 items-center text-center py-20">
      <ParticlesBackground />
      <h1 className="sr-only">Jacob Maynard Portfolio Website</h1>
      <h2 className="text-5xl lg:text-6xl font-bold gradient-text animate-gradient opacity-90 bg-clip-text text-transparent">
        Jacob Maynard
      </h2>
      {/* designer/musician/developer/artist */}
      <p className="text-2xl lg:text-3xl opacity-80">Creative Development & Design</p>
      <Phrases />
    </div>
  );
};
