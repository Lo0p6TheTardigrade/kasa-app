import React from 'react';

import '../styles/Navigation.css';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
  const home = 'Accueil';
  const about = 'A Propos';
  return (
    <nav
      className="App-nav"
      role="navigation">
      <ul className="nav-list">
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? 'nav-active' : '')}>
          <li className="font-settings-red">{home}</li>
        </NavLink>
        <NavLink
          to="/about"
          className={(nav) => (nav.isActive ? 'nav-active' : '')}>
          <li className="font-settings-red">{about}</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;
