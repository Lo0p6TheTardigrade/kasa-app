import React, { useState } from 'react';
import '../styles/InfoPic.css';
import arrow from '../assets/arrow_back.png';
import Error from '../pages/Error';

const InfoPic = (props) => {
  const selectedLogement = props.selectedLogement;
  const [showDescription, setShowDescription] = useState(false);
  const [showEquipments, setShowEquipments] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const toggleEquipments = () => {
    setShowEquipments(!showEquipments);
  };

  // Rating in number
  const ratingValue = parseInt(selectedLogement.rating);

  // Star = rating value
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= ratingValue) {
      // Full svg rating
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="#FF6060">
          <path d="M9.4323 4.3376C9.2978 4.05833 9.0134 3.88062 8.7012 3.88062C8.3889 3.88062 8.1071 4.05833 7.97 4.3376L6.3376 7.6964L2.692 8.23462C2.3873 8.28032 2.1334 8.49358 2.0395 8.78553C1.9456 9.07749 2.0217 9.39992 2.2401 9.61572L4.8854 12.2332L4.2609 15.9322C4.2101 16.2368 4.3371 16.5466 4.5884 16.7268C4.8397 16.9071 5.1723 16.9299 5.4465 16.7852L8.7037 15.0462L11.9609 16.7852C12.2351 16.9299 12.5677 16.9096 12.819 16.7268C13.0703 16.544 13.1973 16.2368 13.1465 15.9322L12.5194 12.2332L15.1648 9.61572C15.3831 9.39992 15.4618 9.07749 15.3654 8.78553C15.2689 8.49358 15.0176 8.28032 14.7129 8.23462L11.0647 7.6964L9.4323 4.3376Z" />
        </svg>
      );
    } else {
      // Empty svg rating
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 19 19"
          fill="#E3E3E3">
          <path d="M9.4323 4.3376C9.2978 4.05833 9.0134 3.88062 8.7012 3.88062C8.3889 3.88062 8.1071 4.05833 7.97 4.3376L6.3376 7.6964L2.692 8.23462C2.3873 8.28032 2.1334 8.49358 2.0395 8.78553C1.9456 9.07749 2.0217 9.39992 2.2401 9.61572L4.8854 12.2332L4.2609 15.9322C4.2101 16.2368 4.3371 16.5466 4.5884 16.7268C4.8397 16.9071 5.1723 16.9299 5.4465 16.7852L8.7037 15.0462L11.9609 16.7852C12.2351 16.9299 12.5677 16.9096 12.819 16.7268C13.0703 16.544 13.1973 16.2368 13.1465 15.9322L12.5194 12.2332L15.1648 9.61572C15.3831 9.39992 15.4618 9.07749 15.3654 8.78553C15.2689 8.49358 15.0176 8.28032 14.7129 8.23462L11.0647 7.6964L9.4323 4.3376Z" />
        </svg>
      );
    }
  }

  return (
    <section className="logement-info">
      {selectedLogement ? (
        <div className="info-pic">
          <div className="left-section">
            <p id="title">{selectedLogement.title}</p>
            <p id="location">{selectedLogement.location}</p>
            <div id="tags">
              {selectedLogement.tags.map((tag, index) => (
                <span
                  key={index}
                  className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="right-section">
            <div id="host">
              <p id="host-name">{selectedLogement.host.name}</p>
              <img
                id="host-picture"
                src={selectedLogement.host.picture}
                alt={selectedLogement.host.name}
              />
            </div>
            <div id="rating">{stars}</div>
          </div>
          <div className="end-section">
            <div className="description">
              <div
                className="description-container"
                onClick={toggleDescription}>
                <span className="description-container-name">Description</span>
                <img
                  src={arrow}
                  alt="bouton menu"
                  className={`arrow_back-down ${showDescription ? 'rotate' : ''}`}
                />
              </div>
              {showDescription && <p id="description">{selectedLogement.description}</p>}
            </div>
            <div className="equipments">
              <div
                className="equipments-container"
                onClick={toggleEquipments}>
                <span className="equipments-container-name">Équipements</span>
                <img
                  src={arrow}
                  alt="bouton menu"
                  className={`arrow_back-down ${showEquipments ? 'rotate' : ''}`}
                />
              </div>
              {showEquipments &&
                selectedLogement.equipments.map((equipment, index) => (
                  <p
                    key={index}
                    className="equipment-list">
                    {equipment}
                  </p>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <Error />
      )}
    </section>
  );
};

export default InfoPic;
