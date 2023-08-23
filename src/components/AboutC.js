import React, { useState } from 'react';
import arrow from '../assets/arrow_back.png';
import section from '../assets/section2.png';
import '../styles/AboutC.css';

const AboutC = () => {
  const [showFiability, setshowFiability] = useState(false);
  const [showRespect, setshowRespect] = useState(false);
  const [showService, setshowService] = useState(false);
  const [showSecurity, setshowSecurity] = useState(false);

  const toggleFiability = () => {
    setshowFiability(!showFiability);
  };
  const toggleRespect = () => {
    setshowRespect(!showRespect);
  };
  const toggleSecurity = () => {
    setshowSecurity(!showSecurity);
  };
  const toggleService = () => {
    setshowService(!showService);
  };
  return (
    <div className="about">
      <section className="section">
        <div className="img-section">
          <img
            src={section}
            alt="section illustrer"
            className="img-illustration"
          />
        </div>
        <div className="text-section">
          <p className="font-settings-white"></p>
        </div>
      </section>
      <div className="about-sections">
        <div className="fiability">
          <div
            className="about-container background-red-primary"
            onClick={toggleFiability}>
            <span className="about-container-name font-settings-white">Fiabilité</span>
            <img
              src={arrow}
              alt="bouton menu"
              className={`arrow_back-down ${showFiability ? 'rotate' : ''}`}
            />
          </div>
          {showFiability ? (
            <p
              id="fiability"
              className="background-grey-bg font-settings-red">
              Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes
            </p>
          ) : (
            ''
          )}
        </div>
        <div className="respect">
          <div
            className="about-container background-red-primary"
            onClick={toggleRespect}>
            <span className="about-container-name font-settings-white">Respect</span>
            <img
              src={arrow}
              alt="bouton menu"
              className={`arrow_back-down ${showRespect ? 'rotate' : ''}`}
            />
          </div>
          {showRespect ? (
            <p
              id="respect"
              className="background-grey-bg font-settings-red">
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme
            </p>
          ) : (
            ''
          )}
        </div>
        <div className="security">
          <div
            className="about-container background-red-primary"
            onClick={toggleSecurity}>
            <span className="about-container-name font-settings-white">Service</span>
            <img
              src={arrow}
              alt="bouton menu"
              className={`arrow_back-down ${showSecurity ? 'rotate' : ''}`}
            />
          </div>
          {showSecurity ? (
            <p
              id="security"
              className="background-grey-bg font-settings-red">
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme
            </p>
          ) : (
            ''
          )}
        </div>
        <div className="service">
          <div
            className="about-container background-red-primary"
            onClick={toggleService}>
            <span className="about-container-name font-settings-white">Sécurité</span>
            <img
              src={arrow}
              alt="bouton menu"
              className={`arrow_back-down ${showService ? 'rotate' : ''}`}
            />
          </div>
          {showService ? (
            <p
              id="service"
              className="background-grey-bg font-settings-red">
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes
            </p>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutC;
