import React from 'react'
import about from "../../assets/About.jpeg"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div className='section'>
      <div className='grid md:grid-cols-2 gap-8 place-items-center'>
        <div className='border-[3px] border-solid border-Teal rounded-lg'>
          <img src={about} alt="" className='p-4' />
        </div>
        <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-5'>
          We provide the <br /> best <span className='text-Teal'>online Economics Courses</span>
          <p className='text-sm text-gray leading-7'>
          Our online Economics courses are designed to help university students excel in their coursework by providing a strong foundation in fundamental concepts and practical applications.
            </p>
            <Link to = "/MoreInfo">
            <button className='mt-9 py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold hover:bg-Teal hover:text-white hover:border-none'>
              Know More
            </button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default About