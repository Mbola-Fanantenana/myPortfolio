import React from 'react'
import Typed from 'react-typed'
import { HiArrowCircleRight } from "react-icons/hi";

const About = () => {
  return (
    <div name='about' className='pt-52 pb-36 md:max-w-[900px] sm:max-w-[600px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        {/* Container */}
        <div className=''>
            <p className='text-gray-600 text-[14px] sm:text-[16px]'>
                Hi ! I'm
                <p className='text-2xl sm:text-5xl text-gray-600 font-semibold pb-4'>
                    <Typed strings={[' Mbola Fanantenana', " a Full Stack developer"]} typeSpeed={80} backSpeed={40} loop />
                </p> 
                <div className='w-[4rem] sm:w-[8rem] h-[4px] bg-gradient-to-r from-[#F25F4C] to-indigo-600'></div>
                <p className='text-[14px] sm:text-[16px] py-4 text-gray-600 max-w-[700px] text-justify'>
                    "Passionate about new technologies, I plunged into the IT field to explore
                    the possibilities it offers and to help shape the ever-changing digital world."
                </p>
                <div>
                    <button className='text-gray-600 font-medium group rounded-tl-lg rounded-br-lg border-2 border-[#F25F4C] hover:border-gray-600 px-6 py-2 sm:py-3 my-1 sm:my-2 flex items-center'>
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