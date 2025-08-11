import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='flex jus'>
    <div>
      <h1>logo</h1>
    </div>
     <div>
      <NavLink to="/" >Home</NavLink> 
     <NavLink to="/about">About</NavLink> 
     <NavLink to="/services" >Services</NavLink> 
     <NavLink to="/contant" >Contant</NavLink>
     </div> 
    </nav>
  )
}

export default Header
