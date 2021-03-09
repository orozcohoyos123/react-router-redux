import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const headerNavMainText = 'Perfil';
const headerNavAccountText = 'Cuenta';
const headerNavLogIn = 'Iniciar Sesión';

const Header = () => (
  <header className="header">
    <Link to="/">
      <img
        className="header__img"
        src={logo}
        alt="Platzi Video"
      />
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="" />
        <p>{headerNavMainText}</p>
      </div>
      <ul>
        <li>
          <a href="/">{headerNavAccountText}</a>
        </li>
        <li>
          <Link to="/login">
            {headerNavLogIn}
          </Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
