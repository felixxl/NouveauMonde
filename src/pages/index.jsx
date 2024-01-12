import React from 'react';
import Head from 'next/head';
import Banner from '../components/Banner';
import BackToTopButton from '../components/input/BackToTop';
import Carousel from '../components/Carousel';
import CustomContentModule from '../components/input/CustomContentModule';
import Description from '../components/Description';
import styles from '../assets/scss/pages/Home.module.scss';

const Home = () => {

  const carouselItems = [
    {
      image: "/images/Carousel1.jpg",
      title: "Piscine",
      description: "Avec banc de repos et massage",
      alt: "Piscine du gîte en Guadeloupe"
    },
    {
      image: "/images/Carousel2.jpg",
      title: "Terrasse",
      description: "Avec de superbes couchés de soleil",
      alt: "Terrasse avec vue plein soleil "
    },
    {
      image: "/images/Carousel3.jpg",
      title: "Carbet",
      description: "Espace détente et activités",
      alt: "Un espace de détente et d'activités au milieu de la guadeloup"
    }
  ];

  return (
    <>
      <Head>
        <title>Location de Gîte en Guadeloupe - Un autre monde</title>
        <meta name="description" content="Découvrez nos locations de gîte, chalet, maison et chambres en Guadeloupe. Profitez d'un logement de qualité à Un autre monde. Réservation en ligne disponible. Activité bien être, yoga, aéroboxe, aquagym, peinture, pilates, relaxation, taichi, yoga " charset="utf-8" />
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

      <main className={styles.background}>
        <Banner         
          title="Accueil"
          content="Nous découvrir"
        />
        <div className={styles.mainContent}>
          <BackToTopButton/>
          <div className={styles.borderLeft}/>
          <div className={styles.borderRight}/>
          <div id="discover" className={styles.blocCommunaute}>
            <Description 
              texts={[
              "Qui sommes-nous ? ",
              "Deux personnalités opposées mais à la fois si connectées…",
              "L'un vient d'une génération de cafetiers du côté de Nantes… ilien d'adoption, il a traversé la France de par son métier d'ébéniste.",
              "L'autre semble avoir traversé les temps, ilienne, mais Alsacienne aussi de cœur, car c'est disons-le toute son enfance et son adolescence.",
              "Ensemble ils vous ouvrent les portes de leur monde, cet autre monde qui instantanément et instinctivement raisonnera en vous ou pas du tout. A vous de voir !",
              "   ",
              "« Lorsque nous avons visité ce site, sur les hauteurs de Tarare à Vieux-Habitants, nous étions loin d'imaginer ce déroulé… Une propriété qui nous incite à nous projeter différemment, à porter une réflexion sur le vivre ensemble et à faire de ce lieu un espace ou tous les styles et les genres se rencontrent, se mêlent et évoluent dans un monde autre ou les énergies semblent avoir fait escale. "
            ]}/> 
          </div>

          <Carousel 
          items={carouselItems} 
          className={styles.blocCommunauteV2}
          />

          <div id="discover" className={styles.blocCommunauteV2}>
            <CustomContentModule
              title="Céline & Vincent ..."
              content=""
              url="/images/celineVince.jpg"
              alt="Céline & Vincent, hôtes du gîte en Guadeloupe"
            />

            <CustomContentModule
              title="Vous accueille dans leur univers extraterrestre... et aquatique..."
              url="/images/swiming.jpg"
              alt="Un univers unique et magnifique au milieu de la guadeloupe"
            />

            <CustomContentModule
              title="Talia"
              content="Joueuse et hôtesse d'accueil."
              url="/images/chien.jpg"
              alt="chien en guadeloupe"
            />

            <CustomContentModule
              title="Isis"
              content="Intrépide et chasseuse, c'est la petite dernière."
              url="/images/chat.jpg"
              alt="chat en guadeloupe"
            />

            <CustomContentModule
              title="Isidore"
              content="La doyenne et gardienne, c'est un vrai chat de garde."
              url="/images/chat.png"
              alt="chat"
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
