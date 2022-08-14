import React from 'react';
import projects from '../services/projects';
import CarouselProjects from './CarouselProjects';
import ProjectCard from './projects/ProjectCard';
import ProjectCardCarousel from './projects/ProjectCardsCarousel';

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300  mt-8">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-2 sm:pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Carousel */}
        <CarouselProjects />
        {/* <div className="carousel carousel-center w-full sm:hidden ">
          {projects.map((e) => (
            <div className="carousel-item w-full px-2 " key={e.project + "carousel"}>
                <ProjectCardCarousel description={e.description} project={e.project} img={e.img} demo={e.demo} code={e.code} />
            </div>
          ))}
        </div> */}


        {/* ------------------------------------------------------- */}
        {/* Container */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          {projects.map((e, i) => (
            <ProjectCard 
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
      </div>
    </div>
  );
};

export default Work;
