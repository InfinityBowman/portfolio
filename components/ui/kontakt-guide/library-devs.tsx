import React, { useState } from "react";
import LibDevContainer from "./lib-dev-container";
import { libraries } from "./libraries";
import { Button } from "@/components/ui/button";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "motion/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const LibraryDevelopers: React.FC = () => {
  const [sortCriteria, setSortCriteria] = useState<"name" | "rating">("rating");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

  const sortedLibraries = [...libraries].sort((a, b) => {
    if (sortCriteria === "name") {
      return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else {
      return sortOrder === "desc" ? a.rating - b.rating : b.rating - a.rating;
    }
  });

  const handleSortChange = (criteria: "name" | "rating") => {
    if (sortCriteria === criteria) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortCriteria(criteria);
      setSortOrder("asc");
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-semibold">Notes on Library Developers:</h3>
      <p>These ratings are just my opinion based on my experiences.</p>
      <div className="flex justify-end m-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"secondary"}>
              <div className="flex items-center flex-row gap-2">
                Sort by {sortCriteria.charAt(0).toUpperCase() + sortCriteria.slice(1)}
                <motion.div
                  className="ml-2"
                  animate={{ rotate: sortOrder === "asc" ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown />
                </motion.div>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => handleSortChange("name")}>Name</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSortChange("rating")}>Rating</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {sortedLibraries.map((library, index) => (
        <LibDevContainer key={index} name={library.name} description={library.description} rating={library.rating} />
      ))}
    </div>
  );
};

export default LibraryDevelopers;
