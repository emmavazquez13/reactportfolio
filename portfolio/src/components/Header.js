import React from 'react'

const Header = () => {
  return (
<header className='flex justify-between px-5 py-2 bg-gray-800 text-white'>
    <a href="/" className='logo text-2xl font-bold'>Emma Vazquez</a>

    <nav>
    {/* Desktop Nav */}
    <ul className="flex">
        <li><a href="/#">About</a></li>
        <li><a href="/#projects">Projects</a></li>
        <li><a href="/#blog">Blog</a></li>
        <li><a href="/#contact">Contact</a></li>
        <li><a href="/#resume">Resume</a></li>
    </ul>

    {/* Mobile Nav */}

    {/* Toggle Button */}

    </nav>

</header>
  )
}

export default Header
