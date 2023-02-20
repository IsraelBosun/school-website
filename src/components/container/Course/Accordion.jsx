import React, { useState } from 'react'
import { BsChevronDown } from "react-icons/bs"
import { motion, AnimatePresence } from "framer-motion"

const Accordion = ({ id, title }) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const handleClick = (id) => {
        setActiveIndex(id === activeIndex ? null : id)
    };

  return (
    <div className='pb-8'>
        <div className='flex items-center justify-between'>
        <div className='sm:text-xl text-base font-bold'>{title}</div>
        <BsChevronDown className={`${id === activeIndex ? "rotate-180" : "rotate-0"} cursor-pointer transition-all duration-300` } onClick = {() => handleClick(id)}/>
        </div>
        <AnimatePresence>
            {id === activeIndex && (
                <motion.div
                initial = {{ height: 0}}
                animate = {{ height: "auto" }}
                exit = {{ height: 0 }}
                transition = {{ duration: 0.3 }}
                style = {{overflow: "hidden" }}
                className = "pt-4"
                >
                    <p className='text-sm leading-7 text-gray'>
                    Our Economics online education classes are designed to provide university students with a comprehensive understanding of economic concepts and principles. Our courses cover a range of topics, from micro and macroeconomics to international trade and finance. Our instructors are experienced educators and industry professionals, committed to providing high-quality and engaging learning experiences. With flexible scheduling and accessible course materials, our classes are suitable for students of all levels of economic knowledge.
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
}

export default Accordion