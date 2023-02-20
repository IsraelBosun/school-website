import React  from "react";
import { motion } from "framer-motion";

const Categories = ({ icon, category, view, level, first, second, third, forth, fifth, button }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div >
    <motion.div
      variants={item}
      whileHover={{ scale: 1.1 }}
      className="flex items-center flex-col gap-4 bg-white p-8 rounded-md max-h-full overflow-y-auto"
    >
      <div className="text-4xl text-Teal">{icon}</div>
      <div>{category}</div>
      <div className="text-sm text-gray">
        {view}
      </div>
      </motion.div>
      <div className="bg-Teal py-1 text-white rounded-lg">
        <div className=" text-center text-3xl my-3">
          {level}
          
        </div>
        <ul className="p-3 flex flex-col gap-4 text-center capitalize">
          <li>{first}</li>
          <li>{second}</li>
          <li>{third}</li>
          <li>{forth}</li>
          <li className="invisible">{fifth}</li>
           </ul >
            <div className="flex justify-center">
          <button className="bg-white-500 border text-center px-6 py-3 mx-auto m-3 max-w-full  rounded-md active:bg-red-500">{button}</button>
          </div>
      </div>
    
    </div>

  );
};

export default Categories;