import React from 'react';
import ActiviteImage from '../../components/ActivitesImages';

const Concert = () => {
  const backgroundImageUrl = '/images/concert.jpg';
  const nomActivite = '';
  return (
    <ActiviteImage nom={nomActivite} background={backgroundImageUrl} />
  );
}

export default Concert;