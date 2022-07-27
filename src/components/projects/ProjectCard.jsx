import React from "react";
import * as images from '../../images/index';

export default function ProjectCard({ project, img, demo, code, description, type }) {
  const image = images[img];
  return (
    <div
      style={{ backgroundImage: `url('${image}')` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
    >
      {/* Hover Effects */}
      <div className="opacity-0 group-hover:opacity-100 px-4 mx-auto">
        <span className="text-2xl font-bold text-white tracking-wider">
          {project}
        </span>
        <br/>
        <span className="text font-bold text-white tracking-wider">
          {`${type}: `}
        </span>
        <span className="text-white text-sm w-5/6">
          {description}
        </span>
        <div className="pt-8 text-center">
          <a href={demo}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Demo
            </button>
          </a>
          <a href={code}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}