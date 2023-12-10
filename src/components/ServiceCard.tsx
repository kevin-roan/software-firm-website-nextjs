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
  );
}

export default ServiceCard;
