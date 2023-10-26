import React from 'react';
import Activite from '../../components/Activites';

const Aeroboxe = () => {
  return (
    <Activite
      nom="Aéroboxe"
      organisateur="Jean-Noel Boncoeur"
      description={`Nous organisons un cours d'aéroboxe avec Jean-Noel Boncoeur, coach sportif (ancien boxeur amateur et entraîneur) tous les samedis à 17h00 précise et ce à partir du 07 janvier.
          Programme :
          Accueil à partir de 17h
          Démarrage à 17h30 précise` + "\n" + `Bénéfices d’une pratique régulière :...`}
      Matériel="Tenue de sport, baskets, bouteille d'eau, tapis de sol, serviette"
      date="Tous les samedis à 17h. Accueil à partir de 17h"
      prix="10 euros la seance. Des forfaits sont également proposés."
    />
  );
}

export default Aeroboxe;