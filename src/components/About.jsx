import React from 'react';

export default function About() {
  return (
    <div name="about" className="w-full h-screen text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Heitor. Nice to meet you! Please, take a look around.</p>
          </div>
          <div>
            <p className='pb-2'>I'm passionate about learning and creating impactful and inspiring experiences in people's lives. </p>
            <p className='pb-2'>I'm a web developer and technical writer with an electrical engineering background. Previously, I worked as a college professor and researcher for six years.</p>
            <p className='pb-2 font-bold'>Let me help you remove the roadblock holding your success?</p>
          </div>
        </div>
      </div>
    </div>
  );
}
