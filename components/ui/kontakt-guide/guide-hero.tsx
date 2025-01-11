"use client";

import React, { useEffect, useState } from "react";
import KontaktFLTips from "./kontakt-fl-tips";
import FreeStuff from "./free-stuff";
import Accordian from "./accordian";
import LibraryRecommendations from "./library-recs";
import LibraryDevelopers from "./library-devs";

interface GuideHeroProps {
  companiesWithVotes: { companyName: string; votes: number }[];
  user: any;
}

const GuideHero: React.FC<GuideHeroProps> = ({ companiesWithVotes, user }) => {
  const [activeTab, setActiveTab] = useState("free");

  const renderContent = () => {
    switch (activeTab) {
      case "free":
        return <FreeStuff />;
      case "tips":
        return <KontaktFLTips />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full" data-aos="fade">
      <div className="flex justify-center text-5xl font-thin tracking-wide text-transparent bg-clip-text gradient-text m-4">
        Sampled Instrument Guide
      </div>
      <div className="flex flex-col">
        <Accordian title="What Libraries Should You Get?">
          <LibraryRecommendations />
        </Accordian>
        <Accordian title="Notes on Library Developers">
          <LibraryDevelopers companiesWithVotes={companiesWithVotes} user={user} />
        </Accordian>
      </div>
      <div className="flex justify-center space-x-4 mb-4 border-b border-b-foreground/10 relative">
        <button
          className={`px-4 py-2 font-normal relative ${
            activeTab === "free" ? "border-b-2 border-blue-500 -mb-[1px]" : ""
          }`}
          onClick={() => setActiveTab("free")}
        >
          Free Stuff
        </button>
        <button
          className={`px-4 py-2 font-normal relative ${
            activeTab === "tips" ? "border-b-2 border-blue-500 -mb-[1px]" : ""
          }`}
          onClick={() => setActiveTab("tips")}
        >
          Kontakt in FL Studio
        </button>
      </div>
      <div>{renderContent()}</div>
    </div>
  );
};

export default GuideHero;
