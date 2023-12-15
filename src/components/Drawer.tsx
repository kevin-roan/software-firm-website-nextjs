"use client";

import React from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineClose } from "react-icons/md";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Image from "next/image";

interface DrawerProps {
  nav_links: NavLink[];
}
interface NavLink {
  path: string;
  title: string;
}

const App = ({ nav_links }: DrawerProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleDrawer}>
        <RxHamburgerMenu />
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="bla bla bla"
      >
        <div className="flex items-center justify-between mx-4">
          <Image
            src="https://logowik.com/content/uploads/images/kenvue-health-company2292.logowik.com.webp"
            alt="logoiamge"
            width="100"
            height="100"
            className="mx-4"
          />
          <MdOutlineClose
            onClick={toggleDrawer}
            className="cursor-pointer hover:bg-zinc-50 rounded-lg text-2xl"
          />
        </div>
        <hr />
        <ul className="flex flex-col gap-4 my-4">
          {nav_links.map((item: NavLink, index: number) => (
            <li
              key={index}
              className="transition-all duration-100 ease-in-out text-xl rounded-lg px-4 text-center text-black hover:text-[var(--primary-color)]"
            >
              <Link href={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </Drawer>
    </>
  );
};

export default App;
