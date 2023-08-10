import React from 'react';

import '../styles/Footer.css';
import footer from '../assets/logo_footer.png';
const Footer = () => {
  return (
    <footer className="footer">
      <img
        src={footer}
        alt="logo pied de page"
      />
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;
