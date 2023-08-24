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
        <h1 className="font-settings-white">Chez vous, partout et ailleurs</h1>
      </div>
    </section>
  );
};

export default Section;
