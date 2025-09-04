import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaJava,
  FaPython,
  FaGithub,
} from "react-icons/fa";
import {
  SiExpress,
  SiTailwindcss,
  SiHtml5,
  SiJavascript,
  SiC,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const skills = [
  { label: "ReactJS", icon: FaReact },
  { label: "ExpressJS", icon: SiExpress },
  { label: "NodeJS", icon: FaNodeJs },
  { label: "TailwindCSS", icon: SiTailwindcss },
  { label: "Bootstrap", icon: FaBootstrap },
  { label: "HTML", icon: SiHtml5 },
  { label: "JavaScript", icon: SiJavascript },
  { label: "Java", icon: FaJava },
  { label: "Python", icon: FaPython },
  { label: "C", icon: SiC },
  { label: "MongoDB", icon: SiMongodb },
  { label: "MySQL", icon: SiMysql },
  { label: "GitHub", icon: FaGithub },
];

const SkillsSection = () => (
  <section className="py-12">
    <h2 className="text-3xl font-bold text-center text-white mb-8">
      Skills & Abilities
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center">
      {skills.map(({ label, icon: Icon }) => (
        <div
          key={label}
          className="w-24 h-24 flex flex-col items-center justify-center rounded-full bg-black/90 hover:scale-105 transition-transform"
        >
          <Icon className="text-cyan-400 hover:text-cyan-300 text-4xl mb-2 transition-colors" />
          <span className="text-white text-sm font-medium text-center">
            {label}
          </span>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
