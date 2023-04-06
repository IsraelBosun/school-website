import React from 'react'
import { subjects } from "../src/Data"
import { useParams } from "react-router-dom"

const CourseDetails = () => {
    const { id } = useParams();
    console.log(id)

    const courses = subjects.find((course) => {
        return course.id === parseInt(id)
    })
  return (
    <div className='h-50 bg-red-500'>{courses.second}</div>
  )
}

export default CourseDetails