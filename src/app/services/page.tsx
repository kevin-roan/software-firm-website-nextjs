import React from "react";
import Layout from "@/components/Layout";
import { ServiceCard, Form } from "@/components";

const services = [
  {
    title: "Web Development",
    desc: "We delivers a wide range of custom web solutions for businesses both big",
    imageUrl: "https://freesvg.org/img/Web-Browser.png",
  },
  {
    title: "Web Design",
    desc: "The primary function of any website is to communicate effectively ...",
    imageUrl: "https://freesvg.org/img/JicJac_Laptop.png",
  },
  {
    title: "Mobile Apps Development",
    desc: "We also provide strategic planning to deliver the best product and service ...",
    imageUrl: "https://freesvg.org/img/android_line_art.png",
  },
  {
    title: "Software Consulting & Support",
    desc: "We provides the customer with best support options so that they can ...",
    imageUrl: "https://freesvg.org/img/SC0006.Scribble-telephone.png",
  },
];

function Services() {
  return (
    <Layout>
      <div className="lg:px-[13vmax] lg:my-4 m-4">
        <h1 className="font-bold text-3xl lg:w-[50%] lg:py-4 ">
          From your abstract ideas to get our truly prominent{" "}
          <span className="text-[var(--button-primary)]">IT solutions.</span>
        </h1>
        <div className="flex flex-col lg:flex-row gap-4">
          {services.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              desc={item.desc}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
      <Form />
    </Layout>
  );
}

export default Services;
