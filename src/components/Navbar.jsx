import React, {useState} from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa"

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className='fixed w-full h-20 flex justify-between items-center px-4'>
        {/* Logo */}
        <h1 className='text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#F25F4C] to-fuchsia-500'>MF...</h1>
        <ul className='hidden md:flex bg-clip-text text-transparent bg-gradient-to-r from-[#F25F4C] to-fuchsia-500'>
            <li className='p-5'>About</li>
            <li className='p-5'>Skills</li>
            <li className='p-5'>Experiences</li>
            <li className='p-5'>Works</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'> 
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-[#F25F4C] bg-[#f5f5f5] ease-in-out duration-500' : 'fixed left-[-100%]' }>
        <h1 className='w-full text-3xl font-semibold text-[#151515] m-5'>MF.</h1>
        <ul className='pt-20 uppercase p-4'>
            <li className='p-5 border-b border-[#F25F4C]'>About</li>
            <li className='p-5 border-b border-[#F25F4C]'>Skills</li>
            <li className='p-5 border-b border-[#F25F4C]'>Experiences</li>
            <li className='p-5 border-b border-[#F25F4C]'>Works</li>
        </ul>
        </div>
         
        {/*Social icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul className=''>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-2 duration-300'>
                    <a className='flex justify-between items-center w-full text-[#151515]' href="">
                        LinkedIn <FaLinkedin size={30} color='blue' />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-2 duration-300'>
                    <a className='flex justify-between items-center w-full text-[#151515]' href="" >
                        Github <FaGithub size={30} color='#151515'/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-2 duration-300'>
                    <a className='flex justify-between items-center w-full text-[#151515]' href="">
                        Email <FaEnvelope size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-2 duration-300'>
                    <a className='flex justify-between items-center w-full text-[#151515]' href="">
                        Whatsapp <FaWhatsapp size={30} color='green' />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar