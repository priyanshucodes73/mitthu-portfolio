"use client";
import { motion } from "framer-motion";
import Section from "@/components/Section";

export default function AboutPage() {
  return (
    <Section title="About Me" subtitle="A little snapshot of who I am.">
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <motion.img
          src="./cropped_circle_image.png"
          alt="Mitthu Kumar Bhagat avatar"
          className="w-40 h-40 rounded-full border border-white/10 shadow-soft md:mr-8 mb-4 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="flex flex-col gap-4 w-full">
          <div className="space-y-4 text-slate-200">
            <p>
              I'm Mitthu Kumar Bhagat, a full‑stack developer focused on
              creating interactive, accessible web experiences. Currently
              building the Mantriva network of sites. and a gaming tournament
              website - AnPriX
            </p>
            <p>
              Interested in AI automation, data engineering, and performance.
              Open to freelance and collaborations.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href="https://www.facebook.com/priyanshu7373"
              target="_blank"
              rel="noopener"
              className="px-4 py-2 rounded-full bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/mr.bhagat7373/?next=%2F"
              target="_blank"
              rel="noopener"
              className="px-4 py-2 rounded-full bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener"
              className="px-4 py-2 rounded-full bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition"
            >
              WhatsApp
            </a>
            <a
              href="https://github.com/priyanshucodes73"
              target="_blank"
              rel="noopener"
              className="px-4 py-2 rounded-full bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mitthu-kumar-bhagat73/"
              target="_blank"
              rel="noopener"
              className="px-4 py-2 rounded-full bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
