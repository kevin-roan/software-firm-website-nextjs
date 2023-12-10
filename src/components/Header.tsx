import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Drawer } from ".";

const nav_links = [
  {
    path: "/",
    title: "Software Consulting",
  },
  {
    path: "/services",
    title: "Services",
  },
  {
    path: "/reviews",
    title: "Reviews",
  },
  {
    path: "/contact",
    title: "Contact Us",
  },
  {
    path: "/support",
    title: "Support",
  },
];

const Header = () => {
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
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="lg:hidden">
        <Drawer nav_links={nav_links} />
      </div>
    </div>
  );
};

export default Header;
