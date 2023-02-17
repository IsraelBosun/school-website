import React from 'react'
import { categories } from "../../../Data"
import { courses } from "../../../Data"
import Categories from "./Categories"
import Course from "./Course"
import { motion } from "framer-motion"

const Courses = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChilden: 0.2,
      },
    },
  };

  return (
    <div className='section' id = "courses">
      <div className='text-center'>
        <div className='sm:text-3xl text-2xl font-bold mb-5'>
          Our Top <span className='text-Teal'>Categories</span>
        </div>
        <p className='text-sm text-gray leading-7 max-width-[700px] mx-auto'>
        Our Economics tutorial website offers a wide range of top categories to choose from, including macroeconomics, microeconomics, finance, international trade, and economic history       
         </p>
      </div>
      <motion.div
      variants = {container}how 
      initial = "hidden"
      whileInView="visible"
      className='grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8'>
        {categories.map(category => {
          return <Categories key = {category.id} {... category} />
        })}
      </motion.div>
      <div className='text-xl font-bold mt-32'>Most Popular Courses</div>
      <div className='mt-12 overflow-x-hidden w-full  relative'>
        <div className='flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide'>
          {courses.map(course => {
            return <Course key = {course.id} {... course} />
          })}
        </div>
      </div>
    </div>
  )
}

export default Courses