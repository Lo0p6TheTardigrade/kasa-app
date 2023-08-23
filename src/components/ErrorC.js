import React from 'react';
import '../styles/Error.css';
import { Link } from 'react-router-dom';

const ErrorC = () => {
  return (
    <div className="error-container">
      <div className="error-title-container">
        <h1 className="error-title">404</h1>
      </div>
      <div className="error-message-container">
        <h4 className="error-message">Oups! La page que vous demandez n'existe pas.</h4>
      </div>
      <div className="error-link-container">
        <Link to={'/'}>
          <p className="error-link">Retourner sur la page d’accueil</p>
        </Link>
      </div>
    </div>
  );
};

export default ErrorC;
