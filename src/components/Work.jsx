import React from 'react';
import WorkImg from '../assets/workImg.jpeg';
import realEstate from '../assets/realestate.jpg';
import projects from '../services/projects';
import ProjectCard from './projects/ProjectCard';

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300  mt-8">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work (to be completed)</p>
        </div>
        <div className="carousel carousel-center w-full sm:hidden ">
          {projects.map((e) => (
            <div className="carousel-item w-full px-2" key={e.skill + Math.random()}>
                <ProjectCard description={e.description} project={e.project} img={e.img} demo={e.demo} code={e.code} />
            </div>
          ))}
        </div>


        {/* ------------------------------------------------------- */}
        {/* Container */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {projects.map((e, i) => (
            <ProjectCard description={e.description} project={e.project} img={e.img} demo={e.demo} code={e.code} key={e + i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
