import React  from "react";
import { motion } from "framer-motion";

const Categories = ({ icon, category, view }) => {
  // const item = {
  //   hidden: { y: 20, opacity: 0 },
  //   visible: { y: 0, opacity: 1 },
  // };

  return (
    <div >
    <motion.div
      // variants={item}
      whileHover={{ scale: 1.1 }}
      className="flex items-center flex-col gap-4 bg-white p-8 rounded-md max-h-full overflow-y-auto"
    >
      <div className="text-4xl text-Teal">{icon}</div>
      <div>{category}</div>
      <div className="text-sm text-gray">
        {view}
      </div>
      </motion.div>
    
    </div>

  );
};

export default Categories;