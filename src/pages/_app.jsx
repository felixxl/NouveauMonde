import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Loading from '../components/Loading';
import { RecoilRoot } from 'recoil'; 
import '../assets/scss/main.scss'

function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Simule un délai de chargement de 0 secondes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading global />;
  }

  if (router.pathname === '/admin') {
    return <Component {...pageProps} />;
  }
  
  return (
    <RecoilRoot>
      <div id="app">
        <div id="page-wrap">
          <Header title="default.title" />
          <Component {...pageProps} />
          <Footer title="default.title" />
        </div>
      </div>
    </RecoilRoot>
  );
}

export default App;
