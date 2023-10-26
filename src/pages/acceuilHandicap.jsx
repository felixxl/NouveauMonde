import React from 'react';
import Banner from '../components/Banner';
import BackToTopButton from '../components/input/BackToTop';
import CustomContentModule from '../components/input/CustomContentModule';
import Description from '../components/Description';
import Sleep from '../components/Sleep';
import SleepInverse from '../components/SleepInverse';  
import styles from '../assets/scss/pages/acceuilHandicap.module.scss';

const Acceuilhandicape = () => {
  
  const sleepTitle = "La chambre Corossol :" ;
  const sleepDescription = "Chambre indépendante de 19,20 m² Vue mer et montagne équipée d'une Salle d'eau privative (douche à l'italienne, WC), d'un bureau, terrasse privative de 8,60 m² et petit balcon privatif, accès piscine à partir de la chambre. Cette chambre donne également accès par un balcon à une autre chambre de 11,50m2 (idéal pour une petite famille)";
  const sleepImages = [
    "/images/ChambreLit1.jpg",
    "/images/ChambreVue1.jpg",
    "/images/ChambreCouchage1.jpg",
    "/images/ChambreEntrer1.jpg",
    "/images/ChambreDouche1.jpg"
  ];
  const sleepTitle2 = "La Chambre Cannelle";
  const sleepDescription2 = "Chambre indépendante de 16 m² avec vue piscine, équipée d'une salle d'eau de 4 m² (douche à l'italienne, WC), d'un bureau, petite terrasse, accès piscine à partir de la chambre";
  const sleepImages2 = [
    "/images/chambrevert.jpg",
    "/images/chambrevert2.jpg",
    "/images/chambrevert3.jpg",
    "/images/chambrevert4.jpg",
    "/images/chambrevert5.jpg"
  ];
  const sleepTitle3 = "Chambre Sapotille";
  const sleepDescription3 = "- Avec la chambre Sapotille de 11,50m² accessible par un balcon commun (idéal pour une petite famille). Cette dernière ne peut se louer seule. ";
  const sleepImages3 = [
    "/images/Sapotille1.jpg",
    "/images/Sapotille2.jpg",
    "/images/Sapotille3.jpg",
    "/images/Sapotille4.jpg",
    "/images/Sapotille5.jpg"
  ];

  return (
    <div className={styles.background}>
      <Banner 
        title="Accueil&nbsp;Handicap"
        content="Chambres d'hôtes adaptées aux normes PMR"
      />
      <div className={styles.mainContent}>
        <BackToTopButton />
        <div className={styles.borderLeft}></div>
        <div className={styles.borderRight}></div>
        <div className={styles.blocCommunaute}>
        <Description 
          texts={[
            "Blottie au milieu de l'île papillon, La Kaz à VinCe se révèle comme un joyau d'accueil spécialement pensé pour les personnes en situation de handicap.",
            "Entouré de la verdoyante forêt tropicale guadeloupéenne et offrant des vues panoramiques sur l'océan azur, cet endroit est bien plus qu'une simple maison d'hôtes ; c'est un havre de paix, une invitation à la détente et à l'évasion.",
            "Chaque détail de La KaZ à VinCe a été soigneusement étudié pour garantir une expérience totale et sans obstacles pour tous ses résidents. Les sentiers adaptés permettent une immersion sans pareil dans la flore exubérante de la Guadeloupe, avec des points de vue qui émerveillent et ravissent l'âme à chaque tournant.",
            "Avec seulement deux chambres, toutes deux conçues conformément aux normes PMR, l'intimité et le confort sont au rendez-vous. Le design combine habilement une architecture créole traditionnelle avec des commodités modernes, assurant à chaque visiteur une expérience authentique tout en se sentant comme chez soi."
          ]}
        />
        </div>
        <div className={styles.space}>    
          <Sleep title={sleepTitle} description={sleepDescription} images={sleepImages} />
          <div className={styles.space}/>
          <SleepInverse title={sleepTitle2} description={sleepDescription2} images={sleepImages2} />
          <div className={styles.space}/>
          <Sleep title={sleepTitle3} description={sleepDescription3} images={sleepImages3} />
        </div>
        <div className={styles.blocCommunaute}>
          <Description 
            texts={[
              "Activités collectives disponibles sur place en supplément : yoga, aquagym dynamique, taï-chi, relaxation dynamique, aéroboxe, pilate",
              "Bien-être : massages",
              "Soins énergétiques",
              "Pour ceux qui souhaitent simplement se détendre, la piscine, adaptée et accessible, est l'endroit idéal pour se rafraîchir sous le soleil tropical.",
              "L'engagement de La KaZ à VinCe envers ses visiteurs se manifeste non seulement à travers ses installations, mais aussi grâce à son personnel dévoué, formé spécifiquement pour accompagner les personnes en situation de handicap.",
              "Chaque hôte est reçu avec une chaleur et une prévenance qui font la fierté de cette maison. La KaZ à VinCe n'est pas seulement une destination, mais une expérience, une ode à la beauté de la Guadeloupe et à l'inclusion. Un lieu où le temps semble s'arrêter, et où chaque moment est une célébration de la diversité et de la splendeur de la vie.",
              "Au plaisir de vous rencontrer",
              "Céline & Vincent"
            ]} 
          />
        </div> 
      </div>
    </div>
  );
};

export default Acceuilhandicape;
