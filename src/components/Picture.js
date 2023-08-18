import React from 'react';
import { useParams } from 'react-router-dom';
import logements from '../datas/logements.json';
import InfoPic from './InfoPic';
import Error from '../pages/Error';

const Picture = () => {
  const { id } = useParams();

  const selectedLogement = logements.find((logement) => logement.id === id);

  return (
    <section className="logement">
      {selectedLogement ? (
        <div>
          <figure
            className="figure-gallery"
            key={selectedLogement.id}>
            <img
              src={selectedLogement.cover}
              alt={selectedLogement.title}
              className="image-gallery"
            />
            {/* <figcaption>{selectedLogement.title}</figcaption> */}
          </figure>
          <InfoPic selectedLogement={selectedLogement} />
        </div>
      ) : (
        <Error />
      )}
      {selectedLogement ? 'true' : 'false'}
    </section>
  );
};

export default Picture;
