import './NavBar.scss'
import React, { useState } from 'react';

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  return (
    <header className='header'>
      <div className='logo'>
        <img src="/HMQ.png" alt="Logo" />
      </div>
      <nav className={`navbar ${isMobileMenuOpen ? 'open' : ''}`}>
        <a href="#hero">Inicio</a>
        <a href="/">Presentación</a>
        <a href="/">Nuestros Socios</a>
        <a href="#article">Certificación</a>
        <a href="#contact">Contacto</a>
      </nav>
      <div className='burger' onClick={toggleMobileMenu}>
        <div className='line1'></div>
        <div className='line2'></div>
        <div className='line3'></div>
      </div>
    </header>
  );
}

export default NavBar;
