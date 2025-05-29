import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/Logo.png';

function Navbar({ aoMudarTela }) {
  const [menuAberto, setMenuAberto] = useState(false);

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="nav-logo">
          <img src={logo} alt="HLTECH Logo" className="logo-img" />
        </div>

        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      <ul className={`nav-links ${menuAberto ? 'ativo' : ''}`}>
        <li onClick={() => aoMudarTela('promocoes')}>Promoções</li>
        <li onClick={() => aoMudarTela('monte')}>Monte seu PC</li>
        <li onClick={() => aoMudarTela('dashboard')}>Loja</li>
        <li onClick={() => aoMudarTela('usuario')}>Usuário</li>
      </ul>
    </nav>
  );
}

export default Navbar;
