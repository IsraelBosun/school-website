import React from 'react'
import "./moreinfo.css"
import Bukola from "../../assets/Bukola.jpg"

const MoreInfo = () => {
  return (
    <div >
      <div className=' info h-[15rem] bg-red-100 w-full  py-[60px]'>
          <h1 className='text-Teal text-4xl text-center'>The MOG Story</h1>
          <h5 className='text-Teal text-2xl text-center mt-6'>We know Economics, in fact we wrote a book on it</h5>
      </div>
      <div className='bg-white-100 text-2xl w-5/6 mx-auto text-center my-9 '>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, sed? Tenetur nemo beatae atque explicabo aspernatur maiores culpa! Harum neque vel non facere, modi error voluptatibus dolore, dolores ab reprehenderit, quod dolor architecto consequatur tenetur quisquam. Ex dignissimos itaque aut consectetur similique doloribus minima ipsum quisquam! Id laboriosam commodi animi, tempore dolores ex voluptatem eum, modi at unde repellat iure accusantium veritatis minus. Ea esse natus voluptates fugiat! Maiores eveniet perferendis neque nulla commodi!
          </p>
      </div>
      <div className='bg-red-100  md:flex justify-center items-center gap-[4rem] mx-auto p-[3rem] '>
        <div className='w-auto'> 
          <img src={Bukola} alt="" /> 
          </div>
        <div>
          <h1 className='text-3xl text-center font-900'>Meet The Founder</h1>
          <p className='text-2xl mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, eius cumque odio ea eos unde facere sunt explicabo eligendi ex expedita mollitia sapiente porro temporibus ipsum rem itaque veniam minus quae iste at amet asperiores assumenda sit. Sint accusamus, neque cum repellat corporis et. Aspernatur corporis in non vero amet.</p>
        </div>
      </div>
    </div>
  )
}

export default MoreInfo