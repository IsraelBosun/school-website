import React  from "react";
import { motion } from "framer-motion";


const Subjects = ({ level, first, second, third, forth, fifth, button }) => {

    // const item = {
    //     hidden: { y: 20, opacity: 0 },
    //     visible: { y: 0, opacity: 1 },
    //   };
  return (
    <motion.div 
    whileHover={{ scale: 1.1 }}
    className="bg-white py-1 text-Teal rounded-lg">
        <div className=" text-center text-2xl my-3">
          {level}
          
        </div>
        <p className="text-center my-2">First Semester</p>
        <ul className="mx-1 p-2 flex flex-col gap-3 border rounded-lg bg-Teal text-white hover:bg-white hover:text-Teal">
          <li>{first}</li>
          <li>{second}</li>
        </ul >
        <p className="text-center mt-7 py-2">Second Semester</p>
        <ul className="mx-1 p-2 pt-8 flex flex-col gap-3 border rounded-lg bg-Teal text-white hover:bg-white hover:text-Teal">
          <li>{third}</li>
          <li>{forth}</li>
          <li>{fifth}</li>
        </ul>
            <div className="flex justify-center">
          <button className=" bg-Teal text-white hover:bg-white hover:text-Teal border text-center px-4 py-1 mx-auto m-3 max-w-full  rounded-md">{button}</button>
          </div>
      </motion.div>
  )
}

export default Subjects