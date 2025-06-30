"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm an incoming 4th-year <span className="font-medium">BSIT student</span> with a strong curiosity for how design and technology shape user experiences. I believe that <span className="italic">discipline beats talent</span>, which is why I strive to improve by <span className="font-medium">1% every day</span>—through practice, observation, and reflection. I enjoy crafting <span className="font-medium">simple, meaningful, and user-friendly designs</span> that turn ideas into impactful solutions.
        I'm actively learning through <span className="font-medium">Udemy</span>, focusing on <span className="font-medium">UI/UX design</span>. One thing I love about design is how deeply I can focus—I tend to think deeply and creatively when immersed in the process. 
        My current stack includes <span className="font-medium">Figma, Webflow, Notion, and basic PHP</span>. I'm also familiar with <span className="font-medium">Laravel</span>. My goal is to become a <span className="font-medium">full-stack developer</span>, and I see this as the right time to lock in and eliminate distractions.
      </p>

      <p>
        <span className="italic">When I’m not designing or coding</span>, I enjoy watching movies, anime, K-dramas, and playing games. I’m also passionate about <span className="font-medium">learning new things</span>—like solving the Rubik’s Cube, playing basketball, and exploring history through creators like <span className="font-medium">Moobly</span>.
      </p>

    </motion.section>
  );
}
