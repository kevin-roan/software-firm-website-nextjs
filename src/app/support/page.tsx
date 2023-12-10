import React from "react";
import Layout from "@/components/Layout";
import { Form, SupportCard } from "@/components";

const serviceTypes = [
  {
    title: "Email us",
    desc: "lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    imgUrl: "https://freesvg.org/img/lettre.png",
  },
  {
    title: "Support Ticket",
    desc: "lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    imgUrl: "https://freesvg.org/img/booknoshadow.png",
  },
  {
    title: "Live Chat",
    desc: "lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    imgUrl: "https://freesvg.org/img/internet-group-chat.png",
  },
  {
    title: "Call Support",
    desc: "lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    imgUrl: "https://freesvg.org/img/SC0006.Scribble-telephone.png",
  },
];

function page() {
  return (
    <Layout>
      <div className="lg:px-[13vmax] my-5">
        <div>
          <h1 className="text-center text-5xl font-semibold py-4">
            Imagino Customer{" "}
            <span className="text-[var(--button-primary)]">Support</span>
          </h1>
          <p className="text-center">
            Welcome to the Imagino Customer Support hub! Here, we prioritize
            your satisfaction by providing seamless assistance and
            troubleshooting for your needs. Our dedicated team is committed to
            addressing your concerns promptly and effectively. Please try using
            one of our prompt support channels below.
          </p>
        </div>
        <div className="flex gap-2 lg:flex-row md:flex-row flex-col my-4 mx-4">
          {serviceTypes.map((item, index) => (
            <SupportCard
              key={index}
              title={item.title}
              desc={item.desc}
              imgUrl={item.imgUrl}
            />
          ))}
        </div>
        <div className="flex bg-zinc-100 rounded-md p-5 m-4">
          <p className="text-sm">
            Imagino provides the customer with best support options so that they
            can know the exact status of their project and actively take part in
            making the project a success. Our client portal provides the clients
            access to their projects, contracts, services and account so as to
            improve transparency. Besides, it streamlines the process of
            collecting source documents from clients, organise client data and
            secures sharing files with staff and clients.
          </p>
        </div>
      </div>
      <Form />
    </Layout>
  );
}

export default page;
