import { FaExclamationTriangle } from "react-icons/fa";
import Carousel from "@/components/ui/kontakt-guide/carousel";

const FreeStuff: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="w-screen">
        <Carousel />
      </div>
      <div className="flex text-sm max-w-2xl items-center m-2 p-4 bg-red-800 bg-opacity-25 border border-red-800 rounded-lg text-primary">
        <FaExclamationTriangle className="mr-4 text-5xl" />
        <span>
          <span className="font-semibold">IMPORTANT:</span> All libraries here are 100% free. However, not all 'free'
          libraries you find elsewhere are made for and run in Kontakt Player. Some may require Kontakt Full to work.
        </span>
      </div>
    </div>
  );
};

export default FreeStuff;
