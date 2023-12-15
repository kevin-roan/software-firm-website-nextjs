"use client";
import { motion } from "framer-motion";

import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface ServiceCardProps {
  title: string;
  desc: string;
  imageUrl: string;
}

function ServiceCard({ title, desc, imageUrl }: ServiceCardProps) {
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
      <div className="border-2 border-gray bg-zinc-50 lg:px-4 px-10 py-4">
        <Image
          src={imageUrl}
          height="60"
          width="60"
          alt="service image"
          className="my-4"
        />
        <div>
          <h1 className="font-bold text-xl">{title}</h1>
          <p className="font-light py-2">{desc}</p>
          <button className="text-[var(--button-primary)] flex gap-4 items-center my-4">
            Discover Now
            <FaArrowRight />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
