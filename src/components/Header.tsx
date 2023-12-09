"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const nav_links = [
  "Software Consulting",
  "Services",
  "Reviews",
  "Contact Us",
  "Support",
];

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="border-[1px] border-b-[grey] lg:px-[13vmax] px-[4vmax] flex items-center justify-between sticky top-0 z-999 bg-white">
      <div className="image-contiainer">
        <Image
          src="https://imaginosolutions.com/wp-content/uploads/imagino-logo.svg"
          alt="logo"
          width={"140"}
          height={"100"}
        />
      </div>
      <div className="nav-links-container lg:block hidden">
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
      <div className="lg:hidden">
        <RxHamburgerMenu onClick={() => setIsDrawerOpen(!isDrawerOpen)} />
      </div>
    </div>
  );
};

export default Header;
