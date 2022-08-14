import React from 'react';
// import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll';
import { FaEye } from 'react-icons/fa';

export default function Home() {
  return (
    <div name="home" className="w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600 ">Hi, my name is</p>
        <p className="text-3xl sm:text-5xl font-bold text-[#8892b0]">Heitor José Tessaro.</p>
        <p className="text-[#8892b0]">I'm a Full Stack Developer.</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Let's Build Great Experiences Together!
        </h1>
        {/* <p className="text-[#8892b0] py-4 max-w-[700px]">
          Description
        </p> */}
        <div>
          <button className="text-white group border-2 px-6 py-3 my-12 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="work" smooth={true} duration={500}>
              View my work!
            </Link>
            <span>
              <FaEye className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
