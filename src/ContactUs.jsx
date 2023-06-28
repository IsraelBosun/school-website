import React from 'react'
import { AiOutlineWhatsApp, AiOutlineMail, AiFillYoutube, AiFillFacebook, AiOutlineTwitter  } from "react-icons/ai"
import { GoLocation } from "react-icons/go"
import { useForm, ValidationError } from '@formspree/react';


const ContactUs = () => {

  const [state, handleSubmit] = useForm("moqzowkz");


  const handleClick = (e) => {
    e.preventDefault()
  }
  return (
    <>
        <section className='section gap-9 grid md:grid-cols-2 sm:grid-cols-1'>
           <div className='p-4 flex flex-col gap-9 mx-auto'> 
            <h1 className='text-3xl uppercase font-bold'>Get in touch</h1>
            <div className='flex  flex-col gap-2'>
                <p>Interested in our classes?</p>
                <p>Have a question or a comment?</p>
                <p>Simply fill out the form and we will be in touch?</p>
            </div>
            <div className='flex flex-col  gap-2'>
                <a className='flex gap-3 items-center' target='_blank' href="https://wa.me/+2348127728361">
                <div className='flex items-center gap-3 py-4  font-bold'>
                    <AiOutlineWhatsApp className='text-Teal text-3xl' />
                </div>    
                     +234 812 7728361
                </a>
                <div className='flex items-center pl-2  gap-3 bg-Teal py-4  rounded-xl text-white fit-content '>
                    <a target='_blank' href="mailto:mogschoolofeconomics@gmail.com" className='flex justify-center items-center  gap-3'>
                    <AiOutlineMail className='text-white  text-3xl' />
                    <span className="text-center">mogschoolof<br/>economics@gmail.com </span>
                    
                    </a>
                </div>
                <div className='flex items-center gap-3 py-4  font-bold'>
                    <GoLocation className='text-Teal text-3xl' />
                    100% Online
                </div>
            </div>
            <div className='flex text-3xl  items-center gap-4 text-Teal '> 
                <AiFillYoutube />
                <AiFillFacebook />
                <AiOutlineTwitter />
            </div>
           </div>

           <div className='mt-5 bg-Solitude shadow-xl text-gray-500 opacity- p-8 rounded-3xl' >


<form className="max-w-md mx-auto">
      <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
      <input type="text" id="name" name="name" className="w-full px-4 py-2 mb-4 border rounded border-Teal outline-Teal"  />
      <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
      <div className="relative flex">
        <input type="email" id="email" name="email" className="w-full px-4 py-2 mb-4 border rounded border-Teal outline-Teal"  />
        {/* <AiOutlineMail className="absolute left-2  top-1 text-3xl  text-Teal" /> */}
      </div>
      <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
      <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 mb-4 border rounded border-Teal outline-Teal" placeholder='Write to us' />
      <button onClick={handleClick} type="submit" className=" bg-Teal text-white  px-4 py-2 rounded hover:bg-blue-600">Submit</button>
    </form>

           </div>
        </section>
    </>
  )
}

export default ContactUs