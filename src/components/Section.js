import React from 'react';

import '../styles/Section.css';
import section from '../assets/section1.png';
const Section = (props) => {
  return (
    <section className="section">
      {props.children}
      <img
        src={section}
        alt="section illustrer"
        className="img-section"
      />
    </section>
  );
};

export default Section;
