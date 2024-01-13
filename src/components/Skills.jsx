import React from 'react'
import Bootstrap from '../assets/bootstrap.png'
import Html from '../assets/html.png'
import Css from '../assets/css.png'
import Javascript from '../assets/js.png'
import ReactJS from '../assets/react.png'
import Java from '../assets/java.png'
import Spring from '../assets/spring.png'
import Hibernate from '../assets/hibernate.png'
import Node from '../assets/nodejs.png'
import Mysql from '../assets/mysql.png'
import Postgresql from '../assets/postgresql.png'
import Git from '../assets/gitt.png'
import Tailwind from '../assets/tailwind.png'
import Figma from '../assets/figma.png'
import VirtualBox from '../assets/virtualbox.png'


const Skills = () => {
  return (
    <>
        <div name='skills'>
            {/* Container */}
            <div className='md:max-w-[900px] sm:max-w-[600px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className=''>
                    <p className='pb-2 text-2xl font-semibold text-gray-600 sm:text-4xl'>Skills</p>
                    <div className='w-10 sm:w-20 h-[4px] bg-gradient-to-r from-[#F25F4C] to-indigo-600'></div>
                    <p className='py-4 text-[14px] text-gray-600'>There are some technologies I've worked with :</p>
                </div>

                <div className='grid w-full grid-cols-2 gap-3 py-2 text-center md:grid-cols-5 sm:py-8'>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Html} alt="Html icon" />
                        <p className='my-4 font-semibold text-gray-600'>HTML 5</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Css} alt="Css icon" />
                        <p className='my-4 font-semibold text-gray-600'>CSS 3</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Javascript} alt="Javascript icon" />
                        <p className='my-4 font-semibold text-gray-600'>JAVASCRIPT</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={ReactJS} alt="ReactJS icon" />
                        <p className='my-4 font-semibold text-gray-600'>REACT JS</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-6 mx-auto cursor-pointer' src={Bootstrap} alt="Bootstrap icon" />
                        <p className='my-4 font-semibold text-gray-600'>BOOTSTRAP</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-8 mx-auto cursor-pointer' src={Tailwind} alt="Bootstrap icon" />
                        <p className='my-4 mt-8 font-semibold text-gray-600'>TAILWIND</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Java} alt="Java icon" />
                        <p className='my-4 font-semibold text-gray-600'>JAVA</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-6 mx-auto cursor-pointer' src={Spring} alt="Spring icon" />
                        <p className='my-4 font-semibold text-gray-600'>SPRING</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-8 mx-auto cursor-pointer' src={Hibernate} alt="Hibernate icon" />
                        <p className='my-4 mt-8 font-semibold text-gray-600'>HIBERNATE</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Node} alt="Node icon" />
                        <p className='my-4 font-semibold text-gray-600'>NODE</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-8 mx-auto cursor-pointer' src={Mysql} alt="Mysql icon" />
                        <p className='my-4 mt-8 font-semibold text-gray-600'>MYSQL</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Postgresql} alt="Postgresql icon" />
                        <p className='my-4 font-semibold text-gray-600'>POSTGRESQL</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Git} alt="Git icon" />
                        <p className='my-4 font-semibold text-gray-600'>GIT</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Figma} alt="Figma icon" />
                        <p className='my-4 font-semibold text-gray-600'>FIGMA</p>
                    </div>
                    <div className='duration-500 shadow-md hover:scale-110'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={VirtualBox} alt="VirtualBox icon" />
                        <p className='my-4 font-semibold text-gray-600'>VIRTUALBOX</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Skills