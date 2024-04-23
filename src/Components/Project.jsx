import React from 'react'
import alex from "../assets/alex Emb.png"
import game from "../assets/game mani.png"
import priority from "../assets/mmc priority.png"

const Project = () => {
    const proj = [
        {
            name : "Alex Embriodery",
            img: alex,
            url: "https://alexembriodery.netlify.app/",
            lang: "React Js"
        },
        {
            name : "Game Mani",
            img: game,
            url: "https://gamemani.netlify.app/home",
            lang: "React Js"
        },
        {
            name : "MMC Priority",
            img: priority,
            url: "https://github.com/Zayahan-Hasan-Shah/mmc-priority-project",
            lang: "Python"
        },
    ]
    return (
        <>
            <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
                <h2 className="text-4xl font-bold text-center text-[#001b5e]">Project</h2>
                <h4 className='text-center text-2xl py-8'>Following are some of my projects which I've created by myself, relevant to my skills to pursue more in this field.</h4>
                <div className='grid sm:grid-cols-2 gap-12'>
                    {
                        proj.map(item =>
                            <>
                                <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#001b5e]">
                                    <img src={item.img} alt="/" className=" rounded-xl group-hover:opacity-10" />
                                    <div className="hidden group-hover:flex flex-col  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                                        <h3 className="text-2xl font-bold text-white tracking-wider text-center">{item.name}</h3>
                                        <p className="pb-4 pt-2 text-white text-center">{item.lang}</p>
                                        <a href={item.url} target="_blank" className="text-center p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">More Info</a>
                                    </div>
                                </div>
                            </>)
                    }
                </div>
            </div>
        </>
    )
}

export default Project