import React from 'react';
import logo from '../../assets/Logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='w-full flex justify-between align-middle absolute p-5'>
      <Link to="/" className='w-full'><div className='w-1/2'><img src={logo} alt="Weather App" className='h-20 w-20' /></div></Link>
      <div className='w-3/12 self-center'>
        <ul className='flex justify-evenly font-extralight text-white text-lg'>
          <Link to="/about" className='hover:underline underline-offset-8'><li>About</li></Link>
          <Link to="/" className='hover:underline underline-offset-8'><li>Contact</li></Link>
          <Link to="/" className='hover:underline underline-offset-8'><li>Documentation</li></Link>
        </ul>
      </div>

    </header>
  )
}

export default Header;