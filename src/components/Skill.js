import React from 'react'
import {SiHtml5, SiJavascript, SiReact, SiExpress, SiMongodb, SiTailwindcss} from 'react-icons/si'
import {IoLogoCss3, IoLogoNodejs} from 'react-icons/io'

const Skill = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 px-4'>
      <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>// Here are a couple of the technologies i utilize in my development.</p>
        </div>



        <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8'>
          <div className='flex items-center gap-5 hover:scale-110 duration-500 py-3'>
            <SiHtml5 size={25}/>
            <p>HTML</p>            
          </div>

          <div className='flex items-center gap-5 hover:scale-110 duration-500 py-3'>
            <IoLogoCss3 size={25}/>
            <p>CSS</p>
          </div>

          <div className='flex items-center gap-5 hover:scale-110 duration-500 py-3'>
            <SiJavascript size={25}/>
            <p>Javascript</p>
          </div>

          <div className='flex items-center gap-5 hover:scale-110 duration-500 py-3'>
            <SiReact size={25}/>
            <p>React</p>
          </div>

          <div className='flex items-center gap-5 hover:scale-110 duration-500 py-3'>
            <IoLogoNodejs size={25}/>
            <p>NodeJS</p>
          </div>

          <div className='flex items-center gap-5 hover:scale-110 duration-500 py-3'>
            <SiExpress size={25}/>
            <p>ExpressJS</p>
          </div>

          <div className='flex items-center gap-5 hover:scale-110 duration-500 py-3'>
            <SiMongodb size={25}/>
            <p>MongoDB</p>
          </div>

          <div className='flex items-center gap-5 hover:scale-110 duration-500 py-3'>
            <SiTailwindcss size={25}/>
            <p>Tailwind</p>
          </div>


        </div>
      </div>
      
    </div>
  )
}

export default Skill