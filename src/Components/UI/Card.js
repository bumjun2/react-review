import React from 'react';
import './Card.css';

const Card = ({ children, className }) => {
  const makeCardName = 'card ' + className;
  return <div className={makeCardName}>{children}</div>;
};

export default Card;
