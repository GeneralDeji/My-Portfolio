import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleToggle = ()=> setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <h1 className='text-2xl font-bold text-pink-600 font-signature'>DEJI</h1>

        <ul className='hidden md:flex'>
            <li>
                <Link to="home" smooth={true} duration={500} >
                    Home
                </Link>
            </li>

            <li>
                <Link to="about" smooth={true} duration={500} >
                    About
                </Link>
            </li>

            <li>
                <Link to="skills" smooth={true} duration={500} >
                    Skills
                </Link>
            </li>

            <li>
                <Link to="project" smooth={true} duration={500} >
                    Projects
                </Link>
            </li>

            <li>
                <Link to="contact" smooth={true} duration={500} >
                    Contact
                </Link>
            </li>
        </ul>

        {/* THE MOBILE VIEW BELOW */}
        {/* Hamburger */}
        <div onClick={handleToggle} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes/>}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute bg-[#0a192f] top-0 left-0 w-full h-screen flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleToggle} to="home" smooth={true} duration={500} >
                    Home
                </Link>
            </li>

            <li className='py-6 text-4xl'>
                <Link onClick={handleToggle} to="about" smooth={true} duration={500} >
                    About
                </Link>
            </li>

            <li className='py-6 text-4xl'>
                <Link onClick={handleToggle} to="skills" smooth={true} duration={500} >
                    Skills
                </Link>
            </li>

            <li className='py-6 text-4xl'>
                <Link onClick={handleToggle} to="project" smooth={true} duration={500} >
                    Projects
                </Link>
            </li>

            <li className='py-6 text-4xl'>
                <Link onClick={handleToggle} to="contact" smooth={true} duration={500} >
                    Contact
                </Link>
            </li>

        </ul>

        {/* Social Icon */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href="https://www.linkedin.com/in/emmanuel-otegbade-70587b248/" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a href="https://github.com/GeneralDeji" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                        Github <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a href="mailto:otegbadeemmanuel@yahoo.com" target='_blank' className='flex justify-between items-center w-full text-gray-300'>
                        Email <HiOutlineMail size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a href="/OTEGBADE EMMANUEL.pdf" target='_blank' download={true} className='flex justify-between items-center w-full text-gray-300'>
                        Resume <BsFillPersonLinesFill size={30}/>
                    </a>
                </li>
            </ul>

        </div>
    </div>
  )
}

export default Navbar