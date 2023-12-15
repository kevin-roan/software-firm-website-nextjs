"use client";
import { motion } from "framer-motion";

import Image from "next/image";
import React from "react";

interface ContactCardProps {
  title: string;
  desc: string;
  imgUrl: string;
}

function ContactCard({ title, desc, imgUrl }: ContactCardProps) {
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
      <div className="border-2 border-gray-300 hover:bg-[var(--button-primary)] hover:text-white transition-all duration-300 ">
        <Image
          src={imgUrl}
          alt={title}
          width="100"
          height="100"
          className="mx-4"
        />
        <div className="m-4">
          <h1 className="text-xl font-semibold">{title} </h1>
          <p>{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactCard;
