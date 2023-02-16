import React from 'react'
import { motion } from "framer-motion"

const Contact = () => {
  return (
    <div className='section' id = "contact">
      <div className='text-center max-w-[600px] mx-auto'>
        <div className='sn:text-3xl text-2xl font-bold mb-5'>
          Subscribe to Newsletter
        </div>
        <p className='text-sm leading-7 text-gray'>
        Never miss a beat in the world of economics - subscribe to our newsletter and receive updates on our latest courses and learning resources.        </p>
        <motion.form
        initial = {{ scale: 0 }}
        whileInView = {{ scale: 1 }}
        trasition = {{ duration: 0.3 }}
        className ="mt-5"
        action="">
          <input 
          type="text"
          placeholder='Enter Your Email Address'
          className='sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60'
          />
          <button className='text-sm text-white bg-Teal  sm:p-3 p-2 shadow-md font-bold'>
            Subscribe
          </button>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact