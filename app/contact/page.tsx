/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { AiOutlineMail } from "react-icons/ai";

function ContactPage() {
  return (
    <main>
      <div className="flex flex-col md:flex-row items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        {/* Left Section - Text and Email */}
        <div className="w-full md:w-1/2 text-black flex flex-col justify-center space-y-5 py-6 md:py-12 lg:py-16">
          <h2 className="text-black text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Get In Touch<strong className="text-primary">.</strong>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-500 max-w-prose">
            Looking to partner or work together? Reach out through the form and
            I'll get back to you in the next 48 hours.
          </p>
          <div className="flex items-center space-x-3">
            <AiOutlineMail size={24} className="text-primary" />
            <h5 className="text-sm sm:text-base lg:text-lg text-gray-800">
              saer1890@gmail.com
            </h5>
          </div>
        </div>

        {/* Right Section - Image */}
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
