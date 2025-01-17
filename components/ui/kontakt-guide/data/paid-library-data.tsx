interface Library {
  name: string;
  description: string;
  developer: string;
}
export interface LibrarySection {
  sectionName: string;
  section: Library[];
  sectionDesc?: string;
}

const AllInOne: Library[] = [
  {
    name: "Albion One",
    description: "hello",
    developer: "Spitfire Audio",
  },
  {
    name: "Nucleus",
    description: "hello",
    developer: "Audio Imperia",
  },
];

const Strings: Library[] = [
  {
    name: "Cinematic Studio Strings",
    description: "hello",
    developer: "Spitfire Audio",
  },
];

const Brass: Library[] = [
  {
    name: "Cinematic Studio Brass",
    description: "hello",
    developer: "Spitfire Audio",
  },
];

const Winds: Library[] = [
  {
    name: "Cinematic Studio Winds",
    description: "hello",
    developer: "Spitfire Audio",
  },
];

const Choir: Library[] = [
  {
    name: "Chorus",
    description: "hello",
    developer: "Spitfire Audio",
  },
];

const Piano: Library[] = [
  {
    name: "Cinematic Studio Strings",
    description: "hello",
    developer: "Spitfire Audio",
  },
];

const TonalPercussion: Library[] = [
  {
    name: "Cinematic Studio Strings",
    description: "hello",
    developer: "Spitfire Audio",
  },
];

const Percussion: Library[] = [
  {
    name: "Cinematic Studio Strings",
    description: "hello",
    developer: "Spitfire Audio",
  },
];

const Guitar: Library[] = [
  {
    name: "Cinematic Studio Strings",
    description: "hello",
    developer: "Spitfire Audio",
  },
];

const Creative: Library[] = [
  {
    name: "Cinematic Studio Strings",
    description: "hello",
    developer: "Spitfire Audio",
  },
];

export const PaidLibraryData: LibrarySection[] = [
  {
    section: AllInOne,
    sectionName: "All-In-One",
    sectionDesc:
      "These All-In-One libraries are great for starting out because they contain most or all of the elements you would need to write a full orchestral piece. If you aren't looking to go crazy or just want something that will work for anything, then these are the libraries for you.",
  },
  {
    section: Strings,
    sectionName: "Strings",
  },
  {
    section: Brass,
    sectionName: "Brass",
  },
  {
    section: Winds,
    sectionName: "Winds",
  },
  {
    section: Choir,
    sectionName: "Choir",
  },
  {
    section: Piano,
    sectionName: "Piano",
  },
  {
    section: TonalPercussion,
    sectionName: "Tonal Percussion",
  },
  {
    section: Percussion,
    sectionName: "Percussion",
  },
  {
    section: Guitar,
    sectionName: "Guitar",
  },
  {
    section: Creative,
    sectionName: "Creative",
  },
];
