import React from 'react';
import Activite from '../../components/Activites';

const Yoga = () => {
  
  return (
    <Activite
      nom="Yoga"
      organisateur="Christine Mojica"
      description={`Nous organisons un cours de Yoga avec Christine Mojica, (diplômée de l'Institut de Varma Yoga), tous les lundis à 18h précise. ...`}
      Matériel="Une tenue confortable, pieds nus/chaussettes/chaussons, bouteille d'eau, tapis de sol"
      date="Tous les lundis à 18h. Accueil à partir de 17h30"
      prix="10 euros la séance ou 80 euros les 10 seances"
    />
  );
}



export default Yoga;
