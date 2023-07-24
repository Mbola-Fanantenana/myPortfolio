import React from 'react'
import devL3 from '../svg/dev1.svg'
import devL2 from '../svg/dev2.svg'

const Experiences = () => {
  return (
    <div className='experiences w-full h-screen'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto flex flex-col justify-start w-full h-full'>
            <div>
                <p className='text-4xl text-gray-600 font-semibold pb-2'>Experiences</p>
                <div className='w-20 h-[4px] bg-gradient-to-r from-[#F25F4C] to-fuchsia-500'></div>
            </div>

            <div className='w-full grid grid-cols-2 text-center gap-8'>
                <div className=''>
                    <h1 className='text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#F25F4C] to-fuchsia-500 pt-20'>Caisse d'Epargne de Madagascar</h1>
                    <h3 className='text-[#151515] font-semibold p-4'>Web developer</h3>
                    <p className='text-gray-600 text-justify'><span className='font-semibold'>Oct 2022 - Jan 2023 :</span> Three-month professional internship at the 
                        “ Caisse d'Epargne de Madagascar “
                        whose theme " Establishment of a web application 
                        for the management and monitoring of authorisations ”.
                    </p>
                    <div className='flex justify-between space-x-4 pt-2'>
                        <div className='text-gray-600 text-[#2px] border-2 border-[#F25F4C] rounded-tl-lg rounded-br-lg hover:-rotate-3 cursor-pointer px-2 py-2'>React 16</div>
                        <div className='text-gray-600 text-[#2px] border-2 border-[#F25F4C] rounded-tl-lg rounded-br-lg hover:-rotate-3 cursor-pointer px-2 py-2'>React Bootstrap</div>
                        <div className='text-gray-600 text-[#2px] border-2 border-[#F25F4C] rounded-tl-lg rounded-br-lg hover:-rotate-3 cursor-pointer px-2 py-2'>Spring boot</div>
                        <div className='text-gray-600 text-[#2px] border-2 border-[#F25F4C] rounded-tl-lg rounded-br-lg hover:-rotate-3 cursor-pointer px-2 py-2'>Postgresql</div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img className='w-96' src={devL3} alt="stage L3" />
                </div>
                <div className='flex justify-center'>
                    <img className='w-96' src={devL2} alt="stage L2" />
                </div>
                <div className=''>
                    <h1 className='text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#F25F4C] to-fuchsia-500 pt-20'>MVola DSI/Galaxy Andraharo</h1>
                    <h3 className='text-[#151515] font-semibold p-4'>Web developer</h3>
                    <p className='text-gray-600 text-justify'>
                        <span className='font-semibold'>March 2021 - Mai 2021 :</span> Professional internship of 3 months within the company 
                        MVola DSI whose theme “Monitoring Reporting and 
                        User Management”.
                    </p>
                    <div className='flex justify-center space-x-4 pt-2'>
                        <div className='text-gray-600 text-[#2px] border-2 border-[#F25F4C] rounded-tl-lg rounded-br-lg hover:-rotate-3 cursor-pointer px-2 py-2'>Symfony 5.2</div>
                        <div className='text-gray-600 text-[#2px] border-2 border-[#F25F4C] rounded-tl-lg rounded-br-lg hover:-rotate-3 cursor-pointer px-2 py-2'>Bootstrap</div>
                        <div className='text-gray-600 text-[#2px] border-2 border-[#F25F4C] rounded-tl-lg rounded-br-lg hover:-rotate-3 cursor-pointer px-2 py-2'>Mysql</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experiences