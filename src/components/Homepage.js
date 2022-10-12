import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import {Link} from 'react-scroll'


const Homepage = () => {
  return (
    <div name='home' className='bg-[#0a192f] w-full h-screen'>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-600'>👋 Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Otegbade Emmanuel Ayodeji</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer.</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>A self-motivated and creative Web developer with the ability of writing
            clean and efficient code. Willing to impact user experience by tackling
            web development challenges.</p>

            <div>
            <Link to="project" smooth={true} duration={500} >
                <button className='group flex items-center text-white border-2 p-3 my-2 hover:bg-pink-600 hover:border-pink-600 duration-300'>View Work 
                    <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </Link>

            </div>

        </div>
    
    </div>
  )
}

export default Homepage