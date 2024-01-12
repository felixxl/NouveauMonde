import React from 'react';
import Banner from '../components/Banner';
import Head from 'next/head';
import BackToTopButton from '../components/input/BackToTop';
import Description from '../components/Description';
import Temoinage from '../components/temoinage';
import WatchThis from '../components/input/WatchThis';
import styles from '../assets/scss/pages/laKaZAVinCe.module.scss';

const temoinageData = [
  { 
    text: "J'ai vécu une expérience incroyable et enrichissante dans un cadre magnifique.", 
    author: 'Manon Redureau', 
    imageUrl: '/images/ChambreDouche1.jpg',
    alt: 'Avis de Manon Redureau'
  },
];

const laKaZAVinCe = () => {
  return (
    <div className={styles.background}>
      <Head>
        <title>LaKaZAVince hebergement location magnifique - Guadeloup</title>
        <meta name="description" content="Location au milieu de la Guadeloup, magnifique panorama et chambre charmante, petit déjeuner possible." charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <html lang="fr" />
        <link rel="icon" href="/images/logo.png" />
        <script type="application/ld+json">
          {`
            {
                "@context": "http://schema.org",
                "@type": "LodgingBusiness",
                "name": "Un autre monde",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "123 rue de la plage",
                    "addressLocality": "Basse-Terre",
                    "addressRegion": "Guadeloupe",
                    "postalCode": "97100"
                },
                "telephone": "+590 1234 5678",
                "description": "Découvrez nos locations de gîte, chalet, maison et chambres en Guadeloupe.",
            }
          `}
        </script>
      </Head>

      <Banner 
        title="La&nbsp;KaZ&nbsp;à&nbsp;VinCe"
        content="Chambres d'hôtes dans un cadre idyllique"
      />
      <div className={styles.mainContent}>
        <div className={styles.borderLeft}></div>
        <div className={styles.borderRight}></div>
        <BackToTopButton/>
        <div>
          <WatchThis className={styles.top}/>
        </div>
        <div className={styles.blocCommunaute}>
        <Description 
          texts={[
            "Activités collectives disponibles sur place en supplément : yoga, aquagym dynamique, taï-chi, relaxation dynamique, aéroboxe, pilate, lady-boxe/cardio-boxe, salsa et atelier aquarelle ",
            "Bien-être : massages, journée bien être",
            "Soins énergétiques",
            "----",
            "Que faire dans les environs :",
            "Plages à 15 mn à pied, randonnées...",  
            "Vieux Habitants :",
            "Club Associatif de plongée",
            "La vallée de Grande Rivière, vallée de Beaugendre",
            "Le domaine de Vanibel pour sa vanille, son cacao et son cafe",
            "Le musée du Café (Café Chaulet)",
            "Le site des roches gravées de Duplessis",
            "L'Habitation Darius et l'Habitation L'oiseau classées aux monuments Historiques.",
            "L'Eglise Saint Joseph, la plus ancienne église de la Guadeloupe",
            "----",
            "A Bouillante :",
            "A 20 mn : La réserve Cousteau à Bouillante",
            "A 15 mn : Le Bain chaud de Bouillante",
            "Zoo du parc des mamelles",
            "Le Tappeur : accrobranche", 
            "Parc de la source",
            "A Pointe Noire :",
            "La maison du cacao",
            "Le saut d'Acomat",
            "L'Habitation Manon",
            "Parc Aquacole",
            "----",
            "Au plaisir de vous rencontrer",
            "Céline & Vincent"
          ]}
        />
        </div>
        <div className={styles.blocCommunauteV2}>
          <h2>Voir nos chambres</h2>
          <a href="/acceuilHandicap" className={styles.link}>Cliquez ici pour plus d'infos</a>
          <div className={styles.divingClub}>
            <p>
              Découvrez le club de plongée exceptionnel de Guadeloupe! Rejoignez-nous pour une aventure sous-marine inoubliable.
            </p>
            <a href="https://www.facebook.com/gwadabulles?locale=fr_FR" target="_blank" rel="noopener noreferrer" className={styles.fbLink}>
              Visitez notre Facebook
            </a>
          </div>
        </div>
        <div>
          <div className={styles.bottop}>
            <Temoinage {...temoinageData[0]}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default laKaZAVinCe;