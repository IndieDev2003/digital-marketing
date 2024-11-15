// import React from 'react'

import search from '../assets/search.svg'
import speaker from '../assets/speaker.svg'
import monitor from '../assets/monitor.svg'
import note from '../assets/note.svg'

const Services = () => {
  return (
    <div className="h-[50vh] w-full flex flex-col items-center justify-center mt-32 mb-20">
      <h2 className="text-4xl font-semibold">We Provide The Best <span className="text-orange-500">Services</span></h2>
      <p className="text-center mt-2 text-gray-700">Let us unleash the full potential of your bussiness <br /> with our data-driven startegies.</p>
      <div className="relative grid grid-cols-4 gap-10 mt-10">
        {/* SEO/SEM */}
        <div className="relative flex flex-col min-h-20 w-[250px] bg-white border-2 drop-shadow-xl backdrop-blur-xl shadow-xl overflow-hidden rounded-xl">
          <img src={search} className='object-fill  h-20 px-7 w-[40%]  bg-yellow-300 rounded-ee-3xl rounded-es-xl ' alt="" />
          <h3 className='pl-3 text-xl font-semibold mt-2'>Seo/Sem</h3>
          <p className='pl-3 pb-4 text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit assumenda itaque voluptates ipsam neque cupiditate.</p>
        </div>
        {/* Marketing */}
        <div className="relative flex flex-col min-h-20 w-[250px] bg-white border-2 drop-shadow-xl backdrop-blur-xl shadow-xl overflow-hidden rounded-xl">
          <img src={speaker} className='object-fill  h-20 px-7 w-[40%]  bg-green-400 rounded-ee-3xl rounded-es-xl ' alt="" />
          <h3 className='pl-3 text-xl font-semibold mt-2'>Marketing</h3>
          <p className='pl-3 pb-4 text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit assumenda itaque voluptates ipsam neque cupiditate.</p>
        </div>
        {/* Viral Campaign */}
        <div className="relative flex flex-col min-h-20 w-[250px] bg-white border-2 drop-shadow-xl backdrop-blur-xl shadow-xl overflow-hidden rounded-xl">
          <img src={monitor} className='object-fill  h-20 px-7 w-[40%]  bg-purple-500 rounded-ee-3xl rounded-es-xl ' alt="" />
          <h3 className='pl-3 text-xl font-semibold mt-2'>Viral Campaign</h3>
          <p className='pl-3 pb-4 text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit assumenda itaque voluptates ipsam neque cupiditate.</p>
        </div>
        {/* Others */}
        <div className="relative flex flex-col min-h-20 w-[250px] bg-white border-2 drop-shadow-xl backdrop-blur-xl shadow-xl overflow-hidden rounded-xl">
          <img src={note} className='object-fill  h-20 px-7 w-[40%]  bg-red-500 rounded-ee-3xl rounded-es-xl ' alt="" />
          <h3 className='pl-3 text-xl font-semibold mt-2'>Others</h3>
          <p className='pl-3 pb-4 text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit assumenda itaque voluptates ipsam neque cupiditate.</p>
        </div>
        
        
      </div>
    </div>
  )
}

export default Services