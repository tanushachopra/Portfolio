"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

type Direction = "up" | "left" | "right" | "none";

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: Direction;
  className?: string;
}

export default function Reveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: Props) {
  const initial =
    direction === "left"
      ? { opacity: 0, x: -40, y: 0 }
      : direction === "right"
      ? { opacity: 0, x: 40, y: 0 }
      : direction === "none"
      ? { opacity: 0, x: 0, y: 0 }
      : { opacity: 0, x: 0, y: 30 };

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.72,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
