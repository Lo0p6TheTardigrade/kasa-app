import React from 'react';

import '../styles/Navigation.css';
const Navigation = () => {
  const home = 'Accueil';
  const about = 'A propos';
  return (
    <nav
      className="App-nav"
      role="navigation">
      <ul className="nav-list">
        <li>{home}</li>
        <li>{about}</li>
      </ul>
    </nav>
  );
};

export default Navigation;
