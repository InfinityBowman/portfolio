import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

interface CarouselCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ image, title, description, link }) => {
  return (
    <div className="max-w-xs bg-secondary shadow-lg rounded-lg overflow-hidden relative block">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="flex justify-center group overflow-hidden relative">
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className="object-cover object-center h-44"
            style={{ transform: "scale(1.01)" }}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="flex justify-center items-center gap-1 text-lg font-normal">
              Visit
              <FaExternalLinkAlt className="inline ml-1" />
            </span>
          </div>
        </div>
      </a>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-primary">{description}</p>
      </div>
    </div>
  );
};

export default CarouselCard;
