import React, { useEffect, useState, useContext } from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import MobileNavLinks from "./MobileNavLinks";
import NavLink from "./NavLink";
import { Link } from "react-router-dom"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { motion } from "framer-motion";
import Cart from "../container/Cart"

import {Context} from "../container/StateContext"

const Navbar = () => {
  const { totalQuantities, showCart, setShowCart } = useContext(Context)

  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);
  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);


  return (
    <div
      className={`${
        active ? "shadow-lg bg-Solitude" : ""
      } sticky w-full top-0 left-0 z-20`}
    >
      <div>
        <div
          className={`${
            active ? "py-2 transition-all duration-300" : "py-4"
          } container  mx-auto flex items-center justify-between px-2`}
        >
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              className="text-3xl sm:hidden cursor-pointer"
              onClick={() => setToggle(true)}
            />
            <Link to = "/">
            <div className="text-xl text-Teal uppercase tracking-wide font-bold">
              MOG
            </div>
            </Link>
          </div>
          <div className="sm:flex items-center hidden">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
          </div>
          {/* <button className="relative py-3 px-6 font-bold text-Teal text-3xl">
            <AiOutlineShoppingCart 
            onClick={() => setShowCart(true)}
            />
            <div className="absolute top-0 right-4 w-4  h-4 rounded-full  text-xs bg-red-700 text-white ">{totalQuantities}</div>
          </button> */}
          {toggle && (
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center border border-red-500 items-center shadow-lg gap-8 py-8"
            >
              {navLinks.map((navLink) => {
                return (
                  <MobileNavLinks
                    key={navLink.id}
                    {...navLink}
                    setToggle={setToggle}
                  />
                );
              })}
              <HiX
                className="absolute right-12 top-12 text-3xl cursor-pointer"
                onClick={(prev) => setToggle(!prev)}
              />
            </motion.div>
          )}
           {showCart && (
            <motion.div
              initial={{ y: -500, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="fixed h-full w-96 h-screen overflow-y-scroll top-0 right-0 z-20 bg-Solitude   shadow-lg  p-12"
            >

                {showCart && <Cart />}

              {/* <HiX
                className="absolute left-12 top-12 text-3xl cursor-pointer"
                onClick={() => setShowCart(!showCart)}
              /> */}
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;













// import React, { useState, useEffect } from 'react'
// import { navLinks} from "../../Data"
// import {HiMenuAlt1, HiX} from "react-icons/hi";
// import MobileNavLinks from "./NavLink"
// import NavLink from './NavLink';
// import { motion } from "framer-motion";

// const Navbar = () => {
//   const [toggle, setToggle] = useState(false);
//   const [active, setActive] = useState(null)
//   useEffect(() => {
//       const scrollActive = () => {
//         setActive(window.scrollY > 20 );
//       }
//       window.addEventListener("scroll", scrollActive);
//       return () => window.removeEventListener("scroll", scrollActive)
//       }, [active]);
 
//   return (
//     <div className={`${active ? "shadow-lg bg-Solitude" : ""} fixed w-full top-0 left-0 z-20`}>
//       <div>
//         <div className={`${active ? "py-2 transition-all duration-300" :"py-4"} container py-4 mx-auto flex items-center justify-between px-2`}>
//           <div className='flex items-center gap-4'>
//             <HiMenuAlt1 className='text-3xl sm:hidden cursor-pointer' onClick={() => setToggle(true)}/>
//             <div className='text-xl text-Teal uppercase tracking-wide font-bold'>
//                 Skillex
//             </div>
//         </div>
//         <div className = "sm:flex flex items-center hidden">
//           {navLinks.map((cat) => {
//             return <NavLink key = {cat.id} {... cat} />;
//           })}
//         </div>
//         <button className='py-3 px-6 font-bold text-sm border border-solid rounded-lg rounded-gray'>Sign Up</button>
//         {toggle && (
//           <motion.div
//           initial = {{ x: -500, opacity: 0 }}
//           animate = {{ x: 0, opacity: 1}}
//           transition = {{ duration: 0.3 }}
//           className='fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8'>
//           {navLinks.map(navLink => {
//            return (
//            <MobileNavLinks 
//            key = {navLink.id}
//             {... navLink} 
//             setToggle = {setToggle}
//              />
//               );
//           })}
//           <HiX className='absolute right-12 top-12 text-3xl cursor-pointer' onClick = {(prev)=> setToggle(!prev)}/>
//           </motion.div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar