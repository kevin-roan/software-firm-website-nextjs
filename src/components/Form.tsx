import React from "react";
import { HeadingBox } from ".";

function Form() {
  return (
    <div>
      <div className="lg:px-[13vmax] mt-10 lg:flex">
        <div className="left-contiainer min-w-[50%] mx-4">
          <HeadingBox title="Fill out this form to get a free consultation" />
          <p className="py-2 text-black max-w-md">
            Timing is just right when you’re ready! Post your query now, and
            we’ll get in touch with you soon!
          </p>
        </div>
        <div className="text-white p-4 lg:p-0">
          <form>
            <input
              placeholder="Your Name *"
              type="text"
              className="p-3 rounded-md bg-[#F5F5F5] mr-2 w-[100%] lg:w-[50%] text-black"
            />
            <input
              placeholder="Your Email *"
              type="email"
              className=" p-3 rounded-md bg-[#F5F5F5] mt-4 w-[100%] lg:w-[48%] text-black"
            />
            <input
              placeholder="Your General Enquiry"
              className=" p-3 rounded-md bg-[#F5F5F5] w-[100%] my-3 text-black"
            />
            <textarea
              placeholder="Please describe what you need *"
              className=" p-3 rounded-md bg-[#F5F5F5] w-[100%] h-[10vmax] text-black"
            />
            <button
              className="bg-[var(--button-primary)] text-[white] rounded-md font-bold px-4 py-2 my-3 hover:bg-[var(--primary-color)] hover:transition ease-in-out duration-200"
              type="submit"
            >
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
