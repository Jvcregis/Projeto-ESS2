import React from 'react';
import { Link } from 'react-router-dom';
import storeIcon from '../../Assets/storeIcon.png'
import './GoToItemPageButton.css'

const GoToItemPageButton: React.FC = () => {
  return (
    <Link to="/itempage" className="itemPageButton">
      <img src={storeIcon} alt="Home" />
    </Link>
  );
};

export default GoToItemPageButton;
