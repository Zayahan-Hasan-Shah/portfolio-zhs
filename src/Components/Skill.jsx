import React from 'react'

const Skill = () => {
    const Languages = [
        {
            lang: "HTML, CSS",
            prog: 80
        },
        {
            lang: "Javascript",
            prog: 85
        },
        {
            lang: "Python",
            prog: 80
        },
        {
            lang: "C++",
            prog: 60
        },
        {
            lang: "MYSQL",
            prog: 65
        },
    ]

    const framelib = [
        {
            fl: "React Js",
            prog: 80,
        },
        {
            fl: "Node Js",
            prog: 70,
        },
        {
            fl: "Express Js",
            prog: 70,
        },
        {
            fl: "Numpy ",
            prog: 65,
        }
    ]

    return (
        <>
            <div id="skill" className="max-w-full m-auto p-4 py-16">
                <h1 className="text-4xl font-bold text-center text-[#001b5e]">Skills</h1>
                <h2 className="text-2xl text-[#001b5e] mt-12 mx-16">Languages</h2>
                <div className="w-100 px-16 mt-4 grid lg:grid-cols-3 gap-10 md:grid-cols-2 sm:grid-cols-1">

                    {
                        Languages.map(item =>
                        <>
                        <div className='w-100 border-2 rounded-[10px] shadow-xl shadow-gray-400'>
                            <div className='m-4'>
                                <div className='flex justify-between'>
                                    <h4>{item.lang}</h4>
                                    <h4>{item.prog}%</h4>
                                </div>
                                <div className='w-full h-4 bg-gray-200 rounded-lg mt-2'>
                                    <div className='h-full bg-[#001b5e] rounded-lg' style={{width:`${item.prog}%`}}></div>
                                </div>
                            </div>
                        </div>
                        </>)
                    }
                </div>

                <h2 className="text-2xl text-[#001b5e] mt-12 mx-16">Frame Works / Libraries</h2>
                <div className="w-100 px-16 mt-4 grid lg:grid-cols-3 gap-10 md:grid-cols-2 sm:grid-cols-1">
                   {
                    framelib.map(item =>
                    <>
                    <div className='w-100 border-2 rounded-[10px] shadow-xl shadow-gray-400'>
                            <div className='m-4'>
                                <div className='flex justify-between'>
                                    <h4>{item.fl}</h4>
                                    <h4>{item.prog}%</h4>
                                </div>
                                <div className='w-full h-4 bg-gray-200 rounded-lg mt-2'>
                                    <div className='h-full bg-[#001b5e] rounded-lg' style={{width:`${item.prog}%`}}></div>
                                </div>
                            </div>
                        </div>
                    </>)
                   }
                </div>
            </div>
        </>
    )
}

export default Skill