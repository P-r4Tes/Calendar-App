"use client";
import { motion } from "framer-motion";

const Pointer = ({ top }: { top: number }) => {
  return (
    <motion.div
      className="absolute left-1 w-2 h-2 rounded-full bg-white"
      style={{ top: top }}
      layout
      transition={{ type: "spring", stiffness: 700, damping: 30 }}
    />
  );
};

export default Pointer;
