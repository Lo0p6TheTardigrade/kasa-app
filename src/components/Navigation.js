import React from 'react';

import '../styles/Navigation.css';
import { Link } from 'react-router-dom';
const Navigation = () => {
  const home = 'Accueil';
  const about = 'A propos';
  return (
    <nav
      className="App-nav"
      role="navigation">
      <ul className="nav-list">
        <Link to="/">
          <li className="font-settings-red">{home}</li>
        </Link>
        <Link to="/about">
          <li className="font-settings-red">{about}</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;
