import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Head from 'next/head';
import styles from '../assets/scss/pages/Home.module.scss';

const Home = () => {
  const [data, setData] = useState([]);
  
  return (
    <>
      <Head>
        <title>Un autre monde</title>
        <meta name="description" content="Test" />
        <html lang="fr" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id={'discover'} className={styles.blocCommunaute}>
          <h2 className={styles.titleMain}>Contenu pour la section découverte</h2>
        </div>

        <div id={'community'} className={styles.blocCommunaute}>
          <h2 className={styles.titleMain}>Contenu pour la section communauté</h2>
        </div>
      </main>
    </>
  );
}

export default Home;