import React from 'react'
import { AiOutlineWhatsApp, AiOutlineMail, AiFillYoutube, AiFillFacebook, AiOutlineTwitter  } from "react-icons/ai"
import { GoLocation } from "react-icons/go"

const ContactUs = () => {
  return (
    <>
        <section className='section gap-9 grid md:grid-cols-2 sm:grid-cols-1'>
           <div className='flex flex-col gap-9 mx-auto'> 
            <h1 className='text-3xl uppercase font-bold'>Get in touch</h1>
            <div className='flex flex-col gap-2'>
                <p>Interested in our classes?</p>
                <p>Have a question or a comment?</p>
                <p>Simply fill out the form and we will be in touch?</p>
            </div>
            <div className='flex flex-col gap-2'>
                <div className='flex items-center gap-3 p-4 font-bold'>
                    <AiOutlineWhatsApp className='text-Teal text-3xl' />
                    +234 44 333 33
                </div>
                <div className='flex items-center gap-3 bg-Teal p-4 rounded-xl text-white fit-content '>
                    <AiOutlineMail className='text-white text-3xl' />
                    mogecons@gmail.com
                </div>
                <div className='flex items-center gap-3 p-4 font-bold'>
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

           <div className='mt-5 bg-Solitude shadow-md text-gray-500 opacity- p-8 rounded-3xl' >
            {/* Your Name
            <form action="" className='flex flex-col gap-3'>
                <input  type="text" />
                Email
                <input  type="email" />
                Message
                <textarea type="text" />
            </form> */}


<form className="max-w-md mx-auto">
      <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
      <input type="text" id="name" name="name" className="w-full px-4 py-2 mb-4 border rounded outline-Teal" />
      <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
      <div className="relative flex">
        <input type="email" id="email" name="email" className="w-full px-4 py-2 mb-4 border rounded"  />
        {/* <AiOutlineMail className="absolute left-2  top-1 text-3xl  text-Teal" /> */}
      </div>
      <label htmlFor="message" className="block mb-2 font-semibold">Message</label>
      <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 mb-4 border rounded" />
      <button type="submit" className=" bg-Teal text-white  px-4 py-2 rounded hover:bg-blue-600">Submit</button>
    </form>

           </div>
        </section>
    </>
  )
}

export default ContactUs