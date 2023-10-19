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
      title: "Titre 1",
      description: "Description pour l'image 1"
    },
    {
      image: "/images/Carousel2.jpg",
      title: "Titre 2",
      description: "Description pour l'image 2"
    },
    {
      image: "/images/Carousel3.jpg",
      title: "Titre 3",
      description: "Description pour l'image 3"
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
          content="Loreum testoum proutoum"
        />
        <div className={styles.mainContent}>
          <BackToTopButton/>
          <div className={styles.borderLeft}/>
          <div className={styles.borderRight}/>
          <div id="discover" className={styles.blocCommunaute}>
            <Description /> 
          </div>

          <Carousel 
          items={carouselItems} 
          className={styles.blocCommunauteV2}
          />

          <div id="discover" className={styles.blocCommunauteV2}>
            <CustomContentModule
              title="Des solutions conseillées par des professionnels de santé."
              content="Ici, une description détaillée sur les solutions conseillées par des professionnels."
              url="/images/Carousel2.jpg"
              url2x="/images/Carousel2.jpg"
            />

            <CustomContentModule
              title="Une communauté active qui partage avis et astuces!"
              content="Ici, une description détaillée sur la communauté active et les avis partagés."
              url="/images/Carousel2.jpg"
              url2x="/images/Carousel2.jpg"
            />

            <CustomContentModule
              title="Des solutions conseillées par des professionnels de santé."
              content="Ici, une description détaillée sur les solutions conseillées par des professionnels."
              url="/images/Carousel2.jpg"
              url2x="/images/Carousel2.jpg"
            />

            <CustomContentModule
              title="Une communauté active qui partage avis et astuces!"
              content="Ici, une description détaillée sur la communauté active et les avis partagés."
              url="/images/Carousel2.jpg"
              url2x="/images/Carousel2.jpg"
            />
          </div>

        </div>
      </main>
    </>
  );
};

export default Home;
