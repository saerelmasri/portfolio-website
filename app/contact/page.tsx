/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { AiOutlineMail } from "react-icons/ai";

function ContactPage() {
  return (
    <main>
      <div className="flex flex-col md:flex-row items-center justify-center  sm:pl-5 sm:pr-5 md:pl-30 md:pr-30 2xl:pl-60 2xl:pr-60">
        <div className=" w-full md:w-1/2 text-black flex flex-col justify-center space-y-3 p-4 md:p-10 2xl:p-12">
          <h2 className="text-black text-5xl md:text-5xl lg:text-7xl font-extrabold">
            Get In Touch<strong className="text-primary">.</strong>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-prose">
            Looking to partner or work together? Reach out through the form and
            I'll get back to you in the next 48 hours.
          </p>
          <div className="w-full h-16 flex flex-col justify-start items-start space-y-5">
            <div className="flex justify-start items-center space-x-2">
              <AiOutlineMail size={20} />
              <h5 className="text-xl text-gray-800">saer1890@gmail.com</h5>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:h-screen flex justify-center items-center p-10">
          <div
            className="bg-cover bg-center rounded-full bg-hero-section"
            style={{
              aspectRatio: "1 / 1",
              width: "100%",
              maxWidth: "500px",
              height: "auto",
              maxHeight: "500px",
            }}
          ></div>
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
