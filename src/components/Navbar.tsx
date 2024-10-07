import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
function Navbar() {
  return (
    <div className='container pt-8  rounded-xs '>
        <div className='flex justify-between items-center'>
            <div className='text-xl font-medium'>Alisha Kayani</div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'><a href={"#hero"}>Home</a></li>
                <li className='menuLink'><a href={"#about"}>About</a></li>
                <li className='menuLink'><a href={"#projects"}>Projects</a></li>
                <li className='menuLink'><a href={"#skills"}>Skills</a></li>
                <li className='menuLink'><a href={"#contact"}>contact</a></li>
    
            </ul>
            <AiOutlineMenu className='md:hidden' size={30}/>
        </div>
    </div>
  )
}

export default Navbar