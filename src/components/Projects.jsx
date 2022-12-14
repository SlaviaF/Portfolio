import React from "react";
import projectsData from "../ProjectsData"

const Projects = () => {
  return (
    <div name="projects" className=" py-20 w-full h-full bg-[#04181a] text-gray-300">
      {/*container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full gap-8">
        <div>
          <p className="text-3xl  font-bold inline border-b-4 border-yellow-700">
            Projects
          </p>
          <p className="py-4">Take a look at some of my projects</p>
        </div>
        <div>
        <div className="w-full py-8 flex flex-col gap-10 sm:px-32 px-10">
        {projectsData.map((project) => {
            return (
              <div
                className=" flex flex-col gap-4 shadow-md shadow-[#12292b] hover:scale-110 duration-500 p-2"
              >
                <h2 class="text-lg">{project.title}</h2>
                <img
                  src={project.img}
                  alt={project.title}
                />
               
                    <a href={project.source} className="text-sm py-2" target="_blank">
                     View source code
                    </a>
            
              </div>
            );
          })}
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
