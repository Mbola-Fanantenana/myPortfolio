import React from 'react'
import devL3 from '../svg/dev1.svg'
import devL2 from '../svg/dev2.svg'

const Experiences = () => {
    return (
        <div className='experiences'>
            {/* Container */}
            <div className='md:max-w-[900px] sm:max-w-[600px] mx-auto p-4 flex flex-col justify-start w-full h-full'>
                <div>
                    <p className='text-2xl sm:text-4xl text-gray-600 font-semibold pb-2'>Experiences</p>
                    <div className='w-10 sm:w-20 h-[4px] bg-gradient-to-r from-[#F25F4C] to-indigo-600'></div>
                </div>
                
                <div className='w-full text-center md:space-y-8'>
                    {/* Experience I */}
                    <div className='md:grid grid-cols-2 gap-8'>
                        <div className=''>
                            <h1 className='text-[20px] sm:text-2xl bg-clip-text text-[#F25F4C] pt-10'>Caisse d'Epargne de Madagascar</h1>
                            <h3 className='text-gray-600 font-semibold p-4'>Web developer</h3>
                            <p className='text-[13px] sm:text-[14px] text-gray-600 text-justify'><span className='font-semibold'>Oct 2022 - Jan 2023 :</span> Three-month professional internship at the
                                “ Caisse d'Epargne de Madagascar “
                                whose theme " Establishment of a web application
                                for the management and monitoring of authorisations ”.
                            </p>
                            <div className='flex justify-center space-x-2 pt-2'>    
                                <div className='text-gray-600  text-[12px] sm:text-[12px] border-2 border-[#F25F4C] rounded-tl-lg rounded-br-lg hover:-rotate-3 cursor-pointer px-1 sm:px-2 py-2'>React 16</div>
                                <div className='text-gray-600  text-[12px] sm:text-[12px] border-2 border-[#F25F4C] rounded-tl-lg rounded-br-lg hover:-rotate-3 cursor-pointer px-1 sm:px-2 py-2'>React Bootstrap</div>
                                <div className='text-gray-600  text-[12px] sm:text-[12px] border-2 border-[#F25F4C] rounded-tl-lg rounded-br-lg hover:-rotate-3 cursor-pointer px-1 sm:px-2 py-2'>Spring boot</div>
                                <div className='text-gray-600  text-[12px] sm:text-[12px] border-2 border-[#F25F4C] rounded-tl-lg rounded-br-lg hover:-rotate-3 cursor-pointer px-1 sm:px-2 py-2'>Postgresql</div>
                            </div>
                        </div>
                        <div className='hidden md:flex justify-center'>
                            <img className='w-80' src={devL3} alt="stage L3" />
                        </div>
                    </div>
                    {/* Experience II */}
                    <div className='md:grid grid-cols-2 gap-8'>
                        <div className='hidden md:flex justify-center'>
                            <img className='w-80' src={devL2} alt="stage L2" />
                        </div>
                        <div className=''>
                            <h1 className='text-[20px] sm:text-2xl bg-clip-text text-[#F25F4C] pt-10'>MVola DSI/Galaxy Andraharo</h1>
                            <h3 className='text-gray-600 font-semibold p-4'>Web developer</h3>
                            <p className='text-[13px] sm:text-[14px] text-gray-600 text-justify'>
                                <span className='font-semibold'>March 2021 - Mai 2021 :</span> Professional internship of 3 months within the company
                                MVola DSI whose theme “Monitoring Reporting and
                                User Management”.
                            </p>
                            <div className='flex justify-center space-x-2 pt-2'>
                                <div className='text-gray-600 text-[12px] sm:text-[12px] border-2 border-[#F25F4C] rounded-tl-lg rounded-br-lg hover:-rotate-3 cursor-pointer px-1 sm:px-2 py-2 '>Symfony 5.2</div>
                                <div className='text-gray-600 text-[12px] sm:text-[12px] border-2 border-[#F25F4C] rounded-tl-lg rounded-br-lg hover:-rotate-3 cursor-pointer px-1 sm:px-2 py-2 '>Bootstrap</div>
                                <div className='text-gray-600 text-[12px] sm:text-[12px] border-2 border-[#F25F4C] rounded-tl-lg rounded-br-lg hover:-rotate-3 cursor-pointer px-1 sm:px-2 py-2 '>Mysql</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experiences