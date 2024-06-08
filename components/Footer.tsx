import React from "react";
import ButtonCustom from "./Button";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="pl-5 pr-5 2xl:pl-60 2xl:pr-60 md:pl-50 md:pr-50">
      <div className="flex justify-between pl-10">
        <div className=" flex justify-center ">
          <ButtonCustom title="Home" variant="link" size="sm" />
          <ButtonCustom title="Projects" variant="link" size="sm" />
          <ButtonCustom title="About" variant="link" size="sm" />
          <ButtonCustom title="Contact" variant="link" size="sm" />
        </div>
        <div className="flex justify-end space-x-3 p-5 ">
          <FiLinkedin size={30} className="cursor-pointer" />
          <FiGithub size={30} />
        </div>
      </div>
      <div className="flex">
        <div className="flex h-[80px] w-[50%] p-12 justify-start items-center space-x-4">
          <h4 className="text-2xl font-semibold text-gray-500">
            Interested in working together?
          </h4>
          <ButtonCustom
            title="Get in Touch"
            path="/dd"
            variant={"default"}
            sx={"w-1/2 text-sm md:w-1/5 md:text-lg mr-5 text-white "}
          />
        </div>
        <div className="flex flex-col h-[80px] w-[50%] p-5 justify-center items-end space-x-4">
          <h4 className="text-base font-semibold text-gray-500">
            ©{year} All Rights Reserved.
          </h4>
          <h4 className="text-base font-semibold text-gray-500">
            Made with 💜 by Saer El Masri
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
