import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Svelte from "../assets/svelte.png";
import Hasura from "../assets/hasura.png";
import Node from "../assets/node.png";
import Git from "../assets/git.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#04181a] text-gray-300">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full gap-8">
        <div>
          <p className="text-3xl  font-bold inline border-b-4 border-yellow-700">
            Experience
          </p>
          <p className="py-4">These are the technologies I work with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 ">
          <div class="flex flex-col items-center gap-4">
            <img className="w-20" src={HTML} alt="HTML icon" />
            <span>HTML</span>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Skills;
