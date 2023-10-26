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
      description: "Avec banc de repos et massage"
    },
    {
      image: "/images/Carousel2.jpg",
      title: "Terrasse",
      description: "Avec de superbes couchés de soleil"
    },
    {
      image: "/images/Carousel3.jpg",
      title: "Carbet",
      description: "Espace détente et activités"
    }
  ];

  return (
    <>
      <Head>
        <title>Un autre monde</title>
        <meta name="description" content="Découvrez un autre monde passionnant." />
        <html lang="fr" />
        <link rel="icon" href="/favicon.ico" />
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
            />

            <CustomContentModule
              title="Vous accueille dans leur univers extraterrestre... et aquatique..."
              // content="Meme chose"
              url2x="/images/swiming.jpg"
            />

            <CustomContentModule
              title="Talia"
              content="Joueuse et hôtesse d'accueil."
              url="/images/chien.jpg"
            />

            <CustomContentModule
              title="Isis"
              content="Intrépide et chasseuse, c'est la petite dernière."
              url2x="/images/chat.jpg"
            />

            <CustomContentModule
              title="Isidore"
              content="La doyenne et gardienne, c'est un vrai chat de garde."
              url2x="/images/chat.png"
            />

          </div>

        </div>
      </main>
    </>
  );
};

export default Home;
