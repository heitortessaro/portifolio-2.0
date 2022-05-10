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
            <p>Hi. I'm Heitor, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>I am passionate about learning and today, I'm trying to positively impact people's lives. </p>
            <p>I have a master's degree in electrical engineering and work as a technical writer nowadays. I just finished the front-end module, and I'm currently starting the front-end module of the full-stack web developer course at Trybe.
            <p>Previously, I worked for 04 years as a researcher at two federal universities and 02 years as a college professor in Brazil. Furthermore, I was also a member of AIESEC during an exchange program at Arizona State University.</p>

              {/* I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips? */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
