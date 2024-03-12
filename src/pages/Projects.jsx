import React from 'react'
import WordImg from '../assets/docker.png'
import NodeImg from '../assets/nodejs.png'
import FigmaImg from '../assets/figma.png'

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen pt-4 0'>
        <div className='md:max-w-[1000px] sm:max-w-sm mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl text-gray-600 font-semibold pb-2'>Works</p>
                <div className='w-20 h-[4px] bg-gradient-to-r from-[#F25F4C] to-fuchsia-500'></div>
            </div>

            {/*Container*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${WordImg})`}}
                className='shadow-lg shadow-[#151515] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-[#151515] font-bold tracking-wider'>
                            React JS 
                        </span>
                        <div className='pt-2 text-center'>
                            <a href="">
                                <button className='text-center text-[#151515] rounded-lg px-4 py-2 m-2 border-2 border-[#F25F4C] font-medium text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center text-[#151515] rounded-lg px-4 py-2 m-2 border-2 border-[#F25F4C] font-medium text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${NodeImg})`}}
                className='shadow-lg shadow-[#151515] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-[#151515] font-bold tracking-wider'>
                            React JS 
                        </span>
                        <div className='pt-2 text-center'>
                            <a href="">
                                <button className='text-center text-[#151515] rounded-lg px-4 py-2 m-2 border-2 border-[#F25F4C] font-medium text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center text-[#151515] rounded-lg px-4 py-2 m-2 border-2 border-[#F25F4C] font-medium text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${FigmaImg})`}}
                className='shadow-lg shadow-[#151515] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-[#151515] font-bold tracking-wider'>
                            React JS 
                        </span>
                        <div className='pt-2 text-center'>
                            <a href="">
                                <button className='text-center text-[#151515] rounded-lg px-4 py-2 m-2 border-2 border-[#F25F4C] font-medium text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center text-[#151515] rounded-lg px-4 py-2 m-2 border-2 border-[#F25F4C] font-medium text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/*Grid Item*/}
                <div style={{backgroundImage: `url(${WordImg})`}}
                className='shadow-lg shadow-[#151515] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-[#151515] font-bold tracking-wider'>
                            React JS 
                        </span>
                        <div className='pt-2 text-center'>
                            <a href="">
                                <button className='text-center text-[#151515] rounded-lg px-4 py-2 m-2 border-2 border-[#F25F4C] font-medium text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center text-[#151515] rounded-lg px-4 py-2 m-2 border-2 border-[#F25F4C] font-medium text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${NodeImg})`}}
                className='shadow-lg shadow-[#151515] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-[#151515] font-bold tracking-wider'>
                            React JS 
                        </span>
                        <div className='pt-2 text-center'>
                            <a href="">
                                <button className='text-center text-[#151515] rounded-lg px-4 py-2 m-2 border-2 border-[#F25F4C] font-medium text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center text-[#151515] rounded-lg px-4 py-2 m-2 border-2 border-[#F25F4C] font-medium text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${FigmaImg})`}}
                className='shadow-lg shadow-[#151515] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover effects*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl text-[#151515] font-bold tracking-wider'>
                            React JS 
                        </span>
                        <div className='pt-2 text-center'>
                            <a href="">
                                <button className='text-center text-[#151515] rounded-lg px-4 py-2 m-2 border-2 border-[#F25F4C] font-medium text-lg'>Demo</button>
                            </a>
                            <a href="">
                                <button className='text-center text-[#151515] rounded-lg px-4 py-2 m-2 border-2 border-[#F25F4C] font-medium text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects