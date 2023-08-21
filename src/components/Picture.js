import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../datas/logements.json';
import InfoPic from './InfoPic';
import Error from '../pages/Error';
import vectorLeft from '../assets/vector_left.png';
import vectorRight from '../assets/vector_right.png';

const Picture = () => {
  const { id } = useParams();
  const selectedLogement = logements.find((logement) => logement.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    } else {
      setCurrentImageIndex(selectedLogement.pictures.length - 1);
    }
  };

  const nextImage = () => {
    if (currentImageIndex < selectedLogement.pictures.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };

  return (
    <section className="logement">
      {selectedLogement ? (
        <div className="logement-content">
          <figure
            className="figure-logement-gallery"
            key={selectedLogement.id}>
            <img
              src={selectedLogement.pictures[currentImageIndex]}
              alt={selectedLogement.title}
              className="image-logement-gallery"
            />
          </figure>
          {selectedLogement.pictures.length > 1 && (
            <div className="carousel-nav">
              <div className="carousel-back-and-forward">
                <img
                  src={vectorLeft}
                  alt="navigation carousel gauche"
                  className="nav-left"
                  onClick={prevImage}
                />
                <img
                  src={vectorRight}
                  alt="navigation carousel droite"
                  className="nav-right"
                  onClick={nextImage}
                />
              </div>
              <div className="carousel-number">
                <span>
                  {currentImageIndex + 1} / {selectedLogement.pictures.length}
                </span>{' '}
              </div>
            </div>
          )}
          <InfoPic selectedLogement={selectedLogement} />
        </div>
      ) : (
        <Error />
      )}
    </section>
  );
};

export default Picture;
