import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa"
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='fixed w-full h-20 flex justify-between items-center px-4'>
            {/* Logo */}
            <h1 className='text-3xl font-semibold text-[#F25F4C] cursor-pointer'>
                <Link to='about' smooth={true} duration={500}>
                    MF ...
                </Link>
            </h1>
            {/* Menu */}
            <ul className='hidden md:flex text-[14px] text-[#F25F4C]'>
                <li className='p-5 cursor-pointer'>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='p-5 cursor-pointer'>
                    <Link to='experiences' smooth={true} duration={500}>
                        Experiences
                    </Link>
                </li>
                <li className='p-5 cursor-pointer'>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='p-5 cursor-pointer'>
                    <Link to='education' smooth={true} duration={500}>
                        Education
                    </Link>
                </li>
                <li className='p-5 cursor-pointer'>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
            {/*Condition*/}
            <div onClick={handleNav} className='md:hidden z-10'>
                {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
            </div>
            {/*Mobile menu*/}
            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen border-r-[#F25F4C] bg-[#f5f5f5] flex flex-col justify-center items-center ease-in-out duration-500'}>
                <ul className='pt-20 uppercase text-gray-600 font-medium p-4'>
                    <li className='py-6 text-2xl sm:text-4xl border-b-2 border-[#F25F4C] cursor-pointer'>
                        <Link to='about' smooth={true} duration={500} onClick={handleNav}>
                            About
                        </Link>
                    </li>
                    <li className='py-6 text-2xl sm:text-4xl border-b-2 border-[#F25F4C] cursor-pointer'>
                        <Link to='experiences' smooth={true} duration={500} onClick={handleNav}>
                            Experiences
                        </Link>
                    </li>
                    <li className='py-6 text-2xl sm:text-4xl border-b-2 border-[#F25F4C] cursor-pointer'>
                        <Link to='skills' smooth={true} duration={500} onClick={handleNav}>
                            Skills
                        </Link>
                    </li>
                    <li className='py-6 text-2xl sm:text-4xl border-b-2 border-[#F25F4C] cursor-pointer'>
                        <Link to='education' smooth={true} duration={500} onClick={handleNav}>
                            Education
                        </Link>
                    </li>
                    <li className='py-6 text-2xl sm:text-4xl border-b-2 border-[#F25F4C] cursor-pointer'>
                        <Link to='contact' smooth={true} duration={500} onClick={handleNav}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/*Social icons*/}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul className=''>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-2 duration-300'>
                        <a className='flex justify-between items-center w-full text-gray-600 font-semibold' href="https://www.linkedin.com/in/mbola-fanantenana">
                            LinkedIn <FaLinkedin size={30} color='blue' />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-2 duration-300'>
                        <a className='flex justify-between items-center w-full text-gray-600 font-semibold' href="https://github.com/Mbola-Fanantenana" >
                            Github <FaGithub size={30} color='#151515' />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-2 duration-300'>
                        <a className='flex justify-between items-center w-full text-gray-600 font-semibold' href="mailto:mbolarama.it@gmail.com">
                            Email <FaEnvelope size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-120px] hover:ml-2 duration-300'>
                        <a className='flex justify-between items-center w-full text-gray-600 font-semibold' href="https://wa.me/+261320707649">
                            Whatsapp <FaWhatsapp size={30} color='green' />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar