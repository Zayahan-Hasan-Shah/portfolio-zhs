import React from 'react'
import pic from "../assets/personal-pic.jpeg"
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <>
      <div id='main' className=' h-screen flex justify-center items-center '>

        <div className='w-[50%]'>
          <div className=" rounded overflow-hidden shadow-lg shadow-gray-400 top-2">
            <div className='m-4 flex justify-center items-center'>
              <img className="lg:h-[400px] rounded-md md:h-[370px]" src={pic} alt="Sunset in the mountains" />
            </div>
            <div className="px-6 py-4 ">
              <h2 className="font-bold text-2xl text-[#001b5e] text-gray-800 md:text-3xl lg:text-4xl xl:text-5xl text-center">I'm Zayahan Hasan Shah</h2>
              <h2 className=' w-full text-2xl lg:text-3xl text-center'>I'm a
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    
                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                    'Frontend Developer',
                    2000,
                    'React Developer',
                  ]}
                  wrapper="div"
                  speed={50}
                  style={{  paddingLeft: '5px', maxWidth:'100%' }}
                  repeat={Infinity}
                />
              </h2>
              <div className='flex justify-center mt-4 space-x-4 md:space-x-6 lg:space-x-8'>
                <a href="https://www.facebook.com/zayahan.shah" target="_blank"><FaFacebook size={30} color='#001b5e' /></a>
                <a href="https://github.com/Zayahan-Hasan-Shah" target='_blank'><FaGithub size={30} color='#001b5e' /></a>
                <a href="https://www.instagram.com/zayahan_shah1807/" target="_blank"><FaInstagramSquare size={30} color='#001b5e' /></a>
                <a href='https://www.linkedin.com/in/zayahan-hasan-shah-66a85823a/' target="_blank"><FaLinkedinIn size={30} color='#001b5e' /></a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}

export default Main