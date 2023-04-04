import React from 'react'
import Godwin from "../../assets/Godwin1.jpeg"

const MoreInfo = () => {
  return (
    <div >
      <div className=' info h-[10rem] bg-Teal text-white w-full  py-[60px]'>
          <h1 className='text-white font-bold sm:text-[1.875rem] text-[1.5rem] text-center'>The MOG Story</h1>
          <h5 className='text-sm text-center mt-4'>Our Modus Operandi</h5>
      </div>
      <div className='bg-white-400 text-sm   font-bold leading-7 w-5/6 mx-auto text-justify my-9 '>
        <p className = "mt-5 font-bold">
       <span className='text-5xl'>W</span>elcome to our online Economics class, where learning is made easy, convenient, and accessible from anywhere in the world. Our classes are designed to provide you with the best Economics education that will help you understand the concept you're taught in school, how to understand it deeply and pass exams successfully.
          </p>
          <p className = "mt-5 font-bold">
          Our courses are taught by expert tutors who are highly experienced in the field of Economics. We use a combination of lectures, discussions, and interactive sessions to ensure that you get the most out of your learning experience. Our classes are available on-demand, which means you can learn at your own pace and on your own schedule.
          </p>
          <p className = "mt-5 font-bold">
          As a paid student, you will get access to our exclusive YouTube page where our tutors post relevant videos for the courses. These videos cover a wide range of topics, from the basic concepts of Economics to  more advanced principles. They are designed to help you understand complex ideas in a simple and easy-to-understand way.
          </p >
          <p className = "mt-5 font-bold">
          You will also get access to our WhatsApp group, where you can interact with other students and our tutors. This is a great way to ask questions, discuss course materials, and get feedback on your work. You will also receive regular tests and to-dos that will help you track your progress and stay on top of your coursework.
          </p>
          <p className = "mt-5 font-bold">
          At our Economics class, we believe that everyone should have access to quality education, regardless of their location or financial situation. That's why we offer affordable prices and flexible payment options to make our courses accessible to everyone.
          </p>
          <p className = "mt-5 font-bold">
          So if you're looking to improve your understanding of Economics, enhance your career prospects, or simply want to learn something new, join our Economics class today and take your first step towards a brighter future!
          </p>
          
      </div>
      <div className='bg-white text-Teal  md:flex justify-center items-center gap-[4rem] mx-auto p-[3rem] '>
        <div className='w-50 mx-auto'> 

          <img src={Godwin} width = {400} height= {300} alt="" /> 
          </div>
        <div>
          <h1 className=' mt-5 sm:text-[1.875rem] text-[1.5rem] text-center font-900'>Meet The Founder</h1>
          <p className='text-sm  text-center leading-7 font-bold mt-6'>Mr. Oluwole Godwin, who brings a wealth of knowledge and experience to our Economics class is a graduate of the prestigious University of Ibadan, where he studied Economics and graduated with honors. Mr. Godwin is a skilled and engaging teacher who uses a variety of teaching methods to ensure that his students understand the material. He is dedicated to his students and goes above and beyond to help them succeed.


          </p>
          <p className='text-sm  text-center leading-7 font-bold font-bold mt-6'>We are proud to have Mr. Godwin as our head tutor, and we are confident that his expertise and dedication will help our students achieve their goals and succeed in their Economics studies.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoreInfo