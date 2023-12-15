"use client";
import { motion } from "framer-motion";

import React from "react";
import Image from "next/image";

function ReviewCard() {
  return (
    <div className="lg:w-[40%] bg-zinc-50 border-2 text-black p-4 m-4">
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
        <p>
          Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
          cillum sint consectetur cupidatat.
        </p>
        <div className="flex items-center gap-5 lg:m-4">
          <Image
            src="https://imaginosolutions.com/wp-content/uploads/David-Paredes-70x70@2x.jpg"
            height="40"
            width="40"
            className="rounded-[100px]"
            alt="user image"
          />
          <div className="">
            <h3 className="text-black font-semibold">Joseph Daniel</h3>
            <p className="text-gray-900 text-[10px]">- Content Creator</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ReviewCard;
