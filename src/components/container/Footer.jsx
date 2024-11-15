import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter, BsPinterest } from "react-icons/bs"
import {Link} from "react-router-dom"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <div
    initial = {{height: 0 }}
    whileInView = {{ height: "auto "}}
    transition = {{ duration: 1 }}
    className = "bg-Teal p-10"
    >
      <div className='grid md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1  gap-8 text-white text-center'>
        <div>
          <div className='font-bold mb-6'>Get Stated</div>
          <p className='text-sm leading-7'>
          Ready to jump in? Enroll in our courses today and start your journey towards mastering Economics.          </p>
        </div>
        <div>
          <div className='font-bold mb-6'>Services</div>
          <div className='flex flex-col gap-4' >
            <a href="" className='text-sm hover:underline'>Tutorials</a>
            <a href="" className='text-sm hover:underline'>Resources</a>
            <a href="" className='text-sm hover:underline'>Newsletter</a>
            <a href="" className='text-sm hover:underline'>Blog</a>
          </div>
        </div>
        <div>
          <div className='font-bold mb-6'>Company</div>
          <div className='flex flex-col gap-4'>
          <a href="" className='text-sm hover:underline'>Privacy Policy</a>
            <a href="" className='text-sm hover:underline'>Career</a>
            <a href="" className='text-sm hover:underline'>Sitemap</a>
            <a href="" className='text-sm hover:underline'>Terms & Condition</a>
          </div>
        </div>
        <div>
          <div className='font-bold mb-6'>Follow Us</div>
          <div className='text-sm mb-4'>
  <a href="mailto:mogschoolofeconomics@gmail.com">mogschoolofeconomics@gmail.com</a>
</div>

          <a href="tel:+2348127728361" className="text-sm">
  +234 812 772 8361
</a>

          <div className='flex items-center justify-center gap-4 mt-4 w-full' >
            <a href="" className='hover:scale-110 text-xl'><BsFacebook /></a>
            <a href="" className='hover:scale-110 text-xl'><BsInstagram /></a>
            <a href="" className='hover:scale-110 text-xl'><BsTwitter /></a>
            <Link to="testing" className='hover:scale-110 text-xl'><BsPinterest /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer