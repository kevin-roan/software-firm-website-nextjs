import Image from "next/image";
import React from "react";

interface ContactCardProps {
  title: string;
  desc: string;
  imgUrl: string;
}

function ContactCard({ title, desc, imgUrl }: ContactCardProps) {
  return (
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
  );
}

export default ContactCard;
