import React from 'react'

import '../assets/styles/Header.css'
import user from '../assets/user-icon.png';
import logo from '../assets/logo-platzi-video-BW2.png';

const Header = () => (
    <header className='header'>
        <img className='header__img' src={logo} alt="platzi video" />
        <div className='header__menu'>
            <div className='header__menu--profile'>
                <img src={user} alt="user" />
                <p>Perfil</p>
            </div>
            <ul>
                <li><a href="/">Cuenta</a></li>
                <li><a href="/">Cerrar Sesión</a></li>
            </ul>
        </div>
    </header>
);

export default Header;
