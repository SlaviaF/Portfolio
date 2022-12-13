import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#04181a]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-yellow-700">Hi, my name is</p>
        <h1 className="text-3xl sm:text-7xl font-old text-gray-300">
          Slavia Furtado
        </h1>
        <h2 className="text-3xl sm:text-7xl font-old text-gray-500">
          I'm a web developer.{" "}
        </h2>

        <p className="text-gray-600 py-4 max-w-[600px]">
          I am a webdevloper specialising in building exceptional digital
          experience.{" "}
        </p>
        <div>
          <button className="group text-white border-2 border-white items-center px-6 py-3 my-2 flex items-cente hover:bg-yellow-900 hover:border-yellow-900">
          View Projects 
           <span className="group-hover:rotate-90 duration-300"><HiArrowNarrowRight  className="ml-3"/></span> 
         
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
