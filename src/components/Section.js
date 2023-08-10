import React from 'react';

import '../styles/Section.css';
import section from '../assets/section1.png';
const Section = () => {
  return (
    <img
      src={section}
      alt="section illustrer"
      className="img-section"
    />
  );
};

export default Section;
