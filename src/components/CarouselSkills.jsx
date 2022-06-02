import React from 'react';
import skills from '../services/skills'
import SkillCard from './skills/SkillCard';

export default function CarouselSkills() {
  return (
    <div name='skills' className='w-full h-screen text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          <p className='py-4'>These are the technologies I've worked with recently</p>
        </div>

        <div className="carousel carousel-center w-full sm:hidden ">
          {skills.map((e, i, a) => {
            return (
              !((i + 1) % 4) && (
                <div className="carousel-item w-full">
                  <div className="w-full grid grid-cols-2 gap-4 text-center py-8">
                    <SkillCard skill={a[i - 3].skill} img={a[i - 3].img} key={a[i - 3].skill + i} />
                    <SkillCard skill={a[i - 2].skill} img={a[i - 2].img} key={a[i - 2].skill + i} />
                    <SkillCard skill={a[i - 1].skill} img={a[i - 1].img} key={a[i - 1].skill + i} />
                    <SkillCard skill={e.skill} img={e.img} key={e.skill + i} />
                  </div>
                </div>
              )
            )
          })}
        </div>

        <div className='hidden w-full sm:grid sm:grid-cols-3 md:grid-cols-6 gap-4 text-center py-8'>
          {skills.map((e, i) => (
            <SkillCard skill={e.skill} img={e.img} key={e.skill + i} />
          ))}
        </div>
      </div>
    </div>
  );
};
