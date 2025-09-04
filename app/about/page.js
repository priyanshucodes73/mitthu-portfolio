"use client";
import { motion } from "framer-motion";
import Section from "@/components/Section";

import SocialIcons from "@/components/SocialIcons";

import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";

export default function AboutPage() {
  return (
    <Section title="About Me" subtitle="A little snapshot of who I am.">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start w-full">
        <motion.img
          src="./cropped_circle_image.png"
          alt="Mitthu Kumar Bhagat avatar"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-white/10 shadow-soft md:mr-8 mb-4 md:mb-0 object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="flex flex-col gap-4 w-full">
          <div className="space-y-4 text-slate-200">
            <p>
              B.Tech Computer Science student and aspiring Software Engineer
              specializing in full-stack development, cloud computing, and
              software engineering. Experienced in building scalable web
              applications, REST APIs, and DevOps workflows (AWS, Docker,
              CI/CD). Strong background in Agile methodologies, version control
              (Git/GitHub), and software testing. Co-founder of two startups and
              contributor to official college R&D website with proven leadership
              in project delivery
            </p>
            <p>
              Interested in AI automation, data engineering, and performance.
              Open to freelance and collaborations.
            </p>
          </div>
          {/* Social media icons row */}
          <div className="mt-2">
            {/* Import SocialIcons component */}
            <SocialIcons />
          </div>
        </div>
      </div>
      {/* Show skills section below social icons */}
      <div className="w-full mt-8 sm:mt-10">
        <SkillsSection />
      </div>
      {/* Show education section below skills */}
      <div className="w-full mt-8 sm:mt-10">
        <EducationSection />
      </div>
    </Section>
  );
}
