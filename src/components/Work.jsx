import React from 'react';
import projects from '../services/projects';
import ProjectCard from './projects/ProjectCard';
import ProjectCardSmall from './projects/ProjectCardSmall';

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="mt-20 md:mt-0 pb-2 sm:pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>
        {/* ------------------------------------------------------- */}
        {/* Container small screns*/}
        <div className="sm:hidden ">
          {/* Grid Item */}
          {projects.map((e, i) => (
            <ProjectCardSmall 
              description={e.description} 
              type={e.type}
              project={e.project} 
              img={e.img} 
              secBtnType={e.secBtnType}
              secLink={e.secLink} 
              code={e.code} 
              key={e.project + i*100} />
          ))}
        </div>

        {/* ------------------------------------------------------- */}
        {/* Container */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {projects.map((e, i) => (
            <ProjectCard 
              description={e.description} 
              type={e.type}
              project={e.project} 
              img={e.img.split('.')[0]} 
              secBtnType={e.secBtnType}
              secLink={e.secLink} 
              code={e.code} 
              key={e.project + i*100} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
