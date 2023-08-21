import React from 'react';

import '../styles/Section.css';
import section from '../assets/section1.png';
const Section = (props) => {
  return (
    <section className="section">
      {props.children}
      <div className="img-section">
        <img
          src={section}
          alt="section illustrer"
          className="img-illustration"
        />
      </div>
      <div className="text-section">
        <p>Chez vous, partout et ailleurs</p>
      </div>
    </section>
  );
};

export default Section;
