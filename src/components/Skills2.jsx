import React from 'react';
import skills from '../services/skills'
// import CarouselSkills from './CarouselSkills';
import SkillCard from './skills/SkillCard';
// import SkillCardCarousel from './skills/SkillCardCarousel';

export default function Skills2() {
  return (
    <div name='skills' className='pt-16 sm:pt-0  sm:w-full sm:h-screen text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          <p className='py-4'>These are the technologies I've worked with recently</p>
        </div>

        {/* <CarouselSkills /> */}

        <div className=' w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center py-8'>
          {skills.map((e, i) => (
            <SkillCard skill={e.skill} img={e.img} key={e.skill + i} />
          ))}
        </div>
      </div>
    </div>
  );
};
