import React, { useState } from "react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "motion/react";
import { LoaderCircle } from "lucide-react";

interface CarouselCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

const CarouselCard: React.FC<CarouselCardProps> = ({ image, title, description, link }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="max-w-xs bg-secondary shadow-lg rounded-lg overflow-hidden relative block">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="flex justify-center group overflow-hidden relative">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              <LoaderCircle className="animate-spin" size={36} />
            </div>
          )}
          <Image
            src={image}
            alt={title}
            width={400}
            height={300}
            className={`object-cover object-center h-44 ${isLoading ? "opacity-0" : "opacity-100"}`}
            style={{ transform: "scale(1.01)" }}
            onLoadingComplete={() => setIsLoading(false)}
          />
          <motion.div
            className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <span className="flex justify-center items-center gap-1 text-lg font-normal">
              <FaExternalLinkAlt size={26} className="inline ml-1" />
            </span>
          </motion.div>
        </div>
      </a>
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-secondary-foreground">{description}</p>
      </div>
    </div>
  );
};

export default CarouselCard;
