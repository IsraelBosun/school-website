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
        <p className="text-center my-2 text-sm font-bold">First Semester</p>
        <ul className="mx-2 p-2 flex flex-col gap-3 border rounded-lg hover:bg-white hover:text-Teal text-xs">
          <li>{first}</li>
          <li>{second}</li>
          <li>{third}</li>
        </ul >
        <p className="text-center mt-7 py-2 text-sm font-bold">Second Semester</p>
        <ul className="mx-2 p-2  flex flex-col gap-3 border rounded-lg  hover:bg-white hover:text-Teal text-xs">
          <li>{forth}</li>
          <li>{fifth}</li>
        </ul>
            <div className=" mt-5 flex justify-center text-sm">
          {/* <button className=" bg-Teal text-white hover:bg-white hover:text-Teal border text-center px-6 py-2 mx-auto  max-w-full  rounded-md">{button}</button> */}
          </div>
          <p className="text-center text-[12px] font-bold "> NB: Each  Semester lasts for 3 months</p>
      </motion.div>
  )
}

export default Subjects