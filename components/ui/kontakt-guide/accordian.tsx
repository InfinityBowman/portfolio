import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { FaChevronDown } from "react-icons/fa";

interface AccordianProps {
  title: string;
  children: React.ReactNode;
}

const Accordian: React.FC<AccordianProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-b-foreground/10">
      <motion.div className="flex w-full" whileTap={{ scale: 0.99 }} onClick={() => setIsOpen(!isOpen)}>
        <Button className="justify-between rounded-lg p-4 w-full h-auto bg-background hover:bg-black hover:bg-opacity-20 text-foreground max-h-f">
          {title}
          <motion.div animate={{ rotateX: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
            <FaChevronDown />
          </motion.div>
        </Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, height: 0, marginTop: 0, marginBottom: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
          marginTop: isOpen ? 2 : 0,
          marginBottom: isOpen ? 2 : 0,
        }}
        transition={{ duration: 0.3 }}
        className={`overflow-hidden`}
      >
        <div ref={contentRef} className="border border-primary bg-background rounded-lg py-2">
          <div className="px-4 py-2">{children}</div>
        </div>
      </motion.div>
    </div>
  );
};

export default Accordian;