"use client";

import React, { useState } from "react";
import KontaktFLTips from "./kontakt-fl-tips";

const GuideTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState("tips");

  const renderContent = () => {
    switch (activeTab) {
      case "free":
        return (
          <div className="flex justify-center border rounded-lg p-4">
            <div>
              Here is some free stuff... this is a long sentence for testing to see length, it is still not long enough
              so we will keep going
            </div>
            ;
          </div>
        );
      case "tips":
        return <KontaktFLTips />;
      default:
        return null;
    }
  };

  return (
    <div>
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

export default GuideTabs;
