import React from 'react';
import { Link } from 'react-router-dom';
import logement from '../datas/logements.json';
import '../styles/Cart.css';

const Cart = () => {
  const figures = [];

  for (let i = 0; i < logement.length; i++) {
    const element = logement[i];
    figures.push(
      <Link
        to={`/logement/${element.id}`}
        key={element.id}
        className="figure-gallery">
        <figure
          className="figure-gallery"
          key={element.id}>
          <img
            src={element.cover}
            alt={element.title}
            className="image-gallery"
          />
          <div className="gradient-layer"></div>
          <figcaption className="font-settings-white">{element.title}</figcaption>
        </figure>
      </Link>
    );
  }

  return figures;
};

export default Cart;
