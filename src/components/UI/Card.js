import React from 'react';
import styles from './Card.module.css';

const Card = ({ children, className }) => {
  // const madeClass = 'card ' + className;
  return <div className={`${styles.card} ${className}`}>{children}</div>;
  // return <div className={madeClass}>{children}</div>;
};

export default Card;
