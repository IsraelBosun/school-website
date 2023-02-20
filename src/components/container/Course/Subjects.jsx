import React  from "react";
import { motion } from "framer-motion";


const Subjects = ({ level, first, second, third, forth, fifth, button }) => {

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      };
  return (
    <div className="bg-Teal py-1 text-white rounded-lg">
        <div className=" text-center text-3xl my-3">
          {level}
          
        </div>
        <ul className="p-3 flex flex-col gap-2 ">
          <li>{first}</li>
          <li>{second}</li>
          <li>{third}</li>
          <li>{forth}</li>
          <li>{fifth}</li>
           </ul >
            <div className="flex justify-center">
          <button className="bg-red-500 border text-center px-4 py-1 mx-auto m-3 max-w-full  rounded-md">{button}</button>
          </div>
      </div>
  )
}

export default Subjects