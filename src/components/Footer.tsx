import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return (
    <div className="footer bg-black  lg:px-[13vmax] px-2 py-10 ">
      <div className="footer-container text-white justify-between lg:flex">
        <div>
          <h1 className="font-bold">Company</h1>
          <p className="my-4 text-[#9E9E9E]">
            No.25/2084 A1, 1’Floor, Kozhikode Kerala 673016
          </p>
          <p className="my-4 text-[#9E9E9E]">info@bhaisoluations.com</p>
          <p className="my-4 text-[#9E9E9E]">+91 6339394841</p>
          <div className="flex gap-4 text-[#9E9E9E] my-4">
            <FaInstagram />
            <FaFacebook />
            <CiTwitter />
            <FaYoutube />
            <FaLinkedin />
          </div>
        </div>
        <div className="footer-links lg:flex grid grid-cols-2 gap-4 ">
          <div>
            <h1 className="font-bold mb-4">Company</h1>
            <ul className="text-[#9E9E9E]">
              <li>About Us</li>
              <li>Services</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h1 className="font-bold mb-4">Top Pages</h1>
            <ul className="text-[#9E9E9E]">
              <li>Software Consulting</li>
              <li>Custom Web Applications</li>
              <li>Web Design Service</li>
              <li>Hubspot Services</li>
              <li>Website Maintenance Services</li>
              <li>Mobile App Design</li>{" "}
            </ul>
          </div>
          <div>
            <h1 className="font-bold mb-4">Technologies </h1>
            <ul className="text-[#9E9E9E]">
              <li>Hubspot</li>
              <li>Laravel</li>
              <li>WordPress</li>
              <li>Squarespace</li>
              <li>Android</li>
              <li>IOS</li>
              <li>Flutter</li>{" "}
            </ul>
          </div>

          <div>
            <h1 className="font-bold mb-4">Services</h1>
            <ul className="text-[#9E9E9E]">
              <li>About Us</li>
              <li>Services</li>
              <li>Careers</li>
              <li>Contact Us</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-credits flex flex-col text-white">
        <hr className="my-8 border-t-1 border-[grey]" />
        <Image
          src="https://imaginosolutions.com/wp-content/uploads/imagino-logo.svg"
          alt="logo"
          width={"140"}
          height={"100"}
          className="self-center"
        />
        <p className="self-center text-sm ">
          Terms and Conditions | Privacy Policy | Copyright © 2023 Imagino
          Solutions Pvt Ltd
        </p>
      </div>
    </div>
  );
}

export default Footer;
