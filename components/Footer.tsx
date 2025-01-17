import React from "react";
import ButtonCustom from "./Button";
import { FiGithub, FiLinkedin } from "react-icons/fi";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="mt-10 md:mt-20 py-6">
      {/* Navigation and Social Icons */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 px-6 md:px-10">
        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6">
          <ButtonCustom
            title="Home"
            variant="link"
            size="sm"
            path="/"
            sx={"font-semibold"}
          />
          <ButtonCustom
            title="Projects"
            variant="link"
            size="sm"
            path="/projects"
            sx={"font-semibold"}
          />
          <ButtonCustom
            title="About"
            variant="link"
            size="sm"
            path="/about"
            sx={"font-semibold"}
          />
          <ButtonCustom
            title="Contact"
            variant="link"
            size="sm"
            path="/contact"
            sx={"font-semibold"}
          />
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/saer-el-masri/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <FiLinkedin
              size={30}
              className="cursor-pointer hover:text-primary transition-transform transform hover:scale-110"
            />
          </a>
          <a
            href="https://github.com/saerelmasri"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <FiGithub
              size={30}
              className="cursor-pointer hover:text-primary transition-transform transform hover:scale-110"
            />
          </a>
        </div>
      </div>

      {/* Call-to-Action and Footer Details */}
      <div className="mt-8 flex flex-col md:flex-row justify-between items-center md:items-start space-y-6 md:space-y-0 px-6 md:px-10">
        {/* Call-to-Action Section */}
        <div className="flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <h4 className="text-base font-semibold text-gray-500 text-center md:text-left">
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

        {/* Footer Bottom Section */}
        <div className="flex flex-col items-center md:items-end space-y-2">
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
