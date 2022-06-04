import React from "react";

export default function SkillCardCarousel({skill,img}) {
  return (
    <div className='shadow-md shadow-[#000000]'>
      <img className='w-20 mx-auto' src={img} alt={`${skill} icon`} />
      <p className='my-4'>{skill}</p>
    </div>
  )
}