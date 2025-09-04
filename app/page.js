"use client";
import React from "react";
import { motion } from "framer-motion";
import AnimatedButton from "@/components/AnimatedButton";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import GetInTouch from "@/components/GetInTouch";

export default function Home() {
  // Animated role text: only role changes, prefix stays constant
  const roles = [
    { text: "Software Developer", color: "text-blue-400" },
    { text: "Backend Developer", color: "text-green-400" },
    { text: "Frontend Developer", color: "text-purple-400" },
  ];
  const [currentRole, setCurrentRole] = React.useState(0);
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const fadeTimeout = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setVisible(true);
      }, 400); // fade out duration
    }, 2000);
    return () => clearTimeout(fadeTimeout);
  }, [currentRole]);
  return (
    <>
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-40">
          <motion.div
            className="absolute h-72 w-72 rounded-full bg-brand-500 blur-3xl"
            animate={{ x: [0, 200, -150, 0], y: [0, -80, 100, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute right-10 top-20 h-64 w-64 rounded-full bg-fuchsia-500 blur-3xl"
            animate={{ x: [0, -150, 100, 0], y: [0, 100, -80, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <div className="max-w-5xl mx-auto px-6 pt-24 pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight"
          >
            Hey, I'm <span className="text-brand-300">Mitthu Kumar Bhagat</span>{" "}
            👋
          </motion.h1>
          {/* Animated role text below name, left aligned */}
          <div className="h-10 mt-2 flex items-center">
            <span className="text-2xl font-bold transition-colors duration-400">
              I'm a{" "}
              <span
                className={`transition-opacity duration-400 ${
                  roles[currentRole].color
                } ${visible ? "opacity-100" : "opacity-0"}`}
              >
                {roles[currentRole].text}
              </span>
            </span>
          </div>
          {/* ...existing code... */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mt-4 text-lg md:text-xl text-slate-200/90 max-w-2xl"
          >
            I'm Mitthu Kumar Bhagat, a full‑stack developer focused on creating
            interactive, accessible web experiences. Currently building the
            Mantriva network of sites and a gaming tournament website - AnPriX
          </motion.p>

          <div className="mt-8 flex gap-4">
            <AnimatedButton href="#projects">View Projects</AnimatedButton>
            <AnimatedButton href="/about" variant="ghost">
              About Me
            </AnimatedButton>
          </div>
        </div>
      </header>

      <Section
        id="projects"
        title="Featured Projects"
        subtitle="Some things I've been working on lately."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="Arrow Titans — Team Site"
            description="A sleek sports site with live stats and a custom logo animation."
            tags={["Next.js", "Tailwind", "Framer Motion"]}
            href="https://example.com"
          />
          <ProjectCard
            title="thebigstory Blog Engine"
            description="Markdown + MDX blog platform with blazing fast static generation."
            tags={["Next.js", "MDX", "Vercel"]}
            href="https://example.com"
          />
          <ProjectCard
            title="mySamvaad"
            description="a digital discussion/communication system (almost like a forum or debate space) but with more structure and control."
            tags={["Next.js", "TailwindCSS", "Node.js", "MongoDB"]}
            href="https://example.com"
          />
          <ProjectCard
            title="Mantriva E-Commerce Website"
            description="A modern full-stack e-commerce platform under the Mantriva brand, featuring product catalog, shopping cart, secure checkout, and scalable backend."
            tags={["Next.js", "TailwindCSS", "Node.js", "MongoDB", "Stripe"]}
            href="https://github.com/yourusername/mantriva-ecommerce"
          />
        </div>
      </Section>

      {/* Get In Touch section below Writing */}
      <GetInTouch />

      <Section
        title="Writing"
        subtitle="Thoughts on web dev, performance, and delightful UI."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Animating Gradients",
            "Dark Mode Done Right",
            "Ship Fast with Vercel",
          ].map((title, i) => (
            <article key={i} className="card p-6">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="text-slate-300 mt-2">
                A quick dive into techniques and patterns I love using.
              </p>
              <a
                href="/blog"
                className="mt-4 inline-block text-brand-200 hover:underline"
              >
                Read more →
              </a>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
