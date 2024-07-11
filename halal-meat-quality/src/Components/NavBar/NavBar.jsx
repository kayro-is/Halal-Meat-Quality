import './NavBar.scss'

import React from 'react';

const NavBar = () => {
  return (
    <header className='header'>
        <div className='logo'>
        <img src="/HMQ.png" alt="Logo" />
        </div>
        <nav className='navbar'>
           <a href="/">Inicio</a>
           <a href="/">Presentación</a>
           <a href="/">Nuestros Socios</a>
           <a href="/">Certificación</a>
           <a href="/">Contacto</a>

        </nav>

    </header>
  );
}

export default NavBar;