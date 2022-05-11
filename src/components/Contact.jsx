
import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';

export default function Contact() {
  return (
    <div name='contact' className='w-full h-screen flex flex-col justify-center items-center mt-8 p-4 bg-main-body'>
      <div className='w-full sm:w-[600px] pb-8'>
        <p className='text-4xl text-left font-bold inline border-b-4 border-pink-600 text-gray-300'>Hire me</p>
        <p className='text-gray-300 py-4'>Contact me using the form or my social networks</p>
      </div>
      <form method='POST' action="https://getform.io/f/6920c939-1c12-46ff-baf7-ffa20dad9814" className='flex flex-col max-w-[600px] w-full'>
        <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
        <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 mt-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
      <ul className='w-full flex justify-center space-x-8 mt-12'>
        <li className="w-[60px] h-[60px] rounded-full flex justify-between items-center bg-blue-600">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://www.linkedin.com/in/heitortessaro/"
          >
            <FaLinkedin size={30} />
          </a>
        </li>
        <li className="w-[60px] h-[60px] rounded-full flex justify-between items-center bg-[#333333]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="https://github.com/heitortessaro"
          >
            <FaGithub size={30} />
          </a>
        </li>
        <li className="w-[60px] h-[60px] rounded-full flex justify-between items-center bg-[#28c4a2]">
          <a
            className="flex justify-between items-center w-full text-gray-300"
            href="mailto:heitor.j.tessaro@gmail.com"
          >
            <HiOutlineMail size={30} />
          </a>
        </li>
      </ul>

    </div>
  )
}
