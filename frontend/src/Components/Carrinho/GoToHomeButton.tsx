import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../Assets/homeIcon.png'
import './GoToHomeButton.css'

const GoToHomeButton: React.FC = () => {
  return (
    <Link to="/" className="goToHomeButton">
      <img src={homeIcon} alt="Home" />
    </Link>
  );
};

export default GoToHomeButton;