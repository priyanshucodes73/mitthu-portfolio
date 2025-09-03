import { motion } from "framer-motion";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="max-w-5xl mx-auto px-6 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold"
      >
        {title}
      </motion.h2>
      {subtitle && <p className="text-slate-300 mt-2">{subtitle}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}
