import React, { useState } from "react";
import logo from "../assets/navLogo.png";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {    
  return (
    <div className=" flex items-center justify-between w-full bg-transparent px-10 ">
      <div className=" w-[194px] h-[8vh] z-50">
        <Link to={"/"}>
          <img src={logo} alt="Logo" className="w-full h-full" />
        </Link>
      </div>
      <ul className=" flex gap-4 items-center z-20">
        <NavLink to={"/about"}>
          <li className=" text-[#F7F7F7] font-semibold">About</li>
        </NavLink>
        <NavLink to={"/blog"}>
          <li className="text-[#F7F7F7] font-semibold">Blog</li>
        </NavLink>
        <NavLink to={"/careers"}>
          <li className="text-[#F7F7F7] font-semibold">Careers</li>
        </NavLink>
          <li onClick={openModal} className="text-[#F7F7F7] font-semibold cursor-pointer">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;