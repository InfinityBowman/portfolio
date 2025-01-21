import { type LibrarySection } from '../data/paid-library-data';
import Accordian from '../accordian';

export default function LibrarySection({ sectionDesc, sectionName, section }: LibrarySection) {
  return (
    <div className="flex-col items-center space-y-4">
      <Accordian title={sectionName}>
        <div className="pb-4 text-md">{sectionDesc}</div>

        {section.map((library, libraryIndex) => (
          <Accordian title={library.name}>
            <div
              key={libraryIndex}
              className="p-4 border rounded-lg shadow-md mb-4"
            >
              <p className="text-sm text-primary/60">{library.description}</p>
              <p className="text-sm text-primary/70">By: {library.developer}</p>
            </div>
          </Accordian>
        ))}
      </Accordian>
    </div>
  );
}
