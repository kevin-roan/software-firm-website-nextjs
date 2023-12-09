"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

const nav_links = [
  "Software Consulting",
  "Services",
  "Reviews",
  "Contact Us",
  "Support",
];

const Header = () => {
  const [isMobile, setMobiile] = useState(true);
  return (
    <div className="max-h-[7vmax] border-[1px] border-b-[grey] px-[13vmax] flex items-center justify-between">
      <div className="image-contiainer">
        <Image
          src="https://imaginosolutions.com/wp-content/uploads/imagino-logo.svg"
          alt="logo"
          width={"140"}
          height={"100"}
        />
      </div>
      {isMobile ? (
        <div className="nav-links-container">
          <ul className="flex items-center justify-between space-x-10 ">
            {nav_links.map((item, index) => (
              <li
                key={index}
                className="hover:border-b-2 border-[var(--button-primary)] transition-all duration-100 ease-in-out text-xs"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Header;
