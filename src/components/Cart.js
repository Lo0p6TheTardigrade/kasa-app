import React from 'react';

import { logementList } from '../datas/logementList';
import '../styles/Gallery.css';
const Gallery = () => {
  return (
    <div className="gallery">
      {logementList.map((selected) => (
        <figure
          className="figure-gallery"
          key={selected.id}>
          <img
            src={selected.cover}
            alt={selected.title}
            className="image-gallery"
          />
          <figcaption>{selected.title}</figcaption>
        </figure>
      ))}
    </div>
  );
};

export default Gallery;
