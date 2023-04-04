import React from 'react'

const Tutor = ({ image, name, job, socials }) => {
  return (
    <div className='bg-Teal text-white border-[1px] border-Teal  text-center p-[15px] hover:text-Teal  transition hover:bg-transparent duration-500  rounded-tr-3xl rounded-bl-3xl hover:bg-gray-500'>
        <div className="rounded-tr-3xl rounded-bl-3xl  overflow-hidden">
            <img src={image} alt={name} />
        </div>
        <div className='mt-4 p-3'>
        <h3 className='font-bold'>{name}</h3>
        <p className=' '>{job}</p>
        </div>
        <div className="flex gap-6 py-5  justify-center items-center ">
            {
                socials.map(({icon, link}, index) =>{
                    return <a key={index} href={link} target = "_blank" rel = "noreferrer noopener" className='border-[1px] bg-Teal text-white text-[18px] rounded-md p-[4px]'>{icon}</a>
                })
            }
        </div>
    </div>
  )
}

export default Tutor