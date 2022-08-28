import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  return (
    <nav className="fixed w-full h-[80px] flex justify-between items-center mx-auto px-10 lg:px-32 bg-main-body text-gray-300 z-20">
      <div className='text-3xl font-bold '>
        Heitor.JT
      </div>
      {/* menu */}
      <ul className="hidden md:flex space-x-6 items-center">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
        <a href="/about">About</a>
        </li>
        <li>
          <a href="/skills">Skills</a>
        </li>
        <li>
          <a href="/work">Work</a>
        </li>
        <li>
          <a href="/contact">
            <button className='px-6 py-2 bg-theme font-semibold hover:rounded-xl duration-300'> Hire me </button>
          </a>
        </li>
      </ul>
      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-main-body flex flex-col justify-center items-center'
        }
      >
        <li className="py-6 text-4xl">
          <a href="/">Home</a>
        </li>
        <li className="py-6 text-4xl">
        <a href="/about">About</a>
        </li>
        <li className="py-6 text-4xl">
        <a href="/skills">Skills</a>
        </li>
        <li className="py-6 text-4xl">
        <a href="/work">Work</a>
        </li>
        <li className="py-6 text-4xl">
        <a href="/contact">Hire me</a>
        </li>
      </ul>
      {/* Social icons */}
      <div className="hidden xl:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/heitortessaro/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/heitortessaro"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#28c4a2]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:heitor.j.tessaro@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
