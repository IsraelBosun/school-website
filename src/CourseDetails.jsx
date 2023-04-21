import React, { useContext, useState } from 'react'
import { courses } from "../src/Data"
import { useParams } from "react-router-dom"

import { addToCart } from "../src/components/container/Counter"

import {Context} from "../src/components/container/StateContext"
import { useDispatch, useSelector } from "react-redux"

const CourseDetails = () => {
  const qty = 1
  const [clicked, setClicked] = useState(false)
  const { onAdd, setShowCart } = useContext(Context);

    const { id } = useParams();
    console.log(id)

    
  
    const coursesT = courses.find((course) => {
        return course.id === parseInt(id)
    })
    
    
    
    const { title, image, category, Level, details, price } = coursesT
    console.log(coursesT)

    const handleBuyNow = () => {
      onAdd(coursesT);

      setShowCart(true)
    }

    const handleClick = () => {
      onAdd(coursesT, qty)
      if (!clicked) {
        setClicked(true);
        onClick();
      }
    }

  return (
    <section className='section flex flex-col md:flex-row gap-9 '>
      <div className='flex-1'>
        <div className='max-w-[400px]'>
          <img className='bg-Teal p-3 rounded-md' src={image} alt="" />
        </div>
      </div>

      <div className='flex-1  '>
      <h1 className='text-2xl text-Teal font-bold'>{title}</h1>
      <div className=''>{category}</div>
      <div className='font-bold text-Teal'>{Level}L</div>
      <div className='mt-4 font-bold text-Teal'>Details</div>
      <div className=''>{details}</div>
      <div className='mt-3 text-3xl font-bold text-Teal'>{price}</div>
      <div className='mt-4'>
      <button onClick={handleClick} disabled = {clicked} className='px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm hover:text-Teal hover:bg-white border hover:border-Teal'>Add to Cart</button>
      <button onClick={handleBuyNow} className=' py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold hover:bg-Teal hover:text-white hover:border-none'>Buy Now</button>
      </div>
      </div>
      
    </section>
  )
}

export default CourseDetails