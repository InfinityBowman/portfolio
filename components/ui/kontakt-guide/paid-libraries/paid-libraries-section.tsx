import Accordian from "../accordian";
import { PaidLibraryData } from "../data/paid-library-data";
import LibrarySection from "./library-section";

export default function PaidLibrarySections() {
  return (
    <div className="flex-col items-center space-y-4">
      <h2 className="text-2xl font-bold">Paid Libraries</h2>
      {PaidLibraryData.map((section, sectionIndex) => (
        <div key={sectionIndex} className="w-full">
          <LibrarySection
            sectionDesc={section.sectionDesc}
            sectionName={section.sectionName}
            section={section.section}
          />
        </div>
      ))}
    </div>
  );
}
