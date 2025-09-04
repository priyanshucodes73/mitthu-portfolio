"use client";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  tags = [],
  href = "#",
}) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="card p-4 sm:p-6 block !bg-black rounded-xl hover:shadow-lg hover:shadow-black/20 transition w-full overflow-hidden"
      whileHover={{ y: -4 }}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-slate-300 mt-2">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((t, i) => (
          <span
            key={i}
            className="text-xs px-2 py-1 rounded-full bg-white/10 border border-white/10"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}
