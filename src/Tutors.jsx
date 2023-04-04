import React from 'react'
import {tutors} from "./Data"
import About from "../src/assets/About.jpeg"
import Header from "../src/components/container/Header"
import Tutor from "../src/components/Tutor"
import { BsInstagram } from "react-icons/bs"
import { AiOutlineTwitter } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"

const Tutors = () => {
  return (
    <>
    <Header title= "Our Tutors" image={About}>
    Get to know our expert economics tutors and start learning with confidence today!
    </Header>
        <section className="trainers">
        <div className="section grid sm:grid-cols-2 xs:grid-cols-1 lg:grid-cols-3 gap-16">
          {
            tutors.map(({id, image, name, job, socials}) =>{
              return <Tutor key = {id} image={image} name = {name} job={job} socials ={
                [
                //   {icon: <BsInstagram />, link: socials[0]},
                  {icon: <AiOutlineTwitter />, link: socials[1]},
                  {icon: <FaFacebookF />, link: socials[2]},
                  {icon: <FaLinkedinIn />, link: socials[3]}
                ]
              } />
            })
          }
        </div>
      </section>
    </>
  )
}

export default Tutors