// InfoPic.js
import React from 'react';
import '../scss/InfoPic.scss';

const InfoPic = (props) => {
  const selectedLogement = props.selectedLogement;

  return (
    <section className="logement">
      {selectedLogement && (
        <div>
          <div>
            <p id="title">{selectedLogement.title}</p>
            <p id="location">{selectedLogement.location}</p>
            <p id="tags">{selectedLogement.tags}</p>
            <p id="description">Description: {selectedLogement.description}</p>
          </div>
          <p id="host">{selectedLogement.host.name}</p>
          <img
            id="picture"
            src={selectedLogement.host.picture}
            alt={selectedLogement.host.name}
          />
          <p>{selectedLogement.rating}</p>
          <p>Equipements: {selectedLogement.equipments}</p>
        </div>
      )}
    </section>
  );
};

export default InfoPic;
