import { FaExternalLinkAlt } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";
import LeagueDashboard from "@/components/ui/projects/league-dashboard";
import AboutMe from "@/components/ui/projects/about-me";

export default function Page() {
  return (
    <div className="flex flex-col items-center">
      <AboutMe />
      <LeagueDashboard />
    </div>
  );
}
