import React from 'react';
import ActiviteImage from '../../components/ActivitesImages';

const Aquarelle = () => {
  const backgroundImageUrl = '/images/EventAquarelle.jpg';
  const nomActivite = '';
  return (
    <ActiviteImage nom={nomActivite} background={backgroundImageUrl} />
  );
}

export default Aquarelle;