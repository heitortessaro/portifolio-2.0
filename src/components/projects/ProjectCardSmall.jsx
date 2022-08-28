import React from "react";

export default function ProjectCardSmall({ project, img, secBtnType, secLink, code, description, type }) {
  console.log(img);
  return (
    <div
      className="shadow-lg shadow-[rgb(0,0,0)] rounded-md mb-6 w-5/6 mx-auto"
    >
      <div>
        <img className="rounded-t-lg" src={`../../images/${img}`} alt={project}/>
      </div>
      <div className="mx-auto p-4">
        <span className="text-2xl font-bold text-white tracking-wider">
          {project}
        </span>
        <br />
        <span className="text font-bold text-white tracking-wider">
          {`${type}: `}
        </span>
        <span className="text-white text-sm w-5/6">
          {description}
        </span>
        <div className="pt-4 text-center">
          <a href={secLink}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              {secBtnType}
            </button>
          </a>
          <a href={code}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div >
  )
}