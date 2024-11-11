import React, { useState } from 'react'
import './NavBar.css';

const Navbar = () => {

  const [activeLink, setActiveLink] = useState('home');

  const handleClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <header className='header'>
        <nav className="navbar">
          <div className="navbar-logo">
              <a href="/">Logo</a>
          </div>
          <ul className="navbar-links">
            <li>
                <a
                    href="/"
                    onClick={() => handleClick('home')}
                    className={activeLink === 'home' ? 'active' : ''}
                >
                    Inicio
                </a>
            </li>
            <li>
                <a
                    href="/itms"
                    onClick={() => handleClick('about')}
                    className={activeLink === 'about' ? 'active' : ''}
                >
                    Productos
                </a>
            </li>
            <li>
                <a
                    href="/sales"
                    onClick={() => handleClick('contact')}
                    className={activeLink === 'contact' ? 'active' : ''}
                >
                    Ventas
                </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar