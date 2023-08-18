import React from 'react';
import Cart from './Cart';

import '../styles/Gallery.css';
const Gallery = (props) => {
  return (
    <div className="gallery">
      {props.children}
      <Cart />
    </div>
  );
};

export default Gallery;
