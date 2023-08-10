import React from 'react';

import logo from '../assets/logo.png';
import '../styles/Logo.css';
const Logo = () => {
  return (
    <img
      src={logo}
      alt="logo du site"
      className="kasa-logo"
    />
  );
};

export default Logo;
