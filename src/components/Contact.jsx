import React from 'react'

function Contact() {
    return (
        <div name="contacts" className='md:max-w-[900px] sm:max-w-[600px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

            <div className=''>
                <p className='text-2xl sm:text-4xl text-gray-600 font-semibold pb-2'>Contact me</p>
                <div className='w-10 sm:w-20 h-[4px] bg-gradient-to-r from-[#F25F4C] to-indigo-600'></div>
                <p className='py-4 text-[14px] text-gray-600'>Submit the form bellow</p>
            </div>

            <form method='POST' action="https://getform.io/f/da6558b0-5a60-4492-898e-c3c7aaca1b4c" className='flex flex-col max-w-[600px] w-full'>
                <input className='bg-white p-2 border-2 rounded-md' type="text" placeholder='your name' name='name' />
                <input className='bg-white my-4 p-2 border-2 rounded-md' type="email" placeholder='your email address' name="email" />
                <textarea className='bg-white p-2 border-2 rounded-md' name="message" rows="5" placeholder='enter your message'></textarea>
                <button className='text-gray-600 bg-gray-100 font-semibold border-2 border-[#F25F4C] hover:border-gray-600 px-4 py-3 my-4 rounded-md'>Send</button>
            </form>

        </div>
    )
}

export default Contact