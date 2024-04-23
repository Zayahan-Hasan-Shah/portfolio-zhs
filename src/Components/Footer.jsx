import React from 'react'


const Footer = () => {
    return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-1 md:py-4 md:text-2xl md:items-center  m-auto p-4  w-full bg-[#001b5e] text-white ">
            <div className="flex flex-col gap-4 text-center mt-2">
                <h1 className="text-4xl mb-2 ">Zayahan Hasan Shah</h1>
                <a href="mailto:zayahanshah.18@gmail.com" className="text-2xl">zayahanshah.18@gmail.com</a>
                <a href="tel:03327699137" className="text-2xl">(+92)332-7699137</a>
            </div>
            <div className="flex flex-col gap-4 text-center mt-2">
                <a href="#main" className="text-2xl">Home</a>
                <a href="#about" className="text-2xl">About</a>
                <a href="#skill" className="text-2xl">Skill </a>
                <a href="#projects" className="text-2xl">Projects</a>
                <a href="#contact" className="text-2xl">Contact</a>
            </div>
            <div className="flex flex-col gap-4 items-center mt-2">
                <a className="flex text-2xl gap-2" href="https://www.facebook.com/zayahan.shah" target="_blank">Facebook</a>
                <a className="flex text-2xl gap-2" href="https://www.instagram.com/zayahan_shah1807/" target="_blank">Instagram</a>
                <a className="flex text-2xl gap-2" href="https://www.linkedin.com/in/zayahan-hasan-shah-66a85823a/" target="_blank">LinkedIn</a>
                <a className="flex text-2xl gap-2" href="https://github.com/Zayahan-Hasan-Shah" target="_blank">Github</a>
            </div>
        </div>
    )
}

export default Footer