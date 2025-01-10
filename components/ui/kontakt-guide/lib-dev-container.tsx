import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import VoteButtons from "@/components/ui/kontakt-guide/voting-buttons";

interface LibDevContainerProps {
  name: string;
  description: string;
  rating: number;
  votes: number;
  user: any;
}

const LibDevContainer: React.FC<LibDevContainerProps> = ({ name, description, rating, votes, user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const renderStars = (rating: number) => {
    const totalStars = 5;
    const filledStars = "★".repeat(rating);
    const emptyStars = "☆".repeat(totalStars - rating);
    return filledStars + emptyStars;
  };
  console.log(name, votes);

  return (
    <div className="my-3 border border-primary bg-secondary rounded-lg px-4 py-2 max-w-md">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold">{name}</h4>
        <div className="flex items-center">
          <div className="text-yellow-500 mr-4">{renderStars(rating)}</div>
          <VoteButtons initialVotes={votes} user={user} />
          <motion.div whileHover={{ scale: 1.1 }} onClick={() => setIsOpen(!isOpen)}>
            <Button
              size={"sm"}
              className="rounded-lg p-2 h-7 bg-secondary hover:bg-black hover:bg-opacity-40 text-foreground"
            >
              <motion.div
                className="focus:outline-none"
                whileTap={{ scale: 0.9 }}
                animate={{ rotateX: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown size={16} />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="mt-2">{description}</p>
      </motion.div>
    </div>
  );
};

export default LibDevContainer;
