import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  return (
    <div className='container pt-8'>
  <div className='flex justify-start items-start absolute top-10 left-5'>
    <div className='text-2xl font-medium text-left '>Portfolio</div>
    <ul className=' gap-10 lg:gap-16 md:flex ml-96 mt-2 '>
      <li className='menuLink'><a href='#hero'>Home</a></li>
      <li className='menuLink'><a href='#about'>About</a></li>
      <li className='menuLink'><a href='#projects'>Projects</a></li>
      <li className='menuLink'><a href='#skills'>Skills</a></li>
      <li className='menuLink'><a href='#contact'>Contact</a></li>
    </ul>
    <AiOutlineMenu className='md:hidden' size={30} />
  </div>
</div>
  )
}

export default Header;

