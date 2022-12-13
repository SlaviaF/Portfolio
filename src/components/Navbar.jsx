import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => setShowNav(!showNav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#04181a] text-gray-300">
      <div>Slavia Portfolio</div>
      <ul class="hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      {/*Hamburger*/}
      <div onClick={handleClick} className="md:hidden z-10">
        {!showNav ? <FaBars /> : <FaTimes />}
      </div>
      {/*Mobile menu*/}
      <div
        class={
          !showNav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#04181a] flex flex-col justify-center items-center text-center"
        }
      >
        <ul>
          <li className="py-6 text-3xl">Home</li>
          <li className="py-6 text-3xl">About</li>
          <li className="py-6 text-3xl">Skills</li>
          <li className="py-6 text-3xl">Projects</li>
          <li className="py-6 text-3xl">Contact</li>
        </ul>
      </div>

      {/*Social Icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-700">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-800">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#567796]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Email <HiOutlineMail  size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6b6a6a]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
