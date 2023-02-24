import React from 'react'
import { Navbar, Home, About, Teacher, Contact, Courses, Footer} from "./components/index"

const FirstPage = () => {
  return (
    <div className="font-Poppins bg-Solitude">
    <Home />
    <About />
    <Courses />
    <Teacher />
    <Contact />
    </div>
  )
}

export default FirstPage