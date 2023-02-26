import React from 'react'
import { motion } from "framer-motion"
import { data } from "../../Data"
import { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import "./contact.css"
import "swiper/css"
import "swiper/css/pagination"

const Contact = () => {
  return (
    <div className='section' id = "contact">


    <div className='testimonials__reviews '>
        <h5>Reviews from Students</h5>
        <h2>Testimonials</h2>

        <Swiper 
        modules = {[ Pagination ]}
        spaceBetween = {40}
        slidesPerView = {1}
        pagination = {{ clickable: true }}
        className='container testimonials__container' >
            {
              data.map(({ avatar, name, review, school }, index) => {
                return(
                  <SwiperSlide key={index} className ="testimonials__swiper text-sm ">
                      <div className='testimonials__swiper'>
                      <div className='client__avatar'>
                        <img src={avatar} alt="" />
                      </div>
                      <p className='testimonials__text'>{review}</p>
                      <div className='testimonials__nameschool'>
                        <div className = "testi__name">{name}</div>
                        <div className = "testi__school">{school}</div>
                      </div>
                      </div>
                  </SwiperSlide>
                )
              })
            }
        </Swiper>
      </div>

      <div className=' hail text-center max-w-[600px] mx-auto '>
        <div className='sm:text-3xl text-2xl font-bold mb-5'>
          Subscribe to Newsletter
        </div>
        <p className='text-sm leading-7 text-gray'>
        Never miss a beat in the world of Economics - subscribe to our newsletter and receive updates on our latest courses and learning resources.        </p>
        <motion.form
        initial = {{ scale: 0 }}
        whileInView = {{ scale: 1 }}
        trasition = {{ duration: 0.3 }}
        className ="mt-5 "
        action="">
          <input 
          type="text"
          placeholder='Enter Your Email Address'
          className='sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60 rounded-lg'
          />
          <button className='text-sm  text-white bg-Teal mt-3   sm:p-3 p-2 shadow-md font-bold rounded-r-lg'>
            Subscribe
          </button>
        </motion.form>
      </div>

      
    </div>
  )
}

export default Contact