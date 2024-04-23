import React from 'react'
import { HiOutlineDownload } from "react-icons/hi";
import resume from "../assets/ZAYAHAN HASAN SHAH resume.pdf"

const About = () => {
    return (
        <>
            <div id="about" className="max-w-full   m-auto p-4 py-16">
                <h1 className="text-4xl font-bold text-center text-[#001b5e]">About</h1>
                <div className=" w-full  mt-4 grid gap-10 lg:grid-cols-2 sm:grid-cols-1 ">
                    <div className="md:w-full mx-16 w-50"><div className="flex pt-[4px]">
                        <h2 className="text-[#3652AD] text-2xl font-light-500 mb-[20px]">Education</h2>
                        <span className="w-[80px] h-[2px] rounded-lg ml-[2px] mt-[19px] bg-[#3652AD] inline"></span>
                    </div>
                        <ol className=" w-full flex flex-col  md:flex-row relative border-l border-[#3652AD] border-200">
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-[#3652AD] bg-200 rounded-full mt-1.5 -left-1.5 border-[#3652AD]">
                                </div>
                                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-sm md:text-md">
                                    <span className=" inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md"> University</span>
                                    <div>
                                        <span className=" my-1 text-sm font-normal leading-none text-[#132043]-800">2021- present </span>
                                        <span className="text-lg font-semibold text-[#0015be]"> University Of Karachi <br />
                                        </span>
                                        <span className="my-2 font-normal text-base text-stone-600"> BSCS</span>
                                    </div>
                                </p>
                            </li>
                        </ol>
                        <ol className=" w-full flex flex-col  md:flex-row relative border-l border-[#3652AD] border-200">
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-[#3652AD] bg-200 rounded-full mt-1.5 -left-1.5 border-[#3652AD]">
                                </div>
                                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-sm md:text-md">
                                    <span className=" inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md"> College</span>
                                    <div>
                                        <span className=" my-1 text-sm font-normal leading-none text-[#132043]-800">2018-2020 </span>
                                        <span className="text-lg font-semibold text-[#0015be]"> Govt Degree Boys No. 1 Gulistan-e-Jauhar <br />
                                        </span>
                                        <span className="my-2 font-normal text-base text-stone-600"> Pre-Engineering</span>
                                    </div>
                                </p>
                            </li>
                        </ol>
                        <ol className=" w-full flex flex-col  md:flex-row relative border-l border-[#3652AD] border-200">
                            <li className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-[#3652AD] bg-200 rounded-full mt-1.5 -left-1.5 border-[#3652AD]"></div>
                                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-sm md:text-md">
                                    <span className=" inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md"> School</span>
                                    <div>
                                        <span className=" my-1 text-sm font-normal leading-none text-[#132043]-800">2018 </span><span className="text-lg font-semibold text-[#0015be]"> The Educators <br />
                                        </span>
                                        <span className="my-2 font-normal text-base text-stone-600"> Science Group</span>
                                    </div>
                                </p>
                            </li>
                        </ol>
                    </div>
                    <div className=" mx-16 w-50">
                        <div className="flex pt-[4px]">
                            <h2 className="text-[#3652AD] text-2xl font-light-500 mb-[20px] mt-2 mx-2">Summary</h2>
                            <span className="w-[80px] h-[2px] rounded-lg ml-[0px] mt-[29px] bg-[#3652AD] inline"></span>
                        </div>
                        <div className="w-full px-1">
                            <p className="text-justify text-700 text-[#001b5e]">I'm a focused Computer Science student currently attending University of Karachi, Aiming to leverage a proven knowledge of web  development, programming, and data handling skill to successfully fill the IT role. Frequently praised as hard-working by my peers, I'm always focused to achieve my goals.</p>
                        </div>
                        <div className="mt-4 md:w[100%] lg:w-[60%]  bg-[#132043]  rounded-md">
                            <a href={resume} download  className="w-full inline-flex p-0 justify-center items-center text-white text-2xl ">
                                <HiOutlineDownload marginleft="10px" size={30} /> <h4 className='ml-2'>Download resume</h4></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About