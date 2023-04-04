import React from 'react'

const Header = ({ title, image, children}) => {
  return (
    <header className=" h-80 overflow-hidden border-black-400">
    <div className="w-full h-full relative grid place-items-center">
        <div className="absolute w-full ">
            <img src={image} className ="brightness-50" alt="header background image" />
        </div> 
        <div className="absolute flex flex-col text-center gap-4 text-white">
            <h2 className='font-bold text-2xl uppercase'>{title}</h2>
            <p className='px-3'>{children}</p>
        </div>
    </div>
</header>
  )
}

export default Header