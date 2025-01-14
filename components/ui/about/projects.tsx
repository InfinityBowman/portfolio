"use client";
import { FaExternalLinkAlt } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { useTheme } from "next-themes";

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
  const { theme } = useTheme();

  const projects = [
    {
      title: "League Dashboard",
      description:
        "Dashboard of visualizations built purely with D3.js utilizing a Node.js server with Express and Axios to fetch live summoner data from the Riot API.",
      videoUrl: "/leagueDashboard.mp4",
      refUrl: "https://github.com/InfinityBowman/LeagueOfLegendsDashboard",
      source: "Github",
    },
    {
      title: "This Website!",
      description:
        "Porfolio website made with Next.js, TailwindCSS, and TypeScript. Utilizes Supabase for authentication and data storage and Axios and Puppeteer for data collection. Motion is used for all of the amazing animations and ShadCN for many of the components.",
      videoUrl: "/portfolioDemo.mp4",
      refUrl: "ttps://github.com/InfinityBowman/portfolio",
      source: "Github",
    },
    {
      title: "MoonBlight",
      description:
        "Video game made in Unity with C#. A 2D bullet hell conceptualized, designed, and created within 48 Hours for the University of Utah's March 2022 Game Jam. Worked wit a large team of programmers, desginers, and artists to create a neat little game.",
      videoUrl: "/moonBlight.mp4",
      refUrl: "https://monkeybarrelgames.itch.io/moonblight",
      source: "Itch.io",
    },
  ];

  return (
    <div className="w-full">
      <motion.div
        className={`my-4 p-2 rounded-lg ${theme !== "light" ? "shadow-glow" : ""} shadow-neumorphic`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.5 }}
        variants={fadeInBottomWithDelay(0)}
        ref={ref}
      >
        <motion.h1
          className="text-center text-3xl p-4 font-bold gradient-text animate-gradient bg-clip-text text-transparent"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.5 }}
          variants={fadeInBottomWithDelay(0)}
          ref={ref}
        >
          Projects
        </motion.h1>
        <div className="flex flex-col rounded-lg p-4 gap-8">
          {projects.map((project, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true });

            return (
              <motion.div
                key={index}
                className="flex md:flex-row flex-col md:justify-between gap-2"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.5 }}
                ref={ref}
              >
                <div className="flex flex-col">
                  <motion.h2
                    className="text-xl font-semibold mb-2"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.5 }}
                    variants={fadeInRightWithDelay(0.3)}
                  >
                    {project.title}
                  </motion.h2>
                  <motion.p
                    className="subtext max-w-lg"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInRightWithDelay(0.4)}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={fadeInRightWithDelay(0.4)}
                  >
                    <Link
                      className={`${buttonVariants({ variant: "outline" })} my-4 w-28 flex gap-2`}
                      href={project.refUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.source}
                      <FaExternalLinkAlt className="mb-1" />
                    </Link>
                  </motion.div>
                </div>

                <motion.video
                  className="flex md:max-w-lg max-w-xs h-60 md:h-96 border border-white rounded-lg overflow-hidden object-cover w-full"
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  variants={fadeInLeftWithDelay(0.4)}
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={project.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </motion.video>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}
