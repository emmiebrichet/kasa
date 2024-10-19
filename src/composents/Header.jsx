import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/LOGO.png'; 
import './index.css'; // Importez le fichier CSS ici

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo de Kasa" />
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">À propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
