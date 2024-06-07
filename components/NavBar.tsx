import React from "react";
import ButtonCustom from "./Button";
import { BiMessageSquareDetail } from "react-icons/bi";

function NavBar() {
  return (
    <nav className="top-0 bg-white fixed w-full h-14 flex justify-between items-center pt-8 pb-8 border ">
      <div className="border border-solid border-black m-10">Saer Logo</div>
      <div className="space-x-5">
        <ButtonCustom title="Home" path="/" variant={"link"}/>
        <ButtonCustom title="Projects" path="/projects" variant={"link"}/>
        <ButtonCustom title="About" path="/about" variant={"link"}/>
      </div>
      <div>
        <button className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:opacity-75 m-10">
          <BiMessageSquareDetail size={25} />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
