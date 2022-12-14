import React from "react";
import skillsData from "../skillsData";

const Skills = () => {
  return (
    <div name="skills" className="py-20 w-full h-screen bg-[#04181a] text-gray-300">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full gap-8">
        <div>
          <p className="text-3xl  font-bold inline border-b-4 border-yellow-700">
            Skills
          </p>
          <p className="py-4">These are the technologies I work with</p>
        </div>
          <ul class="w-full grid grid-cols-2 sm:grid-cols-4 gap-6 py-8">
          {skillsData.map(skill=> <li className="flex flex-col items-center gap-4 shadow-md shadow-[#12292b] hover:scale-110 duration-500 p-2 " key={skill.id}><img className="w-20" src={skill.img} alt={skill.skill} /><p>{skill.skill}</p></li>)}
          </ul>
        
        </div>
    </div>
  );
};

export default Skills;
