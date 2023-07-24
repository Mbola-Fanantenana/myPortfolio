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
import Docker from '../assets/docker.png'
import Figma from '../assets/figma.png'
import VirtualBox from '../assets/virtualbox.png'
import Trello from '../assets/trelloO.png'


const Skills = () => {
  return (
    <>
        <div name='skills w-full h-screen'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className=''>
                    <p className='text-4xl text-gray-600 font-semibold pb-2'>Skills</p>
                    <div className='w-20 h-[4px] bg-gradient-to-r from-[#F25F4C] to-fuchsia-500'></div>
                    <p className='py-4'>There are some technologies I've worded with</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-5 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#F88379] hover:scale-110 duration-500'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Html} alt="Html icon" />
                        <p className='my-4 text-gray-600 font-semibold'>HTML</p>
                    </div>
                    <div className='shadow-md shadow-[#F88379] hover:scale-110 duration-500'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Css} alt="Css icon" />
                        <p className='my-4 text-gray-600 font-semibold'>CSS</p>
                    </div>
                    <div className='shadow-md shadow-[#F88379] hover:scale-110 duration-500'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Javascript} alt="Javascript icon" />
                        <p className='my-4 text-gray-600 font-semibold'>JAVASCRIPT</p>
                    </div>
                    <div className='shadow-md shadow-[#F88379] hover:scale-110 duration-500'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={ReactJS} alt="ReactJS icon" />
                        <p className='my-4 text-gray-600 font-semibold'>REACT JS</p>
                    </div>
                    <div className='shadow-md shadow-[#F88379] hover:scale-110 duration-500'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Bootstrap} alt="Bootstrap icon" />
                        <p className='my-4 text-gray-600 font-semibold'>BOOTSTRAP</p>
                    </div>
                    <div className='shadow-md shadow-[#F88379] hover:scale-110 duration-500'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Java} alt="Java icon" />
                        <p className='my-4 text-gray-600 font-semibold'>JAVA</p>
                    </div>
                    <div className='shadow-md shadow-[#F88379] hover:scale-110 duration-500'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Spring} alt="Spring icon" />
                        <p className='my-4 text-gray-600 font-semibold'>SPRING</p>
                    </div>
                    <div className='shadow-md shadow-[#F88379] hover:scale-110 duration-500'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Hibernate} alt="Hibernate icon" />
                        <p className='my-4 text-gray-600 font-semibold'>HIBERNATE</p>
                    </div>
                    <div className='shadow-md shadow-[#F88379] hover:scale-110 duration-500'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Node} alt="Node icon" />
                        <p className='my-4 text-gray-600 font-semibold'>NODE</p>
                    </div>
                    <div className='shadow-md shadow-[#F88379] hover:scale-110 duration-500'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Mysql} alt="Mysql icon" />
                        <p className='my-4 text-gray-600 font-semibold'>MYSQL</p>
                    </div>
                    <div className='shadow-md shadow-[#F88379] hover:scale-110 duration-500'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Postgresql} alt="Postgresql icon" />
                        <p className='my-4 text-gray-600 font-semibold'>POSTGRESQL</p>
                    </div>
                    <div className='shadow-md shadow-[#F88379] hover:scale-110 duration-500'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Git} alt="Git icon" />
                        <p className='my-4 text-gray-600 font-semibold'>GIT</p>
                    </div>
                    <div className='shadow-md shadow-[#F88379] hover:scale-110 duration-500'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Docker} alt="Docker icon" />
                        <p className='my-4 text-gray-600 font-semibold'>DOCKER</p>
                    </div>
                    <div className='shadow-md shadow-[#F88379] hover:scale-110 duration-500'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={Figma} alt="Figma icon" />
                        <p className='my-4 text-gray-600 font-semibold'>FIGMA</p>
                    </div>
                    <div className='shadow-md shadow-[#F88379] hover:scale-110 duration-500'>
                        <img className='w-20 pt-4 mx-auto cursor-pointer' src={VirtualBox} alt="VirtualBox icon" />
                        <p className='my-4 text-gray-600 font-semibold'>VIRTUALBOX</p>
                    </div>
                    <div className='shadow-md shadow-[#F88379] hover:scale-110 duration-500'>
                        <img className='w-40 pt-4 mx-auto cursor-pointer' src={Trello} alt="Trello icon" />
                        <p className='my-4 text-gray-600 font-semibold'>TRELLO</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Skills