import React from 'react'
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai"

const CoursesBody = ({image, category, title, participants, rating, price, link}) => {
  return (
    <div className='w-max-[40px] p-4 shadow-lg min-w-[15rem] bg-white rounded-md'>
        <img src={image}   alt="courses" />
        <div className='mt-2 text-xs text-Teal'>{category}</div>
        <div className='text-sm mt-2 font-bold my-3'>{title}</div>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-'>
                <div className='bg-Solitude p-1 rounded-full'>
                    <AiOutlineUser className='text-Teal' />
                </div>
                <div className='text-sm ml-2 font-bold'>
                    {participants}
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='bg-Solitude p-1 rounded-full'>
                    <AiOutlineStar className='text-yellow' />
                </div>
                <div className='text-sm font-bold'>
                    {rating}
                </div>
            </div>
            {/* <div className='text-sm font-bold'>
                #{price}
            </div> */}
        </div>
        {/* <div className='flex items-center mt-6 justify-center'>
        <a href={link} target="_blank" rel="noopener noreferrer" className='border  hover:border-white  hover:border-radius-2xl hover:bg-Teal hover:text-white rounded-lg px-5 py-1'>Enroll</a>
        </div> */}
    </div>
  )
}

export default CoursesBody