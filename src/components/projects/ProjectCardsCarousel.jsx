import React from "react";

export default function ProjectCardCarousel({ project, img, demo, code, description }) {
  return (
    // <div className="w-5/6 max-h-80 border-gray-700 border-2 rounded-md mx-auto relative">
    //   <div className=" px-2 py-4 mx-auto">
    //     <span className="text-2xl font-bold text-white tracking-wider">
    //       {project}
    //     </span>
    //     <br />
    //     <span className="text-white text-sm w-5/6">
    //       {description}
    //     </span>
    //     <div className="pt-2 text-center">
    //       <a href={demo}>
    //         <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
    //           Demo
    //         </button>
    //       </a>
    //       <a href={code}>
    //         <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
    //           Code
    //         </button>
    //       </a>
    //     </div>
    //   </div>
    //   <img className="absolute bottom-0 w-full rounded-t-md" src={img} alt={project} />
    // </div>

    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure><img src={img} alt={project} /></figure>
      <div className="card-body">
        <h2 className="card-title text-white">{project}</h2>
        <p className="text-white">{description}</p>
        <div className="card-actions justify-end">
          {/* <button className="btn btn-primary">Buy Now</button> */}
          <a href={demo}>
            <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
              Demo
            </button>
          </a>
          <a href={code}>
            <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>

    // <div className="card w-96 bg-base-100 shadow-xl">
    //   <figure className='h-auto max-h-50'><img src={img} alt={project} /></figure>
    //   <div className="p-4">
    //     <h2 className="card-title text-white">{project}</h2>
    //     <p className="text-white h-8">{description}</p>
    //     <div className="text-center">
    //       <a href={demo}>
    //         <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
    //           Demo
    //         </button>
    //       </a>
    //       <a href={code}>
    //         <button className="text-center rounded-lg px-4 py-2 m-2 bg-white text-gray-700 font-bold text-lg">
    //           Code
    //         </button>
    //       </a>
    //     </div>
    //   </div>
    // </div>

    // <div className="w-full rounded-md">
    //   <div
    //     style={{ backgroundImage: `url(${img})`, opacity: 0.25 }}
    //     className="shadow-lg shadow-[#040c16]  flex justify-center items-center mx-auto content-div"
    //   >
    //     {/* Hover Effects */}
    //     <div className=" px-2 mx-auto">
    //       <span className="text-2xl font-bold text-white tracking-wider">
    //         {project}
    //       </span>
    //       <br />
    //       <span className="text-white text-sm w-5/6">
    //         {description}
    //       </span>
    //       <div className="pt-8 text-center">
    //         <a href={demo}>
    //           <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
    //             Demo
    //           </button>
    //         </a>
    //         <a href={code}>
    //           <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
    //             Code
    //           </button>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}