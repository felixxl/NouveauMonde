import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Banner from '../components/Banner';
import BackToTopButton from '../components/input/BackToTop';
import styles from '../assets/scss/pages/UnAutreMonde.module.scss';

const UnAutreMonde = () => {
  const activities = [
    { title: 'Yoga', description: 'Description détaillée du Yoga...', url: '/images/yoga.jpg', link: 'activities/yoga', alt: "Personne qui pratique du yoga en guadeloup"  },
    { title: 'Tai-chi', description: 'Description détaillée du Tai-chi...', url: '/images/tai-chi.jpg', link: 'activities/taichi', alt: "Personne qui pratique du taichi en guadeloup" },
    { title: 'Relaxation Dynamique', description: 'Description de la Relaxation Dynamique...', url: '/images/relaxation.jpg', link: 'activities/relaxationdynamique', alt: "Personne qui pratique de la relaxation dynamique en guadeloupe"  },
    { title: 'Pilates', description: 'Description détaillée du Pilates...', url: '/images/yoga2.jpg' , link: 'activities/pilates', alt: "Personne qui pratique du pilates en guadeloup" },
    { title: 'Aquagym Dynamique', description: 'Description de l\'Aquagym Dynamique...', url: '/images/aquagym.jpg', link: 'activities/aquagymdynamique', alt: "Personne qui pratique de l'aquagym en guadeloup" },
    { title: 'Aeroboxe', description: 'Description détaillée de l\'Aeroboxe...', url: '/images/Carousel1.jpg', link: 'activities/aeroboxe', alt: "Personne qui pratique de l'aeroboxe en guadeloup"  },
    { title: 'Peinture', description: 'Description détaillée de la Peinture...', url: '/images/peinture.jpg', link: 'activities/peinture', alt: "Personne qui peinte en guadeloup"  }
  ];

  const events = [
    { title: 'Concert', description: 'Description détaillée du Concert...',url: '/images/concert.jpg', link: 'event/concert', alt: "Description de l'image"  },
    { title: 'Exposition de peinture', description: 'Description de l\'Exposition de peinture...',url: '/images/EventPeinture.jpg', link: 'event/peinture', alt: "Description de l'image"  },
    { title: 'Bien être', description: 'Description détaillée de l\'Atelier...',url: '/images/EventSois.jpg', link: 'event/bienetre', alt: "Description de l'image"  },
    { title: 'Stage', description: 'Description détaillée du Stage...',url: '/images/EventAquarelle.jpg', link: 'event/aquarelle', alt: "Description de l'image"  }
  ];

  return (
    <div className={styles.background}>
      <Head>
        <title>Association un autre monde- Guadeloup</title>
        <meta name="description" content="Association d'activités et d'événement en Guadeloup. Profitez d'un logement de qualité à Un autre monde. Réservation en ligne disponible. Activité bien être, yoga, aéroboxe, aquagym, peinture, pilates, relaxation, taichi, yoga " charset="utf-8" />
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
        title="Un&nbsp;autre&nbsp;monde"
        content="Association d'art et de culture"
      />
      <div className={styles.mainContent}>
        <BackToTopButton/>
        <div className={styles.borderLeft}></div>
        <div className={styles.borderRight}></div>
        <div className={styles.decorativeTitleContainer}>
          <h2 className={styles.decorativeTitle}>Nos activités</h2>
        </div>

        <div className={styles.activitySection}>
          <div className={styles.hexRow}>
            {activities.map((activity, index) => (
              <Link href={activity.link} key={index}>
                <div 
                  className={styles.hex}
                  style={{backgroundImage: `url(${activity.url})`}}
                >
                <div className={styles.hexTitle}>{activity.title}</div>
              </div>
            </Link>
          ))}
        </div>
        </div>
        <div className={styles.separ}>
          <div className={styles.decorativeTitleContainer}>
            <h2 className={styles.decorativeTitle}>Événements de l'association</h2>
          </div>
        </div>
        <div className={styles.eventSection}>
          <div className={styles.hexRow}>
            {events.map((event, index) => (
              <Link href={event.link} key={index}>
                <div 
                  className={styles.hex}
                  style={{backgroundImage: `url(${event.url})`}}
                >
                <div className={styles.hexTitle}>{event.title}</div>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnAutreMonde;
