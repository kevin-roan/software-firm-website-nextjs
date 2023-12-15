"use client";
import { motion } from "framer-motion";

interface CardProps {
  title: string;
  desc: string;
}

const Card = ({ title, desc }: CardProps) => {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <div className="bg-[#EEEEEE] h-[auto] p-10 m-1">
        <h1 className="font-bold text-lg">{title}</h1>
        <p className="py-4 text-sm">{desc}</p>
      </div>
    </motion.div>
  );
};

export default Card;
