import Layout from "@/components/Layout";
import React from "react";
import Image from "next/image";
import { Form } from "@/components";
import ReviewCard from "@/components/ReviewCard";

const sponsorlogo = [
  {
    name: "clutch",
    imgUrl:
      "https://imaginosolutions.com/wp-content/uploads/imagino-clutch-rating.png",
  },
  {
    name: "trustpilot",
    imgUrl:
      "https://imaginosolutions.com/wp-content/uploads/imagino-trustpilot-rating.png",
  },
  {
    name: "HubSpot",
    imgUrl:
      "https://imaginosolutions.com/wp-content/uploads/imagino-hubspot-rating.png",
  },
  {
    name: "Google",
    imgUrl:
      "https://imaginosolutions.com/wp-content/uploads/imagino-google-rating.png",
  },
  {
    name: "Facebook",
    imgUrl:
      "https://imaginosolutions.com/wp-content/uploads/imagino-facebook-rating.png",
  },
];

function Reviews() {
  return (
    <Layout>
      <div className="lg:w-[60%] flex flex-col gap-4 items-start lg:px-[13vmax] p-4">
        <h4 className="font-extrabold text-gray-400 ">CUSTOMER REVIEWS</h4>
        <h1 className="font-semibold text-4xl">
          We’ve been triumphing all these{" "}
          <span className="text-[var(--button-primary)]">7 years.</span>{" "}
          Sacrifices are made up with success.
        </h1>
        <p>
          Our Solutions and technology experts help the customers transform
          business, deliver growth & create competitive advantage.
        </p>
        <button className="px-4 py-3 text-white bg-[var(--button-primary)] rounded-[5px] ">
          About Us
        </button>
      </div>
      <div className="testimonials flex lg:px-[13vmax] flex-col items-center">
        <h1 className="font-extrabold text-4xl p-4 text-center">
          Loved By Customers Across{" "}
          <span className="text-[var(--button-primary)]">40+</span> Countries
        </h1>
        <div className="fanglogocontainer flex flex-wrap  mb-10 justify-center">
          {sponsorlogo.map((item, index) => (
            <Image
              src={item.imgUrl}
              alt={item.name}
              height="400"
              width="200"
              key={index}
            />
          ))}
        </div>
        <div className="flex flex-col items-center lg:m-0 m-3">
          <h4 className="font-extrabold text-gray-400">TESTIMONIALS</h4>
          <h1 className="font-semibold text-4xl text-center">
            Why do people praise about{" "}
            <span className="text-[var(--button-primary)]">Imagino?</span>{" "}
          </h1>
          <div className="lg:flex lg:flex-wrap justify-center">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>
      </div>
      <Form />
    </Layout>
  );
}

export default Reviews;
