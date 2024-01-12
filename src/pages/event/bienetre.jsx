import React from 'react';
import ActiviteImage from '../../components/ActivitesImages';

const BienEtre = () => {
  const backgroundImageUrl = '/images/EventSois.jpg';
  const nomActivite = '';
  return (
    <ActiviteImage nom={nomActivite} background={backgroundImageUrl} />
  );
}

export default BienEtre;