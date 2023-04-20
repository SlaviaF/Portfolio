import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => setShowNav(!showNav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#04181a] text-gray-300">
      <div>Slavia Portfolio</div>
      <ul class="links hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
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
        <ul className="links">
          <li className="py-6 text-3xl">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-3xl">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-3xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-3xl">
            <Link
              onClick={handleClick}
              to="projects"
              smooth={true}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="py-6 text-3xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/*Social Icons*/}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul className="social-icons">
          <li className=" bg-green-700">
            <a href="https://www.linkedin.com/in/slavia-furtado-00b649169/">
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="bg-gray-800">
            <a href="https://github.com/SlaviaF">
              Github <FaGithub size={30} />
            </a>
          </li>
      
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
