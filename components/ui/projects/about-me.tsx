"use client";
import { motion, useInView } from "motion/react";
import { FaEnvelope, FaLinkedin, FaGraduationCap } from "react-icons/fa";
import { useRef } from "react";

const listItemVariants = {
  hidden: (i: number) => ({
    opacity: 0,
    y: 10,
    transition: {
      delay: i * 0.2,
    },
  }),
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.14 + 1,
    },
  }),
};

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="mx-2 mb-4 flex flex-col gap-4">
      <motion.div
        className="p-6 text-center shadow-lg dark:shadow-glow rounded-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-3xl font-bold mb-4 gradient-text animate-gradient bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-muted-foreground max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          Hello! I'm Jacob Maynard, a senior at university majoring in Computer Science with a Certificate in Data
          Science. I love blending programming with design to solve complex problems in beautiful ways. My journey in
          tech has been driven by curiosity and a desire to innovate, and I'm excited to continue building amazing
          things!
        </motion.p>
      </motion.div>

      <div className="flex md:flex-row flex-col w-full justify-evenly gap-4 mt-4">
        <motion.div
          className="p-4 shadow-lg dark:shadow-glow border rounded-lg w-full flex flex-col gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
        >
          <motion.h2
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            Experience
          </motion.h2>
          <motion.div
            className=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
          >
            Hello there
          </motion.div>
        </motion.div>

        <div className="flex flex-col gap-4">
          <motion.div
            className="p-4 shadow-lg dark:shadow-glow w-full max-w-xs border rounded-lg flex flex-col gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
          >
            <motion.h2
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            >
              Contact
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground max-w-3xl" initial="hidden" animate="visible">
              {[
                {
                  href: "mailto:jacobamaynard@proton.me",
                  icon: <FaEnvelope className="mr-2 text-primary" />,
                  text: "jacobamaynard@proton.me",
                },
                {
                  href: "https://www.linkedin.com/in/jacob-maynard-283767230/",
                  icon: <FaLinkedin className="mr-2 text-primary" />,
                  text: "LinkedIn",
                },
              ].map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="text-blue-500 hover:text-blue-700 flex items-center"
                  custom={index}
                  variants={listItemVariants}
                >
                  {link.icon} {link.text}
                </motion.a>
              ))}
            </motion.p>
          </motion.div>

          <motion.div
            className="p-4 shadow-lg dark:shadow-glow w-full max-w-xs border rounded-lg flex flex-col gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          >
            <motion.h2
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            >
              Education
            </motion.h2>
            <motion.div className="text-lg text-muted-foreground max-w-3xl" initial="hidden" animate="visible">
              {[
                {
                  icon: <FaGraduationCap size={26} className="mr-2 text-primary" />,
                  text: "University of Utah",
                  subtext: "Bachelors in Computer Science (2021-2025)",
                },
              ].map((link, index) => (
                <motion.li
                  key={link.text}
                  className="text-primary flex items-center"
                  custom={index}
                  variants={listItemVariants}
                >
                  <div className="flex flex-row justify-start">
                    {link.icon}
                    <div className="flex flex-col">
                      <div>{link.text}</div>
                      <div className="text-sm text-muted-foreground">{link.subtext}</div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="p-4 shadow-lg dark:shadow-glow rounded-lg w-full border flex flex-col gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
          >
            <motion.h2
              className="text-3xl font-bold"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 1 }}
            >
              Skills
            </motion.h2>
            <motion.ul
              className="text-lg text-left text-muted-foreground max-w-3xl list-disc list-inside"
              initial="hidden"
              animate="visible"
            >
              {[
                "JavaScript / TypeScript",
                "React / Next.js",
                "Node.js",
                "D3.js",
                "Motion.js",
                "Tailwind",
                "Figma",
                "React Native",
                "Kotlin + Android",
                "MySQL",
                "PostgreSQL",
                ".NET",
                "C#",
                "Java",
                "Data Science",
                "Python",
              ].map((skill, index) => (
                <motion.li key={skill} custom={index} variants={listItemVariants}>
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
      <motion.div
        ref={ref}
        className="p-4 shadow-lg dark:shadow-glow border rounded-lg w-full flex flex-col gap-2"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      >
        <motion.h2
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        >
          More
        </motion.h2>
        <motion.ul
          className="text-lg text-left text-muted-foreground max-w-3xl list-disc list-inside"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            "TBD",
            "TBD",
            "TBD",
            "TBD",
            "TBD",
            "TBD",
            "TBD",
            "TBD",
            "TBD",
            "TBD",
            "TBD",
            "TBD",
            "TBD",
            "TBD",
            "TBD",
            "TBD",
          ].map((skill, index) => (
            <motion.li key={index} custom={index} variants={listItemVariants}>
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}
