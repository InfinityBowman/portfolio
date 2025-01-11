"use client";
import { FaExternalLinkAlt } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "motion/react";

const fadeInBottomWithDelay = (delay: number) => ({
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5 },
});

const fadeInRightWithDelay = (delay: number) => ({
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { delay, duration: 0.5 } },
});

const fadeInLeftWithDelay = (delay: number) => ({
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { delay, duration: 1 } },
});

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="shadow-lg dark:shadow-glow my-4 rounded-lg">
      <motion.h1
        className="text-center text-3xl p-4 pt-6 font-bold gradient-text animate-gradient bg-clip-text text-transparent"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
        variants={fadeInBottomWithDelay(0)}
        ref={ref}
      >
        Projects
      </motion.h1>
      <div className="flex flex-col md:flex-row items-start rounded-lg p-4">
        <div className="flex flex-col px-2 justify-center max-w-sm md:w-auto">
          <motion.h2
            className="text-xl font-semibold mb-2"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.5 }}
            variants={fadeInRightWithDelay(0.1)}
            ref={ref}
          >
            League Dashboard
          </motion.h2>
          <motion.p
            className="subtext"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeInRightWithDelay(0.2)}
          >
            Dashboard of visualizations built purely with D3.js utilizing Express and Axios to fetch live summoner data
            from the Riot API.
          </motion.p>
          <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={fadeInRightWithDelay(0.4)}>
            <Link
              className={`${buttonVariants({ variant: "outline" })} my-4 w-28 flex gap-2`}
              href="https://github.com/InfinityBowman/LeagueOfLegendsDashboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
              <FaExternalLinkAlt className="mb-1" />
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="flex w-full justify-center items-center md:max-w-xl max-w-xs h-60 md:h-96 border border-white rounded-lg overflow-hidden mx-auto"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInLeftWithDelay(0.3)}
        >
          <video
            src="/League-Dashboard-Demo.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}
