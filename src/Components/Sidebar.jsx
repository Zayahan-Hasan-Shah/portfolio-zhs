import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai"
import { AiOutlineHome } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { AiOutlineProject } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";


const Sidebar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <>
            <div>
                {
                    !nav ? (<AiOutlineMenu onClick={handleNav} size={30} color="#001b5e" className='fixed top-4 right-4 z-[99] md:hidden' />) : (<RxCross1 onClick={handleNav} size={30} color="#001b5e" className='fixed top-4 right-4 z-[99] md:hidden' />)
                }
                {
                    nav ? (
                        <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
                            <a href='#main' onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'> <AiOutlineHome size={20} color="#001b5e" /> <span className='pl-4'>Home</span>
                            </a>
                            <a href='#about' onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'> <GrProjects size={20} color="#001b5e" /> <span className='pl-4'>About</span>
                            </a>
                            <a href='#skill' onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'> <GiSkills size={20} color="#001b5e" /> <span className='pl-4'>Skills</span>
                            </a>
                            <a href='#project' onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'> <AiOutlineProject size={20} color="#001b5e" /> <span className='pl-4'>Project</span>
                            </a>
                            <a href='#conatct' onClick={handleNav} className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200'> <AiOutlineMail size={20} color="#001b5e" /> <span className='pl-4'>Contact</span>
                            </a>
                        </div>
                    )
                        : (
                            ''
                        )
                }

                <div className='md:block hidden fixed top-[25%] z-10'>
                    <div className='flex flex-col'>
                        <a href='#main' className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"><AiOutlineHome size={20}color="#001b5e" /></a>
                        <a href='#about' className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"><GrProjects size={20}color="#001b5e" /></a>
                        <a href='skill' className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"><GiSkills size={20}color="#001b5e" /></a>
                        <a href='#project' className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"><AiOutlineProject size={20} color="#001b5e"/></a>
                        <a href='#contact' className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300"><AiOutlineMail size={20} color="#001b5e"/></a>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Sidebar