import React, { useState } from "react";
import LibDevContainer from "./lib-dev-container";
import { companyData } from "./company-data";
import { Button } from "@/components/ui/button";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "motion/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

interface CompanyWithVotes {
  companyName: string;
  votes: number;
}

interface LibraryDevsProps {
  companiesWithVotes: CompanyWithVotes[];
  user: any;
}

const LibraryDevelopers: React.FC<LibraryDevsProps> = ({ companiesWithVotes, user }) => {
  const [sortCriteria, setSortCriteria] = useState<"name" | "rating" | "votes">("rating");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  console.log("companieswithvotes:", companiesWithVotes);
  const combinedData = companyData.map((company) => {
    const voteData = companiesWithVotes.find((vote) => vote.companyName === company.name);
    return {
      ...company,
      votes: voteData ? voteData.votes : 0,
    };
  });
  console.log("combinedData:", combinedData);
  const sortedCompanies = [...combinedData].sort((a, b) => {
    if (sortCriteria === "name") {
      return sortOrder === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
    } else if (sortCriteria === "rating") {
      return sortOrder === "desc" ? a.rating - b.rating : b.rating - a.rating;
    } else {
      return sortOrder === "asc" ? a.votes - b.votes : b.votes - a.votes;
    }
  });
  console.log("sortedData:", sortedCompanies);

  const handleSortChange = (criteria: "name" | "rating" | "votes") => {
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
      <p>These ratings are purely opinion based on my experiences.</p>
      <div className="flex justify-end m-2 items-center gap-4">
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
            <DropdownMenuItem onClick={() => handleSortChange("rating")}>Rating</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSortChange("name")}>Name</DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleSortChange("votes")}>Votes</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      {sortedCompanies.map((company, index) => (
        <LibDevContainer
          key={index}
          name={company.name}
          description={company.description}
          rating={company.rating}
          votes={company.votes}
          user={user}
        />
      ))}
    </div>
  );
};

export default LibraryDevelopers;
