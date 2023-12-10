import React from "react";
import Layout from "@/components/Layout";
import { Form } from "@/components";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function page() {
  return (
    <Layout>
      <div className="bg-[url('https://imaginosolutions.com/wp-content/uploads/2019/03/home-appointment-contact-bg-image.png')]">
        <Form />
        <div className="flex items-center justify-center flex-wrap ">
          <div className="flex lg:w-[50%] flex-col gap-4 m-4 ">
            <h1 className="font-semibold">INDIA</h1>
            <p className="text-sm">
              No.25/2084 A1, 1’st Floor, RB Centre KT Gopalan Rd, Kottooli,
              Kozhikode Kerala 673016
            </p>
            <a className="text-blue-900 underline">info@bhaisolutions.com</a>
            <p className="text-gray-500 font-semibold text-sm">
              (+91) 6282 244 147{" "}
            </p>
          </div>
          <div className="flex items-center mb-4">
            <div className="rounded-full p-3 bg-gray-300 hover:bg-[var(--button-primary)] hover:text-white transition-all duration-300 m-2">
              <FaInstagram />
            </div>
            <div className="rounded-full p-3 bg-gray-300 hover:bg-[var(--button-primary)] hover:text-white transition-all duration-300 m-2">
              <FaFacebook />
            </div>
            <div className="rounded-full p-3 bg-gray-300 hover:bg-[var(--button-primary)] hover:text-white transition-all duration-300 m-2">
              <CiTwitter />
            </div>
            <div className="rounded-full p-3 bg-gray-300 hover:bg-[var(--button-primary)] hover:text-white transition-all duration-300 m-2">
              <FaYoutube />
            </div>
            <div className="rounded-full p-3 bg-gray-300 hover:bg-[var(--button-primary)] hover:text-white transition-all duration-300 m-2">
              <FaLinkedin />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default page;
