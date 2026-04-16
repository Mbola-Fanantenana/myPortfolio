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
                    <p className='pb-4 text-2xl font-semibold text-gray-600 sm:text-5xl'>
                        <Typed strings={[' Mbola Fanantenana', " a Java Software Engineer / Backend & APIs Specialist"]} typeSpeed={80} backSpeed={40} loop />
                    </p>
                    <div className='w-[4rem] sm:w-[8rem] h-[4px] bg-gradient-to-r from-[#F25F4C] to-indigo-600'></div>
                    <p className='text-[16px] sm:text-[16px] py-4 text-gray-600 max-w-[700px] text-justify'>
                        "Java Software Engineer (Master's degree) with 2 years of experience in the telecommunications industry. Expert in reactive backend architectures
                        and data flow management. Agile-oriented, I combine technical rigor with the deployment of modern solutions."
                    </p>
                    <div>
                        <a href='https://drive.google.com/file/d/16rjBasLNJVtcBXMRhYUgvUVogYOsDCM2/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
                            <button className='text-gray-600 font-medium group rounded-tl-lg rounded-br-lg border-2 border-[#F25F4C] hover:border-gray-600 px-6 py-2 sm:py-3 my-1 sm:my-2 flex items-center'>
                                Download resume
                                <span className='duration-300 group-hover:rotate-90'>
                                    <HiArrowCircleRight className='ml-3' />
                                </span>
                            </button>
                        </a>
                    </div>
                </p>
            </div>
        </div>
    )
}

export default About