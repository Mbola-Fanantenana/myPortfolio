import React from 'react'
import Typed from 'react-typed'
import { HiArrowCircleRight } from "react-icons/hi";

const About = () => {
  return (
    <div name='about' className='w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#151515]'>
                Hi ! I'm
                <p className='text-4xl sm:text-6xl text-gray-600 font-semibold pb-4'>
                    <Typed strings={[' Mbola Fanantenana', " a Full Stack developer"]} typeSpeed={80} backSpeed={40} loop />
                </p> 
                <div className='w-32 h-[4px] bg-gradient-to-r from-[#F25F4C] to-fuchsia-500'></div>
                <p className='py-4 text-[#151515] max-w-[700px] text-justify'>
                    "Passionate about new technologies, I plunged into the IT field to explore
                    the possibilities it offers and to help shape the ever-changing digital world."
                </p>
                <div>
                    <button className='text-[#151515] group rounded-tl-lg rounded-br-lg border-2 border-gray-500 hover:border-[#F25F4C] px-6 py-3 my-2 flex items-center'>
                        Skills 
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowCircleRight className='ml-3'/>
                        </span>  
                    </button>
                </div>
            </p>
        </div>
    </div>
  )
}

export default About