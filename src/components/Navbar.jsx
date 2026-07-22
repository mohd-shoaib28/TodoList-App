import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {
  return (
    <nav className="items-center sticky top-0 z-50 flex justify-center w-4/5 text-white m-auto p-2 rounded-b-full shadow-lg shadow-blue-300 bg-gradient-to-t from-blue-400 to-blue-600 ">
        <img src={logo} alt="logo" className='w-12 mx-3' />
        <span className='text-2xl font-bold'>ToDo List</span>
    </nav>
  )
}

export default Navbar
