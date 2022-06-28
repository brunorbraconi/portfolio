import React from 'react'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {GiTie} from 'react-icons/gi'
import {useTheme} from 'next-themes'
import Image from 'next/image'
export const Sidebar = () => {



const {theme, setTheme} = useTheme()

const changeTheme = () => {
    setTheme(theme==="light"?"dark":"light")
}

  return (
    <div>
       <Image src='/assets/brunito.png'
       alt='user avatar'
       className='mx-auto border rounded-full'
       height='128px'
       width='128px'
       layout='intrinsic'
       />
       <h3 className='my-4 font-medium tracking-wider text-3x1 font-kaushan'>
           <span className='text-purple'>Bruno </span>
           Braconi
       </h3>
        <p className='px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200'>Full Stack Web Developer</p>
        <a className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200' href='/assets/Brunoresume.pdf'
        download='Brunoresume.pdf'>
            <GiTie className='w-6 h-6'/> Download Resume
        </a>
        {/* //social icon */}
        <div className='flex justify-around w-9/12 mx-auto my-5 text-purple md:w-full'>
            <a href="https://www.linkedin.com/in/bruno-braconi-63a39714b/">
                <AiFillLinkedin className='w-8 h-8 cursor-pointer' />
            </a>
            <a href="https://github.com/brunorbraconi">
                <AiFillGithub className='w-8 h-8 cursor-pointer' />
            </a>
        </div>
        {/* address */}
        <div className='py-4 my-5 bg-gray-200 dark:bg-dark-500' style={{marginLeft: '-1rem', marginRight: '-1rem'}}>
            <div className='flex justify-center space-x-2 item-center'>
                <GoLocation />
                <span >Mendoza, Argentina</span>
            </div>
            <p className='my-2 '>brunorbraconi@hotmail.com</p>
            <p className='my-2'>+542616085200</p>
        </div>
        {/* Email button */}
        <button className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-purple to-cyan-500 focus:outline-none'
        onClick={()=>window.open('mailto:brunorbraconi@hotmail.com')}>E-mail me</button>
        <button 
        onClick={changeTheme}
        className='w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-purple to-cyan-500'>Toggle Dark Theme</button>
    </div>
  )
}

export default Sidebar