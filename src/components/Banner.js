import React from 'react';
import bannerImg from '../assets/section1.png';
import '../styles/Banner.css';

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="banner">
        <img
          src={bannerImg}
          alt="bannière"
        />
      </div>
      <div className="banner-title">
        <h1 className="font-settings-white">Chez vous, partout ailleurs</h1>
      </div>
    </div>
  );
};

export default Banner;
