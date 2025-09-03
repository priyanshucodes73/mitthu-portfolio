"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AnimatedButton({ href="#", children, variant="primary" }) {
  return (
    <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
      <Link href={href} className={variant === "primary" ? "btn-primary" : "btn-ghost"}>
        <motion.span
          initial={{ textShadow: "0 0 0 rgba(255,255,255,0)" }}
          whileHover={{ textShadow: "0 0 16px rgba(255,255,255,0.5)" }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.span>
      </Link>
    </motion.div>
  );
}
