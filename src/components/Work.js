import React from 'react'
import PostIt from '../images/PostIt.jpeg'
import TradExpress from '../images/tradExpresspics.jpeg'
import Bookmark from '../images/bookmarkpic.jpeg'
import Eduvid from '../images/eduvipic.jpeg'

const Work = () => {
  return (
    <div name='project' className='bg-[#0a192f] w-full md:h-screen text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                <p className='py-6'>// Check out some of my recent projects</p>
            </div>

            <div className='grid sm:grid-cols-2  gap-4'>
                <div style={{backgroundImage: `url(${PostIt})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Blog App (React, NodeJS, ExpressJS, MongoDB)
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://dejimernblogg.herokuapp.com/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/GeneralDeji/Blog" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${TradExpress})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Crypto Website (Frontend Project)
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://tradexpressdeji.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/GeneralDeji/TradExpressProject" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Bookmark})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application 
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://bookmark-deji.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/GeneralDeji/Bookmark-project" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${Eduvid})`}} 
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 px-4'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Educational Website (HTML, CSS, Javascript)
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="https://eduviddeji.netlify.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/GeneralDeji/My-first-responsive-website" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Work