import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex justify-between items-center w-full h-20 bg-blue-600 text-white'>
    <div className='pl-15'>
      <h1 className='text-2xl font-mono font-bold'>logo</h1>
    </div>
     <div className='flex items-center text-xl font-sans gap-10 pr-15'>
      <NavLink to="/" >Home</NavLink> 
     <NavLink to="/about">About</NavLink> 
     <NavLink to="/services" >Services</NavLink> 
     <NavLink to="/contant" >Contant</NavLink>
     </div> 
    </nav>
  )
}

export default Header
