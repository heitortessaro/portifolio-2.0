import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
// import Node from '../assets/node.png';
// import FireBase from '../assets/firebase.png';
// import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
// import Mongo from '../assets/mongo.png';

export default function CarouselSkills() {
  return (
    <div name='skills' className='w-full h-screen text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Skills</p>
          <p className='py-4'>These are the technologies I've worked with recently</p>
        </div>

        <div class="carousel carousel-center w-full sm:hidden ">
          <div id="slide1" class="carousel-item w-full">
            <div class="w-full grid grid-cols-2 gap-4 text-center py-8">
              <div className='shadow-md shadow-[#040c16] '>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#040c16] '>
                <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="JS icon" />
                <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                <p className='my-4'>REACT</p>
              </div>
            </div>
            {/* <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" class="btn btn-circle">❮</a>
              <a href="#slide2" class="btn btn-circle">❯</a>
            </div> */}
          </div>
          <div id="slide2" class="carousel-item w-full">
            <div class="w-full grid grid-cols-2 gap-4 text-center py-8">
              <div className='shadow-md shadow-[#040c16] '>
                <img className='w-20 mx-auto' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg' alt="React icon" />
                <p className='my-4'>REDUX</p>
              </div>
              <div className='shadow-md shadow-[#040c16] '>
                <img className='w-20 mx-auto' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg' alt="Jest icon" />
                <p className='my-4'>JEST</p>
              </div>
              <div className='shadow-md shadow-[#040c16] '>
                <img className='w-20 mx-auto' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg' alt="Bootstrap icon" />
                <p className='my-4'>BOOTSTRAP</p>
              </div>
              <div className='shadow-md shadow-[#040c16] '>
                <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                <p className='my-4'>TAILWIND</p>
              </div>
            </div>
            {/* <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" class="btn btn-circle">❮</a>
              <a href="#slide3" class="btn btn-circle">❯</a>
            </div> */}
          </div>
          <div id="slide3" class="carousel-item  w-full">
            <div class="w-full grid grid-cols-2 gap-4 text-center py-8">
              <div className='shadow-md shadow-[#040c16] '>
                <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
                <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] '>
                <img className='w-20 mx-auto' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' alt="Python icon" />
                <p className='my-4'>PYTHON</p>
              </div>
              <div className='shadow-md shadow-[#040c16] '>
                <img className='w-20 mx-auto' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' alt="Python icon" />
                <p className='my-4'>DOCKER</p>
              </div><div className='shadow-md shadow-[#040c16] '>
                <img className='w-20 mx-auto' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' alt="Python icon" />
                <p className='my-4'>MYSQL</p>
              </div>
            </div>
            {/* <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" class="btn btn-circle">❮</a>
              <a href="#slide1" class="btn btn-circle">❯</a>
            </div> */}
          </div>


        </div>


        <div className='hidden w-full sm:grid sm:grid-cols-3 md:grid-cols-6 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="JS icon" />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg' alt="React icon" />
            <p className='my-4'>REDUX</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/jest/jest-plain.svg' alt="Jest icon" />
            <p className='my-4'>JEST</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg' alt="Bootstrap icon" />
            <p className='my-4'>BOOTSTRAP</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
            <p className='my-4'>TAILWIND</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHub} alt="Github icon" />
            <p className='my-4'>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' alt="Python icon" />
            <p className='my-4'>PYTHON</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' alt="Python icon" />
            <p className='my-4'>DOCKER</p>
          </div><div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' alt="Python icon" />
            <p className='my-4'>MYSQL</p>
          </div>

          {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src='https://camo.githubusercontent.com/e045b6c483968b0b0e13d4dafcbf84237a569e5fb7f5fe6c0a48c48a137e8da7/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6d61746c61622f6d61746c61622d6f726967696e616c2e737667' alt="Matlab icon" />
                  <p className='my-4'>MATLAB</p>
              </div> */}


          {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Mongo} alt="HTML icon" />
                  <p className='my-4'>MONGO DB</p>
              </div>
              <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
                  <p className='my-4'>AWS</p>
              </div> */}
        </div>
      </div>
    </div>
  );
};
