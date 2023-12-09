import { Card, HeadingBox } from "@/components";
import React from "react";
import { FaCheck } from "react-icons/fa6";

const services_list = [
  "Client Needs Assessment",
  "Business Process Automation & Optimization",
  "Technology Recommendations & Implementation",
  "Software Development and Testing",
  "Software Integration & Architecture",
  "Training and Documentation",
];

function Home() {
  return (
    <div className="home-container">
      <div className="px-[13vmax] flex mt-10">
        <div className="left-contiainer min-w-[50%] mx-4">
          <HeadingBox title="Software Consulting & Support Service" />
          <div>
            <ul className="grid grid-cols-2  mt-[3vmax]">
              {services_list.map((item, index) => (
                <li key={index}>
                  <div className="flex items-center m-3">
                    <FaCheck color="blue" />
                    <p className="ml-4 text-sm">{item}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Card
            title="Website Maintenance Service"
            desc="It’s our job to keep our client’s website fresh as it is a great marketing and sales tool that creates a lasting impression of the company. We provide it with all the support so that it does not become obsolete. "
          />
        </div>
        <div className="right-contiainer">
          <p>
            Software consulting is a comprehensive service that provides
            businesses with expert guidance and support on all aspects of
            software, from strategy and planning to development, deployment, and
            maintenance. Our team of experienced software consultants possesses
            in-depth knowledge and expertise across a wide range of technologies
            and industries, enabling us to deliver tailored solutions that
            address your specific business needs and challenges.
          </p>
          <div className="mt-6 mb-20">
            <button className="bg-[var(--button-primary)] text-[white] p-2 rounded-md text-sm">
              Get a FREE Consultation
            </button>
            <button className="bg-white text-[var(--button-primary)] border-[1px] border-[var(--button-primary)] p-2 text-sm mx-4 rounded-md">
              Live chat with consultant
            </button>
          </div>
          <Card
            title="Website Migration Service"
            desc="At Imagino, we offer website migration service -either moving from an old host or moving within accounts. Migrating a website from one host to another is quite an uphill task. If not done with utmost care, it can do more harm to the business. Our well experienced team at Imagino can effortlessly move your website to another web host without significant downtime or adverse impact on the site. "
          />
        </div>
      </div>
      <div className="flex px-[13vmax] mt-10">
        <div className="left-contiainer min-w-[50%] mx-4">
          <HeadingBox title="Fill out this form to get a free consultation" />
          <p>
            Timing is just right when you’re ready! Post your query now, and
            we’ll get in touch with you soon!
          </p>
        </div>
        <div className="text-white">
          <form>
            <input
              placeholder="Your Name *"
              type="text"
              className=" p-3 rounded-md bg-[#F5F5F5] mx-2"
            />
            <input
              placeholder="Your Email *"
              type="email"
              className=" p-3 rounded-md bg-[#F5F5F5]"
            />
            <input
              placeholder="Your General Enquiry"
              className=" p-3 rounded-md bg-[#F5F5F5] w-[100%]"
            />
            <textarea
              placeholder="Please describe what you need *"
              className=" p-3 rounded-md bg-[#F5F5F5]"
            />
            <button>SEND</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
