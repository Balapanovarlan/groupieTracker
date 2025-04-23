// src/components/EmptyBanner/EmptyBanner.jsx
import React from 'react';
import styles from './EmptyBanner.module.css';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const EmptyBanner = ({ title, description, image, buttonText, buttonLink }) => {
  return (
    <div className={styles.container}>
      <img src={image} alt="Empty State" className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{description}</p>
      {buttonLink && (
        <Button
          component={Link}
          to={buttonLink}
          variant="contained"
          color="primary"
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
};

export default EmptyBanner;
