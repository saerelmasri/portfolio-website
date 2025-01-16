import React from "react";
import ButtonCustom from "./Button";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="border mt-10 md:mt-20">
      <div className="flex justify-between flex-wrap md:flex-no-wrap">
        <div className="flex justify-between md:justify-start flex-col items-start md:flex-row">
          <ButtonCustom title="Home" variant="link" size="sm" path="/" sx={"font-semibold"}/>
          <ButtonCustom
            title="Projects"
            variant="link"
            size="sm"
            path="/projects"
            sx={"font-semibold"}
          />
          <ButtonCustom title="About" variant="link" size="sm" path="/about" sx={"font-semibold"}/>
          <ButtonCustom
            title="Contact"
            variant="link"
            size="sm"
            path="/contact"
            sx={"font-semibold"}
          />
        </div>
        <div className="flex space-x-3 p-5 md:p-0">
          <a
            href="https://www.linkedin.com/in/saer-el-masri/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin size={30} className="cursor-pointer" />
          </a>
          <a
            href="https://github.com/saerelmasri"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub size={30} className="cursor-pointer" />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="flex flex-col md:flex-row md:w-1/2 items-center space-x-2">
          <h4 className="text-base font-semibold text-gray-500">
            Interested in working together?
          </h4>
          <ButtonCustom
              title="Get in Touch"
              path="/contact"
              variant={"default"}
              size={"sm"}
              sx={"text-white text-sm font-semibold"}
            />
        </div>
        <div className="flex flex-col md:flex-row md:w-1/2 p-5 md:justify-end">
          <h4 className="text-sm font-semibold text-gray-500">
            ©{year} All Rights Reserved.
          </h4>
          <h4 className="text-sm font-semibold text-gray-500">
            Made with 💜 by Saer El Masri
          </h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
