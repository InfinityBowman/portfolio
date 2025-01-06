"use client";

import React, { useEffect, useState } from "react";
import KontaktFLTips from "./kontakt-fl-tips";
import FreeStuff from "./free-stuff";
import AOS from "aos";
import "aos/dist/aos.css";

const GuideHero: React.FC = () => {
  const [activeTab, setActiveTab] = useState("free");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();
  }, []);

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
