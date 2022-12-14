import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4 pt-[60px]'>
        <form method='POST' action="https://getform.io/f/99105000-fe10-4806-a700-485f8cd73dec" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300 '>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - myemail@gmail.com</p>
            </div>

            <input type="text" placeholder='Name' name="name" className='p-2 bg-[#ccd6f6]'/>
            <input type="email" placeholder='Email' name="email"  className='my-4 p-2 bg-[#ccd6f6]'/>
            <textarea name="message" placeholder='Message' rows="9" className='p-2 bg-[#ccd6f6]'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-6 mx-auto flex items-center'>Let's Collaborate</button>
        </form>

    </div>
  )
}

export default Contact