import React, { useState, useEffect } from 'react';
import { Menu } from "@headlessui/react"
import CoursesBody from './components/container/CoursesBody';
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine, RiSearch2Line } from "react-icons/ri";
import { motion } from "framer-motion"
import { courses } from "./Data";
import Header from "../src/components/container/Header";
import About from "./assets/About.jpeg";
import { Link } from "react-router-dom";
import { Tab } from '@headlessui/react'
import { coursess } from './Data';



const CoursesS = () => {
    const className = (...classes) => classes.filter(Boolean).join(' ');

    const [course, setcourse] = useState(courses);
    const [subject, setsubject] = useState('Economics')
    // const [subjectss, setsubjectss] = useState("Economics")
    const [level, setlevel] = useState("Select Level")
    const [levelss, setlevelss] = useState([]);
    const [open, setopen] = useState(false);
    const [cour, setCour] = useState(coursess)


    // console.log(coursess.All)

    // useEffect(() => {
    //     const allLevels = course.map((course) => {
    //         return course.Level
    //     });
    //     const uniqueLevels = ['Select Level', ...new Set(allLevels)]
    //     setlevelss(uniqueLevels)
    // }, [])

    // const handleClick = () => { 
    //     const isDefault = (str) => {
    //         return str.split(' ').includes('Level')
    //     }

    //     const priceParse = parseInt(level)
    //     const newLevels = courses.filter((leveli) => {
    //         const levelNum = parseInt(leveli.Level);


    //         if (levelNum === priceParse) {
    //             return leveli
    //         }

    //         if (isDefault(level)) {
    //             return leveli
    //         }

    //         if (!isDefault(level)) {
    //             if (levelNum === priceParse ) {
    //                 return leveli
    //             }
    //         }
    //     })
    // }

    //     const levelling = [
    //         {
    //             value: "Select level",
    //         },
    //         {
    //             value: 100,
    //         },
    //         {
    //             value: 200,
    //         },
    //         {
    //             value: 300,
    //         }
    //     ]


    // const opening = () => {
    //     setopen(!open)
    // }


    return (
        <div className=''>
            <Header title="Our Courses" image={About}>
                Discover our wide range of economics courses and find the perfect one for your goals!
            </Header>
            {/* <div className=''>

    
        <div className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg'>
            <Menu as = 'div' className='w-full lg:max-w-[296px] cursor-pointer relative'>
                <Menu.Button onClick = {opening} className='flex h-[64px] items-center px-[18px] border rounded-lg w-full text-left'>
                <RiHome5Line  className='dropdown-icon-primary text-2xl mr-[18px] text-Teal' />
                <div>
                <div className='text-[15px] font-medium leading-tight'>{subject}</div>
                <div className='text-[13px]'>Select your Subject</div>
                </div>
                {
                    open ? (
                        <RiArrowDownSLine className='text-2xl text-Teal ml-auto' />
                    ) : (
                        <RiArrowUpSLine className='text-2xl text-Teal ml-auto' />
                    )
                }
                </Menu.Button>

                <Menu.Items className = "px-6 py-8 text-[15px] space-y-6 shadow-md bg-white absolute mx-auto w-full z-10 list-none rounded-b-lg">
                    <Menu.Item 
                    as = "li"
                    onClick = {() => setsubject("Economics")} 
                    className =" cursor-pointer hover:text-violet-700 transition">
                    Economics
                    </Menu.Item>
                 </Menu.Items>
            </Menu>


            <Menu as = 'div' className='w-full lg:max-w-[296px] cursor-pointer relative'>
                <Menu.Button onClick = {opening} className='flex h-[64px] items-center px-[18px] border rounded-lg w-full text-left'>
                <RiHome5Line  className='dropdown-icon-primary text-2xl mr-[18px] text-Teal' />
                <div>
                <div className='text-[15px] font-medium leading-tight'>{level}</div>
                <div className='text-[13px]'>Select Level</div>
                </div>
                {
                    open ? (
                        <RiArrowDownSLine className='text-2xl text-Teal ml-auto' />
                    ) : (
                        <RiArrowUpSLine className='text-2xl text-Teal ml-auto' />
                    )
                }
                </Menu.Button>

                <Menu.Items className = "px-6 py-8 text-[15px] space-y-6 shadow-md bg-white absolute mx-auto w-full z-10 list-none rounded-b-lg">
                {levelling.map((level, index) => {
                    return (
                        <Menu.Item 
                        as = "li" 
                        key = {index}
                        onClick = {() => setlevel(level.value)} 
                        className =" cursor-pointer hover:text-violet-700 transition">
                        {level.value}
                        </Menu.Item>
                    )
                    })}
                 </Menu.Items>
            </Menu>

            <button onClick = {() => handleClick()} className = "bg-Teal border-[1px] border-Teal hover:bg-transparent transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-3xl hover:text-Teal  ">
                <RiSearch2Line />
            </button>
        </div>
        <div className='section grid md:grid-cols-3 sm:grid-cols-2  gap-8'>
        {
            course.map((course) => {
                return (
                    <Link to = {`/courses/${course.id}`} key={course.id}>
                <CoursesBody className = ""  {...course} />
                    </Link>
                )
            })
        }
        </div>
    </div> */}
            <div className="section">
                <Tab.Group  >
                    <Tab.List className="flex shadow-lg gap-2 space-x-1 rounded-xl bg-blue-900/20 p-1">
                        {Object.keys(coursess).map((category) => (
                            <Tab
                                key={category}
                                className={({ selected }) =>
                                    className(
                                        'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none  focus:ring-2',
                                        selected
                                            ? 'bg-white shadow'
                                            : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                                    )
                                }
                            >
                                {category}
                            </Tab>
                        ))}
                    </Tab.List>
                    <Tab.Panels className=''>
                        {Object.values(coursess).map((posts, idx) => (
                            <Tab.Panel
                                key={idx}
                                className=""
                            >
                                <ul className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                                    {posts.map((post) => (
                                        <motion.li
                                            initial={{ y: 100 }}
                                            animate={{ y: 0 }}
                                            transition={{ duration: 0.5 }}
                                            key={post.id}
                                            className="rounded-xl mt-6   shadow-2xl  rounded-md"
                                        >
                                            <div key={course.id}>
                                                <CoursesBody className=""  {...post} />
                                            </div>

                                        </motion.li>
                                    ))}
                                </ul>
                            </Tab.Panel>
                        ))}
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
}

export default CoursesS