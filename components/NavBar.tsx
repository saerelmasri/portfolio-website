"use client";

import React, { useState } from "react";
import ButtonCustom from "./Button";
import { BiMessageSquareDetail, BiMenu, BiX } from "react-icons/bi";
import Link from "next/link";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="top-0 bg-white fixed w-full h-14 flex justify-between items-center  z-10">
      <div className="hidden lg:flex space-x-6 pl-10">
        <ButtonCustom title="Home" path="/" variant={"link"} sx={"text-base font-bold"} />
        <ButtonCustom title="Projects" path="/projects" variant={"link"} sx={"text-base font-bold"}/>
        <ButtonCustom title="About" path="/about" variant={"link"} sx={"text-base font-bold"}/>
      </div>
      <div className="flex items-center ml-auto">
        <Link href="/contact">
          <button className="items-center justify-center w-8 h-8 rounded-full bg-black text-white hover:opacity-75 m-10 hidden lg:flex">
            <BiMessageSquareDetail size={20} />
          </button>
        </Link>
        <button onClick={toggleMenu} className="lg:hidden ml-4">
          {isOpen ? <BiX size={30} /> : <BiMenu size={30} />}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 z-20 transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden`}
        onClick={toggleMenu}
      >
        <div
          className="bg-white w-64 h-full p-8 absolute right-0"
          onClick={(e) => e.stopPropagation()}
        >
          <ButtonCustom title="Home" path="/" variant={"link"} />
          <ButtonCustom title="Projects" path="/projects" variant={"link"} />
          <ButtonCustom title="About" path="/about" variant={"link"} />
          <Link href="/contact">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:opacity-75 mt-4">
              <BiMessageSquareDetail size={25} />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
